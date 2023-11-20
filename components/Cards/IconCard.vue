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
    class="rounded-full flex flex-col p-4 group hover:bg-pink-500/75 transition items-center justify-center ring-2 ring-pink-200/75 my-8 space-y-2"
  >
    <div class="text-5xl text-pink-950 group-hover:text-pink-500 transition">
      <slot name="icon" />
    </div>

    <div
      class="text-xl text-pink-950 group-hover:text-pink-950 group-hover:underline hover:decoration-pink-950 transition"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
