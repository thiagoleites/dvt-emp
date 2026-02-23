<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-blue-100">
    <!-- Abstract Background Elements -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-blue-400/20 blur-[120px] rounded-full point-events-none"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full point-events-none"></div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
      <div class="flex justify-center mb-6">
        <div class="p-3 bg-white shadow-sm ring-1 ring-slate-900/5 rounded-2xl">
          <LayoutDashboard class="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <h2 class="text-center text-3xl font-extrabold tracking-tight text-slate-900">
        Painel de Controle
      </h2>
      <p class="mt-2 text-center text-sm text-slate-500">
        Gestão administrativa do Devt
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
      <div class="bg-white/80 backdrop-blur-xl py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail class="h-5 w-5 text-slate-400" />
              </div>
              <input id="email" v-model="form.email" name="email" type="email" autocomplete="email" required class="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-shadow bg-white/50" placeholder="admin@admin.com" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-slate-700 mb-1">Senha</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock class="h-5 w-5 text-slate-400" />
              </div>
              <input id="password" v-model="form.password" name="password" type="password" autocomplete="current-password" required class="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 sm:text-sm transition-shadow bg-white/50" placeholder="••••••••" />
            </div>
          </div>

          <div v-if="errorMsg" class="flex items-center gap-2 text-sm border border-red-200 bg-red-50 text-red-600 p-3 rounded-xl animate-in fade-in slide-in-from-top-2">
            <AlertCircle class="w-4 h-4 shrink-0" />
            <p>{{ errorMsg }}</p>
          </div>

          <div>
            <button type="submit" :disabled="loading" class="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-all active:scale-[0.98]">
              <Loader2 v-if="loading" class="w-4 h-4 animate-spin" />
              {{ loading ? 'Autenticando...' : 'Entrar no painel' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LayoutDashboard, Mail, Lock, AlertCircle, Loader2 } from 'lucide-vue-next'

definePageMeta({
  layout: false // Do not use admin layout for login
})

const form = reactive({
  email: '',
  password: ''
})
const loading = ref(false)
const errorMsg = ref('')

async function handleLogin() {
  loading.value = true
  errorMsg.value = ''
  try {
    const res = await $fetch('/api/auth/login', {
      method: 'POST',
      body: form
    })
    
    if (res.success) {
      window.location.href = '/admin' // Refresh state and redirect
    }
  } catch (err: any) {
    errorMsg.value = err.data?.statusMessage || 'Erro ao realizar login.'
  } finally {
    loading.value = false
  }
}
</script>
