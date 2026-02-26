<script setup lang="ts">
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
            Nossos Termos<br class="hidden sm:block" /> de Uso
          </h1>
          <p class="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Regras, diretrizes e condições para a utilização das soluções SaaS da Devt Digital.
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
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">1. Sobre a Devt Digital</h2>
            <p>
              A Devt Digital é uma empresa de tecnologia responsável pelo desenvolvimento e operação de plataformas SaaS
              (Software como Serviço) voltadas à automação digital e integração com APIs oficiais de terceiros.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">2. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar a plataforma, o usuário declara que leu, compreendeu e concorda integralmente com estes
              Termos de Uso e com a Política de Privacidade da Devt Digital.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">3. Descrição do Serviço</h2>
            <p class="mb-4">A plataforma permite:</p>
            <ul class="space-y-3 mt-6">
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Automação de publicações de conteúdo</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Integração com APIs oficiais de redes sociais</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Gestão técnica de publicações programadas</span>
              </li>
            </ul>

            <p class="mt-8">
              O sistema é desenvolvido com arquitetura <strong class="font-semibold text-slate-900">multi-tenant</strong> e pode atender múltiplas
              empresas de forma independente. A solução pode estar em fase inicial de operação ou validação.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">4. Uso de APIs Oficiais</h2>
            <p class="mb-6">
              A plataforma utiliza exclusivamente APIs oficiais fornecidas pelas plataformas integradas, incluindo
              <strong class="font-semibold text-slate-900">Instagram Graph API</strong> e <strong class="font-semibold text-slate-900">Facebook Login (OAuth)</strong>.
            </p>

            <p class="mb-4">O acesso ocorre apenas mediante:</p>
            <ul class="space-y-3 mt-4">
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Autorização explícita do titular da conta</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Concessão de permissões via fluxo oficial de autenticação</span>
              </li>
            </ul>

            <div class="mt-8 p-6 rounded-2xl bg-indigo-50/80 border border-indigo-100">
              <p class="text-indigo-900 m-0 text-base">
                A Devt Digital <strong class="font-bold">não armazena senhas</strong> de contas integradas, utilizando apenas tokens
                de acesso concedidos pela própria plataforma. O usuário declara que possui autorização legítima para conectar a
                conta comercial utilizada.
              </p>
            </div>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">5. Responsabilidades do Usuário</h2>
            <p class="mb-4">O usuário compromete-se a:</p>
            <ul class="space-y-3 mt-6">
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Cumprir as políticas das plataformas integradas</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Não utilizar a ferramenta para atividades ilegais</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Não publicar conteúdo que viole direitos de terceiros</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Fornecer informações verídicas</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Manter a conformidade com as diretrizes da Meta e Instagram</span>
              </li>
            </ul>

            <p class="mt-8">
              O usuário é integralmente responsável pelo conteúdo publicado por meio da plataforma.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">6. Conformidade com Políticas da Meta</h2>
            <p class="mb-4">O uso da plataforma deve respeitar integralmente:</p>
            <ul class="space-y-3 mt-6">
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Meta Platform Policy</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Termos de Uso do Instagram</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Diretrizes da Comunidade aplicáveis</span>
              </li>
            </ul>

            <p class="mt-8">
              Qualquer violação dessas políticas poderá resultar na suspensão da conta do usuário, sem responsabilidade da Devt Digital.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">7. Limitação de Responsabilidade</h2>
            <p class="mb-4">A Devt Digital não se responsabiliza por:</p>
            <ul class="space-y-3 mt-6">
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Suspensões ou restrições de conta decorrentes de violação de políticas externas</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Alterações, limitações ou descontinuação de APIs de terceiros</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Indisponibilidade temporária de serviços externos</span>
              </li>
              <li class="flex items-start">
                <span class="shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 mr-4"></span>
                <span>Perdas indiretas, lucros cessantes ou danos consequenciais</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">8. Dados e Privacidade</h2>
            <p>
              O tratamento de dados pessoais é realizado conforme descrito na <strong class="font-semibold text-slate-900">Política de Privacidade</strong>.
              A Devt Digital não vende dados pessoais e não acessa informações além das permissões concedidas.
            </p>
            <p class="mt-4">
              O usuário pode revogar o acesso via configurações da conta Meta e solicitar exclusão de dados conforme descrito na Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">9. Propriedade Intelectual</h2>
            <p>
              Todo o código-fonte, design, identidade visual e estrutura da plataforma são de propriedade exclusiva da Devt Digital,
              sendo vedada sua reprodução, redistribuição ou engenharia reversa sem autorização expressa.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">10. Suspensão e Encerramento</h2>
            <p>
              A Devt Digital poderá suspender ou encerrar contas que violem estes Termos, utilizem a plataforma de forma indevida
              ou descumpram políticas das plataformas integradas.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">11. Modificações</h2>
            <p>
              Estes Termos poderão ser atualizados periodicamente. O uso contínuo da plataforma implica concordância com a versão vigente.
            </p>
          </section>

          <section>
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 tracking-tight">12. Legislação Aplicável</h2>
            <p>Este instrumento é regido pelas leis da República Federativa do Brasil.</p>
          </section>

          <section class="mt-16 pt-12 border-t border-slate-200">
            <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 tracking-tight">13. Contato</h2>
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