<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div class="p-6 border-b border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900">Configurações Gerais</h3>
      <p class="text-sm text-gray-500 mt-1">Gerencie as propriedades globais do site.</p>
    </div>
    
    <form @submit.prevent="saveSettings" class="p-6 space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Título da Página Inicial</label>
        <input 
          v-model="form.home_title" 
          type="text" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="Ex: Meu Portfólio"
        />
        <p class="mt-2 text-sm text-gray-500">Este título será exibido como a chamada principal na home.</p>
      </div>

      <div class="flex items-center justify-end pt-4 border-t border-gray-100">
        <p v-if="saved" class="text-green-600 text-sm font-medium mr-4 flex items-center">
          <CheckCircle class="w-4 h-4 mr-1" /> Salvo com sucesso!
        </p>
        <button 
          type="submit" 
          class="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm disabled:opacity-50 flex items-center"
          :disabled="loading"
        >
          <Save class="w-4 h-4 mr-2" v-if="!loading" />
          <Loader2 class="w-4 h-4 mr-2 animate-spin" v-else />
          {{ loading ? 'Salvando...' : 'Salvar Configurações' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Save, CheckCircle, Loader2 } from 'lucide-vue-next'
definePageMeta({
  layout: 'admin',
  title: 'Configurações'
})

const form = reactive({
  home_title: ''
})

const loading = ref(false)
const saved = ref(false)

// Carregar configurações atuais
const { data: settings } = await useFetch('/api/settings')
if (settings.value && settings.value.home_title) {
  form.home_title = settings.value.home_title
}

async function saveSettings() {
  loading.value = true
  saved.value = false
  try {
    await $fetch('/api/settings', {
      method: 'PUT',
      body: form
    })
    saved.value = true
    setTimeout(() => { saved.value = false }, 3000)
  } catch (err) {
    console.error(err)
    alert('Erro ao salvar as configurações.')
  } finally {
    loading.value = false
  }
}
</script>
