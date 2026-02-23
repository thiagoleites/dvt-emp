<script setup lang="ts">
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-vue-next'
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

        <div class="bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-xl">
          <h3 class="text-2xl font-bold mb-8">Envie uma mensagem</h3>
          <form class="space-y-5" @submit.prevent>
            <div>
              <label for="name" class="block text-sm font-semibold text-slate-700 mb-2">Nome completo</label>
              <input 
                type="text" 
                id="name"
                class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                placeholder="Seu nome"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-semibold text-slate-700 mb-2">Email corporativo</label>
              <input 
                type="email" 
                id="email"
                class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-semibold text-slate-700 mb-2">Mensagem</label>
              <textarea 
                id="message"
                rows="4"
                class="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all resize-none bg-slate-50 focus:bg-white"
                placeholder="Como podemos ajudar?"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              class="w-full py-4 mt-2 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors flex justify-center items-center gap-2"
            >
              Enviar mensagem
              <ArrowRight class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
