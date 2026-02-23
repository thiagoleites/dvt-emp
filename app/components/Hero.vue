<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const { data: settings } = await useFetch<Record<string, string>>('/api/settings')
</script>

<template>
  <section class="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div class="max-w-4xl relative z-10">
        <h1 
          class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 500 }"
        >
          <template v-if="settings?.home_title">{{ settings.home_title }}</template>
          <template v-else>Tecnologia para automação e <span class="text-slate-500">crescimento digital.</span></template>
        </h1>
        <p 
          class="mt-8 text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl font-medium"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 500, delay: 100 }"
        >
          A Devt Digital desenvolve plataformas SaaS e soluções web para otimizar processos empresariais e automatizar operações digitais.
        </p>
        <div 
          class="mt-12 flex flex-col sm:flex-row gap-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 500, delay: 200 }"
        >
          <a 
            href="#plataforma"
            class="inline-flex justify-center items-center gap-2 px-8 py-4 bg-slate-900 text-white text-lg font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-sm hover:shadow-md"
          >
            Conhecer a plataforma
            <ArrowRight class="w-5 h-5" />
          </a>
          <a 
            href="#contato"
            class="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-slate-900 text-lg font-semibold rounded-xl border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            Falar conosco
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
