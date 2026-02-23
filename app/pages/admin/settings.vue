<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div class="p-6 border-b border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900">Configurações Gerais</h3>
      <p class="text-sm text-gray-500 mt-1">Gerencie as propriedades globais do site.</p>
    </div>
    
    <form @submit.prevent="saveSettings" class="p-6 space-y-6">
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Título Principal (Hero)</label>
          <input 
            v-model="form.home_title" 
            type="text" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Ex: Transformando ideias em SaaS"
          />
          <p class="mt-1 text-xs text-gray-500">Este título será exibido com destaque na home.</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Descrição Principal (Hero)</label>
          <textarea 
            v-model="form.home_description" 
            rows="3"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Ex: Desenvolvemos plataformas modernas com alta escalabilidade..."
          ></textarea>
          <p class="mt-1 text-xs text-gray-500">Subtexto exibido abaixo do título principal.</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Texto do Rodapé (Footer)</label>
          <input 
            v-model="form.footer_text" 
            type="text" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Ex: © 2026 Devt. Todos os direitos reservados."
          />
          <p class="mt-1 text-xs text-gray-500">Texto de copyright ou aviso legal no final da página.</p>
        </div>
      </div>

      <div class="flex items-center justify-end pt-6 border-t border-gray-100">
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
  home_title: '',
  home_description: '',
  footer_text: ''
})

const loading = ref(false)
const saved = ref(false)

// Carregar configurações atuais
const { data: settings } = await useFetch('/api/settings')
if (settings.value) {
  if (settings.value.home_title) form.home_title = settings.value.home_title
  if (settings.value.home_description) form.home_description = settings.value.home_description
  if (settings.value.footer_text) form.footer_text = settings.value.footer_text
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
