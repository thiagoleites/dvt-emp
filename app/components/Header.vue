<script setup lang="ts">
import { ref, computed } from 'vue'
import { Menu, X, Layers, ArrowLeft } from 'lucide-vue-next'

const isOpen = ref(false)
const route = useRoute()

const isHome = computed(() => route.path === '/')

const navLinks = [
  { name: 'Sobre', href: '/#sobre' },
  { name: 'Plataforma', href: '/#plataforma' },
  { name: 'Segurança', href: '/#seguranca' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contato', href: '/#contato' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <!-- <div class="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-slate-800 transition-colors">
            <Layers class="w-6 h-6 text-white" />
          </div> -->
          <!-- <span class="font-extrabold text-xl tracking-tight text-slate-900">DEVT DIGITAL</span> -->
          <span class="bg-slate-900 text-white rounded-md px-4 py-2 text-2xl -tracking-tighter flex items-baseline">
            devt<span class="text-4xl animate-blink font-bold">.</span>
          </span>
        </NuxtLink>
        
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8">
          <template v-if="isHome">
            <a 
              v-for="link in navLinks" 
              :key="link.name"
              :href="link.href"
              class="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              {{ link.name }}
            </a>
          </template>
          <template v-else>
            <NuxtLink to="/" class="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2">
              <ArrowLeft class="w-4 h-4" />
              Voltar ao Início
            </NuxtLink>
          </template>
          <a 
            :href="isHome ? '#contato' : '/#contato'"
            class="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
          >
            Falar conosco
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <X v-if="isOpen" class="w-7 h-7" />
          <Menu v-else class="w-7 h-7" />
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <Transition name="menu">
      <div v-show="isOpen" class="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full">
        <div class="px-4 pt-2 pb-6 space-y-2">
          <template v-if="isHome">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              class="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
              @click="closeMenu"
            >
              {{ link.name }}
            </a>
          </template>
          <template v-else>
            <NuxtLink
              to="/"
              class="block px-4 py-3 text-base font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
              @click="closeMenu"
            >
              Voltar ao Início
            </NuxtLink>
          </template>
          <a
            :href="isHome ? '#contato' : '/#contato'"
            class="block px-4 py-3 text-base font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors mt-4"
            @click="closeMenu"
          >
            Falar conosco
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s step-end infinite;
}
</style>
