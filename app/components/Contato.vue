<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isLoading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

async function submitForm() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    status.value = 'error'
    errorMessage.value = 'Por favor, preencha todos os campos.'
    return
  }

  isLoading.value = true
  status.value = 'idle'
  
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    
    status.value = 'success'
    form.value = { name: '', email: '', message: '' }
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      if (status.value === 'success') status.value = 'idle'
    }, 5000)
    
  } catch (error: any) {
    status.value = 'error'
    errorMessage.value = error.data?.statusMessage || 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <section id="contato" class="py-24 bg-slate-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl lg:text-4xl font-bold tracking-tight">Fale com a Devt Digital</h2>
          <p class="mt-6 text-lg text-slate-400 leading-relaxed">
            Tem interesse em nossas soluções ou deseja saber mais sobre a plataforma? Entre em contato conosco.
          </p>
          
          <div class="mt-12 space-y-8">
            <div class="flex items-center gap-5">
              <div class="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                <Mail class="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <p class="text-sm text-slate-400 font-medium mb-1">Email</p>
                <p class="text-lg font-medium">contato@devt.com.br</p>
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div class="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                <Phone class="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <p class="text-sm text-slate-400 font-medium mb-1">WhatsApp</p>
                <p class="text-lg font-medium">+55 (82) 99670-6451</p>
              </div>
            </div>
            <div class="flex items-center gap-5">
              <div class="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                <MapPin class="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <p class="text-sm text-slate-400 font-medium mb-1">Localização</p>
                <p class="text-lg font-medium">Brasil</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-xl relative overflow-hidden">
          <h3 class="text-2xl font-bold mb-8">Envie uma mensagem</h3>
          
          <form class="space-y-5" @submit.prevent="submitForm">
            <div>
              <label for="name" class="block text-sm font-semibold text-slate-700 mb-2">Nome completo</label>
              <input 
                v-model="form.name"
                type="text" 
                id="name"
                class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                placeholder="Seu nome"
                required
                :disabled="isLoading"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold text-slate-700 mb-2">Email corporativo</label>
              <input 
                v-model="form.email"
                type="email" 
                id="email"
                class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-900"
                placeholder="seu@email.com"
                required
                :disabled="isLoading"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-semibold text-slate-700 mb-2">Mensagem</label>
              <textarea 
                v-model="form.message"
                id="message"
                rows="4"
                class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all resize-none bg-slate-50 focus:bg-white text-slate-900"
                placeholder="Como podemos ajudar?"
                required
                :disabled="isLoading"
              ></textarea>
            </div>
            
            <!-- Status Messages -->
            <div v-if="status === 'success'" class="flex items-center gap-3 p-4 text-sm text-emerald-800 rounded-xl bg-emerald-50">
              <CheckCircle class="w-5 h-5 text-emerald-500 shrink-0" />
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </div>
            
            <div v-if="status === 'error'" class="flex items-center gap-3 p-4 text-sm text-red-800 rounded-xl bg-red-50">
              <AlertCircle class="w-5 h-5 text-red-500 shrink-0" />
              {{ errorMessage }}
            </div>

            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full py-4 mt-2 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors flex justify-center items-center gap-2"
            >
              <span v-if="!isLoading">Enviar mensagem</span>
              <span v-else>Enviando...</span>
              <Loader2 v-if="isLoading" class="w-5 h-5 animate-spin" />
              <ArrowRight v-else class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
