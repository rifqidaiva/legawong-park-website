<script setup lang="ts">
const props = defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <img
    class="aspect-video w-full object-cover"
    :src="props.src"
    :alt="props.alt || 'Foto lokasi'"
    loading="lazy" />
</template>
