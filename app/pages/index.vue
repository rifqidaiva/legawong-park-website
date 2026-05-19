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

const featuredStats = [
  { label: "Fasilitas utama", value: String(facilities.length) },
  { label: "Tampilan", value: "Profil sederhana" },
  { label: "Konten", value: "Foto + deskripsi" },
]

const highlightCards = [
  {
    title: "Kenali fasilitas",
    description: "Lihat daftar tempat dan fasilitas yang ada di Taman Legawong dalam tampilan yang ringkas.",
    icon: "i-lucide-map-pinned",
  },
  {
    title: "Buka halaman detail",
    description: "Setiap fasilitas memiliki halaman sendiri dengan foto dan tulisan bergaya markdown.",
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
        title="Profil singkat Taman Legawong."
        description="Website ini menampilkan tempat dan fasilitas di Taman Legawong secara sederhana, rapi, dan mudah dibaca. Setiap fasilitas punya halaman detail sendiri berisi foto dan deskripsi seperti artikel markdown."
        headline="Fasilitas Taman Legawong"
        orientation="horizontal"
        :links="links">
        <UCard class="overflow-hidden rounded-3xl border border-white bg-white shadow-lg dark:bg-slate-950">
          <div class="rounded-2xl bg-slate-950 p-6 text-white">
            <p class="text-sm uppercase tracking-wide text-amber-300">Taman Legawong</p>
            <p class="mt-3 text-2xl font-bold">Tempat yang ditampilkan dengan jelas</p>
            <p class="mt-3 text-sm leading-6 text-slate-300">
              Fokus situs ini adalah memperkenalkan fasilitas yang ada, bukan proses booking.
              Pengunjung bisa membuka detail tiap fasilitas untuk melihat foto, ringkasan, dan
              cerita singkatnya.
            </p>
            <div class="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div
                v-for="stat in featuredStats"
                :key="stat.label"
                class="rounded-lg border border-slate-700 bg-slate-800 p-4">
                <p class="text-2xl font-semibold">{{ stat.value }}</p>
                <p class="mt-1 text-sm text-slate-300">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </UCard>
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
            <UBadge color="primary" variant="soft">
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
