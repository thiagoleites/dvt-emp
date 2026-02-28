import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const runtimeConfig = useRuntimeConfig();

    // Validate environment variables early
    if (!runtimeConfig.mailersendApiKey || !runtimeConfig.mailersendFromEmail || !runtimeConfig.mailersendToEmail) {
        throw createError({
            statusCode: 500,
            statusMessage: 'MailerSend is not configured properly in the server environment.',
        });
    }

    // Validate the incoming JSON body
    if (!body.name || !body.email || !body.message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing required fields: name, email, or message',
        });
    }

    // Validate Proof-of-Work Anti-Spam
    const { pow_challenge, pow_nonce } = body;

    if (!pow_challenge || pow_nonce === undefined) {
        throw createError({
            statusCode: 403,
            statusMessage: 'Falha na verificação de segurança (Anti-Spam ausente). Recarregue a página.',
        });
    }

    // 1. Verify if the challenge is authentic and not expired
    if (!verifyChallenge(pow_challenge, runtimeConfig.powSecret)) {
        throw createError({
            statusCode: 403,
            statusMessage: 'Desafio de segurança inválido ou expirado. Recarregue a página.',
        });
    }

    // 2. Verify if the Proof-of-Work (mined nonce) is correct
    if (!verifyProofOfWork(pow_challenge, pow_nonce)) {
        throw createError({
            statusCode: 403,
            statusMessage: 'Prova de trabalho criptográfica inválida. Spam bloqueado.',
        });
    }

    try {
        const mailerSend = new MailerSend({
            apiKey: runtimeConfig.mailersendApiKey,
        });

        const sentFrom = new Sender(runtimeConfig.mailersendFromEmail, "Devt Digital Website");

        const recipients = [
            new Recipient(runtimeConfig.mailersendToEmail, "Devt Digital Team")
        ];

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(new Sender(body.email, body.name))
            .setSubject(`Nova mensagem de Contato: ${body.name}`)
            .setHtml(`
        <h3>Nova mensagem recebida pelo site Devt Digital</h3>
        <p><strong>Nome:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Mensagem:</strong></p>
        <blockquote>${body.message.replace(/\n/g, '<br />')}</blockquote>
      `)
            .setText(`
        Nova mensagem recebida pelo site Devt Digital
        Nome: ${body.name}
        Email: ${body.email}
        Mensagem:
        ${body.message}
      `);

        await mailerSend.email.send(emailParams);

        const clientRecipients = [
            new Recipient(body.email, body.name)
        ];

        const clientAutoReplyParams = new EmailParams()
            .setFrom(new Sender(runtimeConfig.mailersendFromEmail, "Devt Digital"))
            .setTo(clientRecipients)
            .setSubject(`Recebemos seu contato, ${body.name} - Devt Digital`)
            .setHtml(`
              <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
                <div style="background-color: #0f172a; padding: 24px; text-align: center;">
                  <h1 style="color: #fff; margin: 0; font-size: 24px;">Devt Digital</h1>
                </div>
                <div style="padding: 32px 24px;">
                  <p style="font-size: 16px; margin-bottom: 16px;">Olá <strong>${body.name}</strong>,</p>
                  <p style="font-size: 16px; margin-bottom: 16px; line-height: 1.5;">Obrigado por entrar em contato conosco! Recebemos sua mensagem e nossa equipe retornará o mais breve possível.</p>
                  <div style="background-color: #f8fafc; border-left: 4px solid #0f172a; padding: 16px; margin-bottom: 24px; border-radius: 0 4px 4px 0;">
                    <p style="font-size: 14px; margin: 0; color: #475569;"><strong>Sua mensagem:</strong></p>
                    <p style="font-size: 14px; margin: 8px 0 0 0; color: #334155; font-style: italic;">${body.message.replace(/\n/g, '<br />')}</p>
                  </div>
                  <p style="font-size: 16px; margin-bottom: 24px; line-height: 1.5;">Se o seu assunto for urgente, você também pode nos contatar através do nosso WhatsApp: <strong><a href="https://wa.me/5582996706451" style="color: #2563eb; text-decoration: none;">+55 (82) 99670-6451</a></strong>.</p>
                  <p style="font-size: 16px; margin: 0;">Atenciosamente,<br><strong>Equipe Devt Digital</strong></p>
                </div>
                <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #eaeaea;">
                  <p style="font-size: 12px; color: #64748b; margin: 0;">Você está recebendo este email porque entrou em contato através do site devt.com.br.</p>
                </div>
              </div>
            `)
            .setText(`
Olá ${body.name},

Obrigado por entrar em contato conosco! Recebemos sua mensagem e nossa equipe retornará o mais breve possível.

Sua mensagem:
${body.message}

Se o seu assunto for urgente, você também pode nos contatar através do nosso WhatsApp: +55 (82) 99670-6451.

Atenciosamente,
Equipe Devt Digital
            `);

        await mailerSend.email.send(clientAutoReplyParams);

        return {
            success: true,
            message: 'Email sent successfully!'
        }

    } catch (error: any) {
        console.error('Error sending email through MailerSend:', error);
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Failed to send email',
        });
    }
});
