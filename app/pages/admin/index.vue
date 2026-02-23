<template>
  <div class="space-y-6">
    <!-- Metricas Gerais -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Visitas Card -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-between group hover:border-blue-200 transition-colors">
        <div>
          <p class="text-sm text-slate-500 font-medium mb-1">Total de Acessos</p>
          <div class="flex items-baseline gap-2">
            <h3 class="text-3xl font-bold text-slate-900">{{ metrics?.totalVisits || 0 }}</h3>
          </div>
        </div>
        <div class="p-4 bg-emerald-50 text-emerald-600 rounded-xl group-hover:scale-105 transition-transform">
          <Activity class="w-7 h-7" />
        </div>
      </div>

      <!-- Visitantes Únicos Card -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-between group hover:border-purple-200 transition-colors">
        <div>
          <p class="text-sm text-slate-500 font-medium mb-1">Visitantes Únicos</p>
          <div class="flex items-baseline gap-2">
            <h3 class="text-3xl font-bold text-slate-900">{{ metrics?.uniqueVisits || 0 }}</h3>
          </div>
        </div>
        <div class="p-4 bg-purple-50 text-purple-600 rounded-xl group-hover:scale-105 transition-transform">
          <Users class="w-7 h-7" />
        </div>
      </div>

      <!-- Total Projetos Card -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-center justify-between group hover:border-blue-200 transition-colors">
        <div>
          <p class="text-sm text-slate-500 font-medium mb-1">Total de Projetos</p>
          <div class="flex items-baseline gap-2">
            <h3 class="text-3xl font-bold text-slate-900">{{ metrics?.totalProjects || 0 }}</h3>
          </div>
        </div>
        <div class="p-4 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-105 transition-transform">
          <FolderOpen class="w-7 h-7" />
        </div>
      </div>
    </div>

    <!-- Paginas Mais Acessadas -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div class="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <h3 class="text-base font-semibold text-slate-900 flex items-center gap-2">
          <TrendingUp class="w-5 h-5 text-slate-400" />
          Páginas Mais Acessadas
        </h3>
      </div>
      <div class="divide-y divide-slate-100">
        <div v-if="metrics?.topPages && metrics.topPages.length > 0" class="divide-y divide-slate-100">
          <div v-for="page in metrics.topPages" :key="page.path" class="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div class="flex items-center gap-3">
              <div class="w-2 h-2 rounded-full bg-slate-300"></div>
              <p class="text-sm font-medium text-slate-700 font-mono">{{ page.path }}</p>
            </div>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
              {{ page.count }} views
            </span>
          </div>
        </div>
        <div v-else class="px-6 py-12 text-center text-slate-500 text-sm">
          Nenhum acesso registrado ainda.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FolderOpen, Activity, Users, TrendingUp } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin',
  title: 'Visão Geral'
})

const { data: metrics } = await useFetch('/api/metrics/visits')
</script>
