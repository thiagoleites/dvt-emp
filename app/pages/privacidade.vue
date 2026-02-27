<script setup lang="ts">
useHead({
  title: 'Política de Privacidade - Devt Digital',
  meta: [
    { name: 'description', content: 'Política de Privacidade da Devt Digital' }
  ]
})

import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const lastUpdated = 'Fevereiro de 2026'
</script>

<template>
  <div class="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
    <Header />

    <!-- Hero Header -->
    <header class="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 border-b border-slate-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance">
        <div v-motion :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0 }" :transition="{ duration: 500 }">
          <p class="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 ring-1 ring-inset ring-indigo-600/10 mb-6">
            Termos & Políticas
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 mt-2 leading-[1.1]">
            Nossa Política de<br class="hidden sm:block" /> Privacidade
          </h1>
          <p class="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Transparência e compromisso com a segurança dos seus dados na Devt Digital.
          </p>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="py-16 md:py-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 700, delay: 100 }"
          class="space-y-16 text-slate-600 text-lg sm:text-[1.125rem] leading-relaxed"
        >
          <!-- Sections here -->
          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">1. Introdução</h2>
            <p>
              A Devt Digital é uma empresa de tecnologia responsável pelo desenvolvimento de plataformas SaaS
              (Software como Serviço). Esta Política de Privacidade descreve como coletamos, utilizamos e
              protegemos dados pessoais, em conformidade com a <strong class="font-semibold text-slate-900">Lei Geral de Proteção de Dados</strong> (Lei nº 13.709/2018 – LGPD)
              e com a Meta Platform Policy.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">2. Dados Coletados</h2>
            <p class="mb-4">Podemos coletar as seguintes informações quando você utiliza nossos serviços:</p>
            <ul class="space-y-3 mt-6">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Nome e e-mail fornecidos voluntariamente</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Informações de contato e dados da empresa</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Identificador da conta comercial do Instagram</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Nome público da conta conectada</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Token de acesso gerado via autenticação oficial (OAuth)</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Informações técnicas necessárias para publicação de conteúdo via Instagram Graph API</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Mídias e legendas enviadas pelo próprio usuário para publicação</span>
              </li>
            </ul>
            <div class="mt-8 bg-indigo-50/80 rounded-2xl p-6 border border-indigo-100">
              <p class="text-indigo-900 m-0 font-medium text-base">
                <strong class="font-bold">Importante:</strong> Não coletamos dados sensíveis nem acessamos mensagens privadas, lista de seguidores ou dados pessoais de terceiros.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">3. Integração com Meta e Instagram</h2>
            <p class="mb-6">
              Nossa plataforma utiliza exclusivamente APIs oficiais da Meta, incluindo o Facebook Login e a Instagram Graph API para garantir a mais alta segurança e conformidade.
            </p>
            <p class="mb-4">O acesso aos dados ocorre apenas com:</p>
            <ul class="space-y-3 mt-4">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Autorização explícita do titular da conta</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Fluxo oficial de autenticação OAuth da Meta</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Concessão das permissões necessárias pelo próprio usuário</span>
              </li>
            </ul>
            <div class="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700">
              <p class="m-0 text-base">
                <strong class="font-bold text-slate-900">Privacidade em primeiro lugar:</strong> Não armazenamos senhas de contas Meta ou Instagram. Utilizamos apenas tokens de acesso fornecidos pela Meta
                dentro das permissões previamente autorizadas.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">4. Finalidade do Tratamento</h2>
            <p class="mb-4">Os dados coletados são utilizados estritamente para as seguintes finalidades:</p>
            <ul class="space-y-3 mt-6">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Publicação programada de conteúdos automáticos</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Identificação e verificação da conta comercial conectada</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Operação técnica e manutenção da plataforma SaaS</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Cumprimento de todas as obrigações legais aplicáveis</span>
              </li>
            </ul>
            <p class="mt-8">
              <strong class="font-semibold text-slate-900">Base legal do tratamento:</strong>
              Execução de contrato, consentimento explícito do titular da conta e cumprimento de obrigação legal.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">5. Compartilhamento de Dados</h2>
            <p>Em respeito a você, <strong class="font-semibold text-slate-900">não vendemos, alugamos ou comercializamos</strong> seus dados pessoais sob nenhuma hipótese.</p>
            <p class="mt-4 mb-4">Esses dados só poderão ser compartilhados nos seguintes casos:</p>
            <ul class="space-y-3 mt-6">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Quando estritamente necessário para execução técnica do serviço</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Com provedores de infraestrutura de nuvem, sob contrato de rigorosa confidencialidade</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Por determinação legal ou exigência judicial, mediante prévio aviso</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">6. Armazenamento e Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais avançadas para proteger dados contra acessos não autorizados,
              alterações indevidas ou divulgação ilícita, mantendo seus dados protegidos no mais alto nível de segurança do setor.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">7. Retenção de Dados</h2>
            <p>
              Os dados são armazenados localmente de forma criptografada apenas pelo período estritamente necessário para execução do serviço ou cumprimento das nossas obrigações legais.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">8. Revogação de Permissões</h2>
            <p>
              Você detém sempre o controle. O usuário pode revogar o acesso da nossa plataforma a qualquer momento, acessando as configurações da sua própria conta Meta/Facebook
              (na central de aplicativos conectados).
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">9. Exclusão de Dados</h2>
            <p>
              O titular pode solicitar a exclusão total de seus dados enviando um e-mail direto para nossa equipe:
              <a href="mailto:contato@devt.com.br" class="font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-600 transition-colors">contato@devt.com.br</a>.
              Após a solicitação formal, todos os dados ativos serão permanentemente removidos em prazo legal e o titular receberá confirmação oficial da exclusão.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">10. Direitos do Titular (LGPD)</h2>
            <p class="mb-4">O titular tem total direito para solicitar:</p>
            <ul class="space-y-3 mt-6">
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Confirmação da existência de tratamento dos dados</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Acesso limpo e claro a todos dados registrados</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Correção de dados incompletos ou mal formatados</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Anonimização ou exclusão imediata de informações</span>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Revogação oficial e definitiva do consentimento de uso</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">11. Alterações</h2>
            <p>Esta Política de Privacidade poderá ser atualizada periodicamente para refletir mudanças tecnológicas ou diretivas legais. Manteremos você informado.</p>
          </section>

          <section class="mt-16 pt-12 border-t border-slate-200">
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 tracking-tight">12. Contato</h2>
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100 flex flex-col justify-center">
                <p class="text-sm font-medium text-indigo-600 mb-1">E-mail de Contato</p>
                <a href="mailto:contato@devt.com.br" class="text-lg font-semibold text-slate-900 hover:text-indigo-600 transition-colors">contato@devt.com.br</a>
              </div>
              <div class="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
                <p class="text-sm font-medium text-slate-500 mb-1">Localização</p>
                <p class="text-lg font-semibold text-slate-900">Brasil</p>
              </div>
            </div>
          </section>
        </article>

        <!-- Footer Notice -->
        <div class="mt-24 pt-8 border-t border-slate-100 text-center text-slate-500 text-sm">
          <p class="mb-2">Última atualização: <span class="font-medium text-slate-700">{{ lastUpdated }}</span></p>
          <p>&copy; {{ currentYear }} Devt Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </main>
  </div>
</template>