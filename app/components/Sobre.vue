<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

const items = [
  "Plataformas SaaS",
  "Sistemas web personalizados",
  "Integrações com APIs oficiais",
  "Automação de processos digitais",
  "Soluções para e-commerce e marketing digital"
]
</script>

<template>
  <section id="sobre" class="py-24 bg-slate-50 border-y border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Sobre a Devt Digital</h2>
          <div class="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Devt Digital é uma empresa de tecnologia especializada no desenvolvimento de soluções digitais, sistemas web e plataformas SaaS para automação de processos empresariais.
            </p>
            <p>
              Nosso foco é criar ferramentas modernas, seguras e escaláveis que otimizem operações, aumentem eficiência e melhorem a presença digital de empresas.
            </p>
          </div>
        </div>
        <div class="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          <h3 class="text-xl font-bold text-slate-900 mb-8">Nossas Especialidades</h3>
          <ul class="space-y-5">
            <li v-for="(item, index) in items" :key="index" class="flex items-start gap-4">
              <CheckCircle2 class="w-6 h-6 text-slate-900 shrink-0 mt-0.5" />
              <span class="text-slate-700 font-medium text-lg">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
