<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div class="p-6 border-b border-gray-200 flex justify-between items-center">
      <div>
        <h3 class="text-lg font-semibold text-gray-900">Projetos</h3>
        <p class="text-sm text-gray-500 mt-1">Gerencie os projetos exibidos no site.</p>
      </div>
      <NuxtLink to="/admin/projects/create" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm flex items-center">
        <Plus class="w-4 h-4 mr-2" />
        Novo Projeto
      </NuxtLink>
    </div>
    
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-gray-50 text-gray-700 text-sm">
            <th class="p-4 border-b border-gray-200 font-medium">Nome do Projeto</th>
            <th class="p-4 border-b border-gray-200 font-medium w-48 text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id" class="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <td class="p-4">
              <div class="flex items-center">
                <div v-if="project.imageUrl" class="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-gray-100 mr-4 border border-gray-200">
                  <img :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover">
                </div>
                <div v-else class="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-4 border border-gray-200 text-gray-400">
                  <ImageIcon class="w-5 h-5" />
                </div>
                <div>
                  <p class="font-medium text-gray-900">{{ project.title }}</p>
                  <p class="text-sm text-gray-500 truncate max-w-md">{{ project.description }}</p>
                </div>
              </div>
            </td>
            <td class="p-4 text-right">
              <button @click="deleteProject(project.id)" class="px-3 py-1.5 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded border border-red-200 transition-colors font-medium">Excluir</button>
            </td>
          </tr>
          <tr v-if="!projects || projects.length === 0">
            <td colspan="2" class="p-8 text-center text-gray-500">
              Nenhum projeto encontrado.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Image as ImageIcon } from 'lucide-vue-next'
definePageMeta({
  layout: 'admin',
  title: 'Projetos'
})

const { data: projects, refresh } = await useFetch('/api/projects')

async function deleteProject(id: number) {
  if (!confirm('Tem certeza que deseja excluir este projeto?')) return
  
  try {
    await $fetch(`/api/projects/${id}`, { method: 'DELETE' })
    await refresh()
  } catch (err) {
    console.error(err)
    alert('Erro ao excluir projeto.')
  }
}
</script>
