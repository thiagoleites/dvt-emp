<template>
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div class="p-6 border-b border-gray-200 flex justify-between items-center">
      <h3 class="text-lg font-semibold text-gray-900">Novo Projeto</h3>
      <NuxtLink to="/admin/projects" class="text-sm text-gray-500 hover:text-gray-800">Cancelar</NuxtLink>
    </div>
    
    <form @submit.prevent="saveProject" class="p-6 space-y-5">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Título do Projeto *</label>
        <input 
          v-model="form.title" 
          required
          type="text" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="Ex: Novo App E-commerce"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
        <textarea 
          v-model="form.description" 
          rows="3"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="Breve descrição do projeto..."
        ></textarea>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">URL da Imagem</label>
        <input 
          v-model="form.imageUrl" 
          type="url" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          placeholder="https://..."
        />
      </div>

      <div class="pt-4 flex justify-end">
        <button 
          type="submit" 
          class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
          :disabled="loading"
        >
          {{ loading ? 'Salvando...' : 'Criar Projeto' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  title: 'Novo Projeto'
})

const router = useRouter()
const form = reactive({
  title: '',
  description: '',
  imageUrl: ''
})

const loading = ref(false)

async function saveProject() {
  loading.value = true
  try {
    await $fetch('/api/projects', {
      method: 'POST',
      body: form
    })
    router.push('/admin/projects')
  } catch (err) {
    console.error(err)
    alert('Erro ao criar projeto.')
  } finally {
    loading.value = false
  }
}
</script>
