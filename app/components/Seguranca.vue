<script setup lang="ts">
import { Lock, ShieldCheck } from 'lucide-vue-next'

const items = [
  "Utilização apenas de APIs oficiais",
  "Acesso autorizado via conta comercial",
  "Não há coleta de dados de terceiros",
  "Nenhum compartilhamento de informações sem consentimento"
]
</script>

<template>
  <section id="seguranca" class="py-24 bg-slate-50 border-y border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1">
          <div class="grid sm:grid-cols-2 gap-6">
            <div v-for="(item, index) in items" :key="index" class="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <Lock class="w-8 h-8 text-slate-900 mb-5" />
              <p class="text-slate-800 font-semibold text-lg leading-snug">{{ item }}</p>
            </div>
          </div>
        </div>
        <div class="order-1 lg:order-2">
          <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Segurança e conformidade</h2>
          <p class="mt-6 text-lg text-slate-600 leading-relaxed">
            Priorizamos boas práticas de segurança e conformidade com as diretrizes das plataformas integradas.
          </p>
          <div class="mt-10 flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 inline-flex">
            <div class="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
              <ShieldCheck class="w-6 h-6 text-slate-900" />
            </div>
            <span class="text-slate-900 font-bold text-lg pr-4">Proteção de dados garantida</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
