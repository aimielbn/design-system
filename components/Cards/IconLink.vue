<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex items-baseline space-x-8 p-4 group hover:bg-pink-500/50 transition"
  >
    <div class="text-2xl text-pink-500 group-hover:text-pink-950 transition">
      <slot name="icon" />
    </div>

    <div
      class="text-lg text-pink-950 group-hover:text-pink-950 group-hover:underline transition"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
