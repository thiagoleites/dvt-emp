<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const challengeData = ref<{ challenge: string, difficulty: number } | null>(null)
const isLoading = ref(false)
const isMining = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

onMounted(async () => {
  try {
    const res = await $fetch('/api/challenge')
    if (res.success && res.data) {
      challengeData.value = res.data
    }
  } catch (e) {
    console.error('Falha ao obter desafio de segurança PoW', e)
  }
})

async function mineProofOfWork(challenge: string, difficulty: number): Promise<number> {
  let nonce = 0
  const encoder = new TextEncoder()
  const targetPrefix = '0'.repeat(difficulty)

  while (true) {
    const input = `${challenge}:${nonce}`
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', encoder.encode(input))
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    
    // Otimização para difficulty 4 (espera bytes 00 00)
    if (difficulty === 4) {
      if (hashArray[0] === 0 && hashArray[1] === 0) return nonce
    } else {
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
      if (hashHex.startsWith(targetPrefix)) return nonce
    }

    nonce++
    
    // Evita travar a thread principal da UI durante a mineração pesada
    if (nonce % 500 === 0) {
      await new Promise(resolve => setTimeout(resolve, 0))
    }
  }
}

async function submitForm() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    status.value = 'error'
    errorMessage.value = 'Por favor, preencha todos os campos.'
    return
  }

  isLoading.value = true
  status.value = 'idle'
  
  if (!challengeData.value) {
    status.value = 'error'
    errorMessage.value = 'Desafio de segurança ausente. Por favor, recarregue a página.'
    isLoading.value = false
    return
  }

  isMining.value = true
  let nonce: number
  try {
    nonce = await mineProofOfWork(challengeData.value.challenge, challengeData.value.difficulty)
  } catch (e) {
    status.value = 'error'
    errorMessage.value = 'Falha ao processar segurança anti-spam.'
    isLoading.value = false
    isMining.value = false
    return
  }
  isMining.value = false
  
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...form.value,
        pow_challenge: challengeData.value.challenge,
        pow_nonce: nonce
      }
    })
    
    status.value = 'success'
    form.value = { name: '', email: '', message: '' }
    
    // Buscar um novo desafio após envio bem sucedido
    const res = await $fetch('/api/challenge')
    if (res.success && res.data) challengeData.value = res.data
    
    setTimeout(() => {
      if (status.value === 'success') status.value = 'idle'
    }, 5000)
    
  } catch (error: any) {
    status.value = 'error'
    errorMessage.value = error.data?.statusMessage || 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.'
    
    // Renovar desafio caso o erro tenha sido falha no PoW ou expirado
    if (error.response?.status === 403) {
      const res = await $fetch('/api/challenge')
      if (res.success && res.data) challengeData.value = res.data
    }
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
              <template v-if="!isLoading">
                <span>Enviar mensagem</span>
                <ArrowRight class="w-5 h-5" />
              </template>
              <template v-else-if="isMining">
                <ShieldCheck class="w-5 h-5 animate-pulse text-indigo-400" />
                <span>Validando segurança...</span>
              </template>
              <template v-else>
                <Loader2 class="w-5 h-5 animate-spin" />
                <span>Enviando...</span>
              </template>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
