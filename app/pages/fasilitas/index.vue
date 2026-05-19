<script setup lang="ts">
import { facilities } from "~/data/facilities"

useSeoMeta({
  title: "Daftar Fasilitas | Taman Legawong",
  ogTitle: "Daftar Fasilitas | Taman Legawong",
  description:
    "Daftar semua tempat dan fasilitas di Taman Legawong dengan foto, ringkasan, dan tautan ke halaman detail masing-masing.",
  ogDescription:
    "Daftar semua tempat dan fasilitas di Taman Legawong dengan foto, ringkasan, dan tautan ke halaman detail masing-masing.",
})
</script>

<template>
  <div>
    <UPageHeader
      class="max-w-3xl"
      title="Daftar semua tempat dan fasilitas di Taman Legawong."
      description="Setiap kartu mengarah ke halaman detail fasilitas yang berisi foto dan tulisan singkat seperti artikel markdown."
      headline="Daftar Fasilitas" />

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <UCard
        v-for="facility in facilities"
        :key="facility.slug"
        class="overflow-hidden">
        <template #header>
          <ImageContainer>
            <Image
              v-if="facility.heroImage"
              :src="facility.heroImage"
              :alt="`Foto ${facility.name}`" />
            <ImageEmpty v-else />
          </ImageContainer>
        </template>

        <div class="space-y-3">
          <UBadge
            color="primary"
            variant="soft">
            {{ facility.badge }}
          </UBadge>
          <div>
            <h2 class="text-xl font-semibold text-highlighted">
              {{ facility.name }}
            </h2>
            <p class="mt-2 text-sm text-muted">
              {{ facility.summary }}
            </p>
          </div>
        </div>

        <template #footer>
          <div class="flex items-center justify-between gap-3">
            <p class="text-sm text-muted">{{ facility.sections.length }} bagian cerita</p>
            <UButton
              :to="`/fasilitas/${facility.slug}`"
              label="Lihat detail"
              icon="i-lucide-arrow-right"
              trailing
              color="neutral"
              variant="solid"
              size="sm" />
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>
