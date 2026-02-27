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
