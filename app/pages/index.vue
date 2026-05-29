<script setup lang="ts">
useHead({
  title: 'Devt Digital - Soluções SaaS para Instagram, MotoERP e Restaurantes',
  meta: [
    { name: 'description', content: 'Devt Digital oferece soluções SaaS para automação de Instagram Stories, gestão de motopeças/autopeças e operações de restaurantes e pizzarias com painel de cozinha em tempo real.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-white font-sans selection:bg-slate-200">
    <Header />
    <main>
      <Hero />
      <LazySobre />
      <LazyPlataforma />
      <LazySeguranca />
      <LazyFaq />
      <LazyContato />
    </main>
    <Footer />
  </div>
</template>
