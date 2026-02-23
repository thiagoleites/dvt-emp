<script setup lang="ts">
import { ref } from 'vue'
import { Layers } from 'lucide-vue-next'

const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <footer class="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
            <Layers class="w-5 h-5 text-slate-300" />
          </div>
          <span class="font-extrabold text-xl tracking-tight text-white">DEVT DIGITAL</span>
        </div>
        
        <div class="flex gap-8 text-sm font-medium">
          <NuxtLink to="/termos" class="hover:text-white transition-colors">Termos de Uso</NuxtLink>
          <NuxtLink to="/privacidade" class="hover:text-white transition-colors">Política de Privacidade</NuxtLink>
        </div>
      </div>
      
      <div class="mt-12 pt-8 border-t border-slate-900 text-center md:text-left text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {{ currentYear }} Devt Digital. Todos os direitos reservados.</p>
        <p class="text-slate-500">Tecnologia para automação e crescimento digital.</p>
      </div>
    </div>
  </footer>
</template>
