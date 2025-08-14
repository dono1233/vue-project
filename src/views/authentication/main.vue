<script setup>

import T from '@/views/authentication/TopView.vue'
import R from '@/views/authentication/Rsidebar.vue'
import L from '@/views/authentication/Lsidebar.vue'


</script>

<template>
     <T/>
     <div class="pt-16 max-w-7xl mx-auto flex flex-col lg:flex-row">
        <aside class="hidden lg:block lg:w-64 bg-white border-r  space-y-8">
     <L/>
     </aside>
     <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
     <RouterView />
     </main>
      <aside class="hidden xl:flex xl:flex-col xl:w-72 border-l bg-white  space-y-8">
     <R/>
     </aside>
     </div>
    
</template>

<style scoped></style>
