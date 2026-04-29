<script setup lang="ts">
import { getUmkmBySlug } from "~/data/umkm"

const route = useRoute()
const umkm = computed(() => getUmkmBySlug(String(route.params.slug)))

if (!umkm.value) {
  throw createError({ statusCode: 404, statusMessage: "UMKM tidak ditemukan" })
}

useSeoMeta({
  title: `${umkm.value?.name} | UMKM Pandeyan`,
  ogTitle: `${umkm.value?.name} | UMKM Pandeyan`,
  description: umkm.value?.description,
  ogDescription: umkm.value?.description,
})
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UButton
      to="/umkm"
      icon="i-lucide-arrow-left"
      label="Kembali ke daftar UMKM"
      color="neutral"
      variant="link"
      class="mb-6" />

    <div
      v-if="umkm"
      class="grid gap-6 lg:gap-8 lg:grid-cols-3 lg:items-start">
      <div class="space-y-6 lg:col-span-2">
        <UCard>
          <template #header>
            <p class="text-sm font-semibold uppercase tracking-wide text-primary">Profil UMKM</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
              {{ umkm.name }}
            </h1>
          </template>

          <p class="text-sm leading-6 text-muted sm:text-base">
            {{ umkm.description }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              color="primary"
              variant="soft">
              {{ umkm.category }}
            </UBadge>
            <UBadge
              color="neutral"
              variant="soft">
              Pemilik: {{ umkm.owner }}
            </UBadge>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Foto UMKM</h2>
          </template>
          <div class="sm:px-10">
            <UCarousel
              v-if="umkm.images.length > 1"
              v-slot="{ item }"
              arrows
              :prev="{ color: 'primary' }"
              :next="{ variant: 'solid' }"
              :items="umkm.images"
              class="w-full">
              <img
                :src="item"
                alt="Foto UMKM"
                class="h-full w-full rounded-lg aspect-video object-cover"
                loading="lazy" />
            </UCarousel>
            <div
              v-else-if="umkm.images.length === 1"
              class="relative aspect-video overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <img
                :src="umkm.images[0]"
                alt="Foto UMKM"
                class="h-full w-full object-cover" />
            </div>
            <NoImage v-else />
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted flex items-center gap-2">
              <UIcon name="i-lucide-package" />
              Produk / layanan
            </h2>
          </template>
          <div class="space-y-6">
            <UCard
              v-for="product in umkm.products"
              :key="product.name">
              <div class="sm:px-10">
                <UCarousel
                  v-if="product.images.length > 1"
                  v-slot="{ item }"
                  arrows
                  :prev="{ color: 'primary' }"
                  :next="{ variant: 'solid' }"
                  :items="product.images"
                  class="w-full">
                  <img
                    :src="item"
                    :alt="`Foto ${product.name}`"
                    class="h-full w-full rounded-lg aspect-video object-cover"
                    loading="lazy" />
                </UCarousel>

                <div
                  v-else-if="product.images.length === 1"
                  class="relative aspect-video overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
                  <img
                    :src="product.images[0]"
                    :alt="`Foto ${product.name}`"
                    class="h-full w-full object-cover"
                    loading="lazy" />
                </div>

                <NoImage v-else />
              </div>

              <template #footer>
                <div class="flex items-center justify-between gap-3">
                  <h3 class="font-semibold text-highlighted">{{ product.name }}</h3>
                  <UBadge
                    color="neutral"
                    variant="soft">
                    Rp {{ product.price.toLocaleString("id-ID") }},-
                  </UBadge>
                </div>
                <p class="text-sm text-muted mt-2">{{ product.description }}</p>
              </template>
            </UCard>
          </div>
        </UCard>
      </div>

      <UCard class="order-first lg:order-last">
        <template #header>
          <h2 class="text-base font-semibold text-highlighted">Detail kontak</h2>
        </template>

        <dl class="space-y-4 text-sm">
          <div>
            <dt class="text-muted">Alamat</dt>
            <dd class="mt-1 font-medium text-highlighted">{{ umkm.address }}</dd>
          </div>
          <div>
            <dt class="text-muted">Jam buka</dt>
            <dd class="mt-1 font-medium text-highlighted">{{ umkm.hours }}</dd>
          </div>
          <div>
            <dt class="text-muted">Kontak</dt>
            <dd class="mt-1 font-medium text-highlighted">{{ umkm.contact }}</dd>
          </div>
        </dl>

        <iframe
          class="w-full rounded-xl mt-6 aspect-video border-0"
          :src="umkm.googleMapsUrl"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </UCard>
    </div>
  </UContainer>
</template>
