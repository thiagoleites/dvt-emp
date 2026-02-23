<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 pb-10">
    <!-- Navbar Top -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm relative">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="bg-blue-600 p-2 rounded-lg">
            <LayoutDashboard class="w-5 h-5 text-white" />
          </div>
          <h1 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">Devt Admin</h1>
        </div>
        
        <div class="flex flex-1 justify-end items-center gap-4">
          <NuxtLink to="/" class="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50">
            <ArrowLeft class="w-4 h-4" /> Voltar ao site
          </NuxtLink>
          <div class="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>
          <button @click="logout" class="text-sm font-medium text-red-600 hover:text-red-700 transition-colors flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50">
            <LogOut class="w-4 h-4" /> Sair
          </button>
        </div>
      </div>
    </header>

    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row gap-8">
      <!-- Sidebar -->
      <aside class="w-full md:w-64 shrink-0">
        <nav class="space-y-1.5 flex flex-row md:flex-col overflow-x-auto md:overflow-hidden pb-4 md:pb-0 hide-scrollbar">
          <NuxtLink to="/admin" class="flex items-center gap-3 px-4 py-3 text-slate-600 rounded-xl hover:bg-slate-100/80 transition-all font-medium whitespace-nowrap" active-class="bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100/50">
            <LayoutDashboard class="w-5 h-5" /> Início
          </NuxtLink>
          <NuxtLink to="/admin/projects" class="flex items-center gap-3 px-4 py-3 text-slate-600 rounded-xl hover:bg-slate-100/80 transition-all font-medium whitespace-nowrap" active-class="bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100/50">
            <FolderOpen class="w-5 h-5" /> Projetos
          </NuxtLink>
          <NuxtLink to="/admin/settings" class="flex items-center gap-3 px-4 py-3 text-slate-600 rounded-xl hover:bg-slate-100/80 transition-all font-medium whitespace-nowrap" active-class="bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100/50">
            <Settings class="w-5 h-5" /> Configurações
          </NuxtLink>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 min-w-0">
        <div class="mb-6">
          <h2 class="text-2xl font-bold tracking-tight text-slate-900">{{ route.meta.title || 'Painel de Controle' }}</h2>
        </div>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LayoutDashboard, FolderOpen, Settings, ArrowLeft, LogOut } from 'lucide-vue-next'
const route = useRoute()

async function logout() {
  try {
    await $fetch('/api/auth/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  } catch(err) {
    console.error('Logout error', err)
  }
}
</script>
<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
