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
            <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Termos de Uso</h1>
            <p class="text-xl text-slate-500 font-medium">Devt Digital – Plataforma SaaS</p>
          </div>

          <div class="space-y-10 text-slate-700 leading-relaxed">
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">1. Sobre a Devt Digital</h2>
              <p>A Devt Digital é uma empresa de tecnologia responsável pelo desenvolvimento e operação de soluções SaaS para automação digital.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">2. Aceitação</h2>
              <p>Ao utilizar a plataforma, o usuário declara que leu e concorda com estes Termos.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">3. Descrição do Serviço</h2>
              <p>A plataforma permite automação de publicações e integrações com APIs oficiais de redes sociais. Atualmente encontra-se em fase de validação interna, podendo ser disponibilizada comercialmente futuramente.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">4. Uso das APIs Oficiais</h2>
              <p>A plataforma utiliza exclusivamente APIs oficiais fornecidas pelas plataformas integradas. O usuário é responsável por garantir que possui autorização legítima para conectar sua conta comercial.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">5. Responsabilidades do Usuário</h2>
              <p>O usuário compromete-se a:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Cumprir as políticas das plataformas integradas</li>
                <li>Não utilizar a ferramenta para atividades ilegais</li>
                <li>Fornecer informações verídicas</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">6. Conformidade com Políticas da Meta</h2>
              <p>O uso da plataforma deve respeitar integralmente:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Meta Platform Policy</li>
                <li>Termos do Instagram</li>
                <li>Diretrizes da comunidade aplicáveis</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">7. Limitação de Responsabilidade</h2>
              <p>A Devt Digital não se responsabiliza por:</p>
              <ul class="list-disc pl-6 mt-4 space-y-2">
                <li>Suspensões de conta decorrentes de violação de políticas externas</li>
                <li>Alterações nas APIs de terceiros</li>
                <li>Interrupções temporárias de serviço</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">8. Propriedade Intelectual</h2>
              <p>Todo o código e design da plataforma são propriedade da Devt Digital.</p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-slate-900 mb-4">9. Encerramento de Conta</h2>
              <p>Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos.</p>
            </section>

            <section class="pt-8 border-t border-slate-100">
              <h2 class="text-2xl font-bold text-slate-900 mb-4">10. Contato</h2>
              <div class="space-y-1">
                <p class="font-semibold">contato@devtdigital.com</p>
                <p>Brasil</p>
              </div>
            </section>
          </div>
        </div>
        
        <div class="mt-12 text-center text-slate-500 text-sm">
          <p>&copy; {{ currentYear }} Devt Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </main>
  </div>
</template>
