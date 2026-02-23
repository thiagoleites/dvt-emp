<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 pb-10">
    <!-- Navbar Top -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <div class="flex items-center gap-8">
          <NuxtLink to="/admin" class="flex items-center gap-3">
            <span class="bg-slate-900 text-white rounded-md px-3 py-1.5 text-xl -tracking-tighter flex items-baseline">
              devt<span class="text-3xl animate-blink font-bold text-blue-400">.</span>
            </span>
          </NuxtLink>
          
          <nav class="hidden md:flex items-center gap-2">
            <NuxtLink to="/admin" class="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-100/80 transition-all font-medium whitespace-nowrap" active-class="bg-slate-100 text-slate-900 shadow-sm ring-1 ring-slate-200">
              <LayoutDashboard class="w-4 h-4" /> Visão Geral
            </NuxtLink>
            <NuxtLink to="/admin/projects" class="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-100/80 transition-all font-medium whitespace-nowrap" active-class="bg-slate-100 text-slate-900 shadow-sm ring-1 ring-slate-200">
              <FolderOpen class="w-4 h-4" /> Projetos
            </NuxtLink>
            <NuxtLink to="/admin/settings" class="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-100/80 transition-all font-medium whitespace-nowrap" active-class="bg-slate-100 text-slate-900 shadow-sm ring-1 ring-slate-200">
              <Settings class="w-4 h-4" /> Configurações
            </NuxtLink>
          </nav>
        </div>
        
        <div class="flex items-center gap-4">
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

    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <!-- Main Content -->
      <main class="w-full">
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
