<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

import { facilities } from "~/data/facilities"

const links = [
  {
    label: "Lihat daftar fasilitas",
    to: "/fasilitas",
    icon: "i-lucide-building-2",
    color: "primary",
  },
  {
    label: "Lihat highlight",
    to: "#fasilitas",
    icon: "i-lucide-map-pinned",
    color: "neutral",
    variant: "outline",
  },
] satisfies ButtonProps[]

const highlightCards = [
  {
    title: "Kenali fasilitas",
    description:
      "Lihat daftar tempat dan fasilitas yang ada di Taman Legawong dalam tampilan yang ringkas.",
    icon: "i-lucide-map-pinned",
  },
  {
    title: "Buka halaman detail",
    description:
      "Setiap fasilitas memiliki halaman sendiri dengan foto dan tulisan bergaya markdown.",
    icon: "i-lucide-file-text",
  },
  {
    title: "Jelajahi semua tempat",
    description: "Gunakan halaman daftar fasilitas untuk melihat seluruh tempat yang tersedia.",
    icon: "i-lucide-list-tree",
  },
]
</script>

<template>
  <div>
    <UTheme
      :ui="{
        button: {
          base: 'rounded-full',
        },
      }">
      <UPageHero
        title="Menemukan Jeda dan Cerita di Taman Legawong."
        description="Ruang terbuka hijau yang dirancang sederhana untuk tempat berkumpul, merayakan seni, dan menikmati sajian kuliner lokal yang hangat. Jelajahi setiap sudut fasilitas kami di bawah ini."
        headline="Taman Legawong"
        orientation="horizontal"
        :links="links">
        <ImageContainer>
          <Image
            src="/contents/legawong.jpg"
            alt="Foto Taman Legawong" />
        </ImageContainer>
      </UPageHero>
    </UTheme>

    <UContainer>
      <UPageGrid id="fasilitas">
        <UPageCard
          spotlight
          v-for="(card, index) in highlightCards"
          :key="index"
          v-bind="card" />
      </UPageGrid>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
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
            <h2 class="text-lg font-semibold text-highlighted">
              {{ facility.name }}
            </h2>
            <p class="text-sm text-muted">
              {{ facility.summary }}
            </p>
          </div>

          <template #footer>
            <UButton
              :to="`/fasilitas/${facility.slug}`"
              label="Buka halaman fasilitas"
              icon="i-lucide-arrow-right"
              trailing
              color="neutral"
              variant="solid"
              size="sm" />
          </template>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
