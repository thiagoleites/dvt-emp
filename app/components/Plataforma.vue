<script setup lang="ts">
import { Image as ImageIcon, Layers, Settings, Zap, Clock, ShieldCheck } from 'lucide-vue-next'

const features = [
  {
    icon: ImageIcon,
    title: "Cadastro de produtos",
    description: "Gerencie imagem, nome, preço e descrição de forma centralizada."
  },
  {
    icon: Layers,
    title: "Organização por categorias",
    description: "Estruture seus produtos para facilitar a criação de campanhas."
  },
  {
    icon: Settings,
    title: "Criação de filas de publicação",
    description: "Organize a ordem e o momento exato de cada postagem."
  },
  {
    icon: Zap,
    title: "Geração automática de layout",
    description: "Criação de artes padronizadas para stories sem esforço manual."
  },
  {
    icon: Clock,
    title: "Publicação programada a cada 24 horas",
    description: "Mantenha sua audiência engajada com consistência automática."
  }
]
</script>

<template>
  <section id="plataforma" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Plataforma de automação para Instagram Stories</h2>
        <p class="mt-6 text-lg text-slate-600 leading-relaxed">
          A Devt Digital está desenvolvendo uma plataforma SaaS para automação de publicações no Instagram Stories, voltada para empresas que desejam organizar e otimizar a divulgação de seus produtos.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(feature, index) in features" :key="index" class="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
          <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 border border-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <component :is="feature.icon" class="w-6 h-6 text-slate-900" />
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-3">{{ feature.title }}</h3>
          <p class="text-slate-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

      <div class="mt-16 p-8 sm:p-10 bg-slate-900 rounded-3xl text-center relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 opacity-50"></div>
        <div class="relative z-10">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full mb-6 border border-slate-700 shadow-inner">
            <ShieldCheck class="w-8 h-8 text-slate-300" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">Uso atual</h3>
          <p class="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Em fase de validação interna com a marca <strong class="text-white font-semibold">Toda Diva – Moda Feminina</strong> (do mesmo grupo empresarial), utilizando apenas dados e conta comercial autorizada.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
