<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans selection:bg-slate-200">
    <Header />
    <main class="pt-32 pb-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 500 }"
          class="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200"
        >
          <div class="mb-12">
            <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Política de Privacidade</h1>
            <p class="text-xl text-slate-500 font-medium">Devt Digital – Plataforma SaaS</p>
          </div>

          <div class="space-y-10 text-slate-700 leading-relaxed">
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">1. Introdução</h2>
              <p>A Devt Digital é uma empresa de tecnologia responsável pelo desenvolvimento de plataformas SaaS. Esta Política explica como coletamos, utilizamos e protegemos dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD) e com as diretrizes da Meta Platform Policy.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">2. Dados Coletados</h2>
              <p>Podemos coletar:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Nome e email fornecidos voluntariamente</li>
                <li>Informações de contato</li>
                <li>Dados técnicos necessários para autenticação via APIs oficiais</li>
                <li>Dados da conta comercial autorizada, quando integrados via Instagram Graph API</li>
              </ul>
              <p class="mt-4">Não coletamos dados sensíveis sem consentimento explícito.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">3. Integração com Meta e Instagram</h2>
              <p>Nossa plataforma utiliza exclusivamente APIs oficiais da Meta (Instagram Graph API e Facebook Login).</p>
              <p class="mt-4">O acesso a dados ocorre apenas mediante:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Autorização explícita do titular da conta</li>
                <li>Permissões concedidas via fluxo oficial de autenticação</li>
              </ul>
              <p class="mt-4">Coletamos apenas os dados necessários para:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Publicação programada de conteúdos</li>
                <li>Identificação da conta comercial autorizada</li>
                <li>Operação técnica da plataforma</li>
              </ul>
              <p class="mt-4">Não acessamos mensagens privadas, dados pessoais de seguidores ou qualquer informação além das permissões autorizadas.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">4. Finalidade do Tratamento</h2>
              <p>Os dados são utilizados exclusivamente para:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Operação da plataforma SaaS</li>
                <li>Execução das funcionalidades contratadas</li>
                <li>Comunicação técnica com o usuário</li>
                <li>Cumprimento de obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">5. Compartilhamento de Dados</h2>
              <p>Não vendemos, alugamos ou comercializamos dados pessoais. Os dados somente poderão ser compartilhados quando:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Necessário para execução técnica do serviço</li>
                <li>Exigido por obrigação legal</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">6. Armazenamento e Segurança</h2>
              <p>Adotamos medidas técnicas e organizacionais adequadas para proteger dados contra acesso não autorizado, alteração indevida, divulgação ou destruição não autorizada.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">7. Retenção de Dados</h2>
              <p>Os dados serão armazenados apenas pelo tempo necessário para cumprir a finalidade do serviço ou obrigações legais.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">8. Revogação de Permissões</h2>
              <p>O usuário pode revogar o acesso da plataforma a qualquer momento pelas configurações da conta Meta/Facebook ou solicitando exclusão via email.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">9. Solicitação de Exclusão de Dados</h2>
              <p>O titular pode solicitar a exclusão de seus dados enviando email para: <span class="font-semibold">contato@devtdigital.com</span>. A solicitação será analisada e atendida no prazo legal aplicável.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">10. Direitos do Titular (LGPD)</h2>
              <p>O titular pode:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Solicitar confirmação de tratamento</li>
                <li>Solicitar acesso aos dados</li>
                <li>Corrigir dados incompletos</li>
                <li>Solicitar anonimização ou exclusão</li>
                <li>Revogar consentimento</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">11. Alterações</h2>
              <p>Esta Política poderá ser atualizada periodicamente.</p>
            </section>

            <section class="pt-8 border-t border-slate-100">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">12. Contato</h2>
              <div class="space-y-1">
                <p>Email: <span class="font-semibold">contato@devtdigital.com</span></p>
                <p>Localização: Brasil</p>
              </div>
            </section>
          </div>
        </div>
        
        <div class="mt-12 text-center text-slate-500 text-sm">
          <p class="mb-2">Última atualização: {{ currentYear }}</p>
          <p>&copy; {{ currentYear }} Devt Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </main>
  </div>
</template>
