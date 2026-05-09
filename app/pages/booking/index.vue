<script setup lang="ts">
import { bookingSpaces, getBookingCategories } from "~/data/booking"

const categories = getBookingCategories()
</script>

<template>
  <div>
    <UPageHeader
      class="max-w-3xl"
      title="Pilih tempat terbaik untuk kegiatan Anda di Taman Legawong."
      description="Temukan gazebo, pendopo, area terbuka, dan panggung yang bisa dipesan sesuai kebutuhan acara. Setiap lokasi menampilkan kapasitas, durasi sewa, fasilitas, dan kontak pengelola agar proses booking lebih cepat."
      headline="DAFTAR BOOKING TEMPAT" />

    <BadgeContainer class="mt-4">
      <UBadge
        v-for="category in categories"
        :key="category"
        color="neutral"
        variant="soft">
        {{ category }}
      </UBadge>
    </BadgeContainer>

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <UCard
        v-for="item in bookingSpaces"
        :key="item.slug">
        <template #header>
          <div class="space-y-4">
            <ImageContainer>
              <Image
                v-if="item.images && item.images[0]"
                :src="item.images[0]"
                :alt="`Foto ${item.name}`" />
              <ImageEmpty v-else />
            </ImageContainer>

            <div class="flex items-start justify-between gap-3">
              <div>
                <UBadge
                  color="primary"
                  variant="soft"
                  class="mb-2">
                  {{ item.category }}
                </UBadge>
                <h2 class="text-lg font-semibold text-highlighted">
                  {{ item.name }}
                </h2>
              </div>

              <UBadge
                color="neutral"
                variant="outline"
                class="whitespace-nowrap">
                {{ item.capacity }}
              </UBadge>
            </div>
          </div>
        </template>

        <p class="text-sm text-muted">
          {{ item.description }}
        </p>

        <BadgeContainer class="mt-4">
          <UBadge
            v-for="facility in item.facilities"
            :key="facility"
            color="neutral"
            variant="subtle"
            size="sm">
            {{ facility }}
          </UBadge>
        </BadgeContainer>

        <div class="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <p class="font-semibold text-highlighted">Durasi</p>
            <p class="mt-1 text-muted">{{ item.duration }}</p>
          </div>
          <div>
            <p class="font-semibold text-highlighted">Harga mulai</p>
            <p class="mt-1 text-muted">Rp {{ item.price.toLocaleString("id-ID") }},-</p>
          </div>
        </div>

        <template #footer>
          <div class="flex items-center justify-between gap-3">
            <p class="line-clamp-2 text-sm text-muted">{{ item.highlight }}</p>
            <UButton
              :to="`/booking/${item.slug}`"
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
