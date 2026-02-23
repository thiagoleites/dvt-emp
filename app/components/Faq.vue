<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const faqs = [
  {
    question: "Para quem é a plataforma?",
    answer: "A plataforma é voltada para empresas e marcas que desejam organizar, padronizar e automatizar a divulgação de seus produtos no Instagram Stories de forma profissional."
  },
  {
    question: "Como funciona a publicação a cada 24 horas?",
    answer: "O sistema permite criar uma fila de produtos. A cada 24 horas, a plataforma gera automaticamente o layout e publica o próximo item da fila no seu Instagram Stories, mantendo a consistência da sua marca."
  },
  {
    question: "Precisa dar acesso à conta?",
    answer: "Sim, é necessário autorizar o acesso através da sua conta comercial do Instagram/Facebook utilizando a API oficial, garantindo total segurança e conformidade."
  },
  {
    question: "Quais dados são usados?",
    answer: "Utilizamos apenas os dados fornecidos no cadastro dos produtos (imagens, nomes, preços e descrições) e as permissões básicas necessárias para realizar a publicação na sua conta comercial."
  },
  {
    question: "Quando será aberto ao público?",
    answer: "Atualmente a plataforma encontra-se em fase de validação interna. Em breve anunciaremos a disponibilidade para novos clientes e parceiros."
  }
]

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Perguntas Frequentes</h2>
        <p class="mt-4 text-lg text-slate-600">Tire suas dúvidas sobre a plataforma e nossos serviços.</p>
      </div>
      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
        >
          <button
            class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
            @click="toggleFaq(index)"
            :aria-expanded="openIndex === index"
          >
            <span class="font-semibold text-slate-900 pr-8">{{ faq.question }}</span>
            <ChevronDown 
              class="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
            />
          </button>
          <div 
            class="px-6 overflow-hidden transition-all duration-300 ease-in-out"
            :class="openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'"
          >
            <p class="text-slate-600 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
