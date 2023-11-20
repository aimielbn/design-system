<script setup>
const isOpen = ref(false);
</script>

<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-pink-500 h-20 px-4 border-b border-pink-50"
  >
    <div>
      <nuxt-link to="/">
        <slot name="logo"> </slot>
      </nuxt-link>
    </div>
    <ul class="hidden md:flex flex items-center justify-between space-x-8">
      <slot name="links"></slot>
    </ul>
  </nav>
</template>
