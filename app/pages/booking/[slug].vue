<script setup lang="ts">
import { getBookingBySlug } from "~/data/booking"

const route = useRoute()
const booking = computed(() => getBookingBySlug(String(route.params.slug)))

if (!booking.value) {
  throw createError({ statusCode: 404, statusMessage: "Booking tempat tidak ditemukan" })
}

useSeoMeta({
  title: `${booking.value?.name} | Taman Legawong`,
  ogTitle: `${booking.value?.name} | Taman Legawong`,
  description: booking.value?.description,
  ogDescription: booking.value?.description,
})
</script>

<template>
  <div>
    <UButton
      to="/booking"
      icon="i-lucide-arrow-left"
      label="Kembali ke daftar booking"
      color="neutral"
      variant="link"
      class="mb-6" />

    <div
      v-if="booking"
      class="grid gap-6 lg:gap-8 lg:grid-cols-3">
      <div class="space-y-6 lg:col-span-2">
        <UCard>
          <UPageHeader
            :title="booking.name"
            :description="booking.description"
            headline="DETAIL BOOKING" />

          <BadgeContainer class="mt-4">
            <UBadge
              color="primary"
              variant="soft">
              {{ booking.category }}
            </UBadge>
            <UBadge
              color="neutral"
              variant="soft">
              Kapasitas: {{ booking.capacity }}
            </UBadge>
            <UBadge
              color="neutral"
              variant="soft">
              Durasi: {{ booking.duration }}
            </UBadge>
          </BadgeContainer>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Foto lokasi</h2>
          </template>
          <div class="sm:px-10">
            <UCarousel
              v-if="booking.images.length > 1"
              v-slot="{ item }"
              arrows
              :prev="{ color: 'primary' }"
              :next="{ variant: 'solid' }"
              :items="booking.images"
              class="w-full">
              <ImageContainer>
                <Image
                  :src="item"
                  :alt="`Foto ${booking.name}`" />
              </ImageContainer>
            </UCarousel>

            <ImageContainer v-else>
              <Image
                v-if="booking.images && booking.images[0]"
                :src="booking.images[0]"
                :alt="`Foto ${booking.name}`" />
              <ImageEmpty v-else />
            </ImageContainer>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted flex items-center gap-2">
              <UIcon name="i-lucide-sparkles" />
              Fasilitas & catatan
            </h2>
          </template>

          <BadgeContainer>
            <UBadge
              v-for="facility in booking.facilities"
              :key="facility"
              color="neutral"
              variant="soft">
              {{ facility }}
            </UBadge>
          </BadgeContainer>

          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p class="text-sm font-semibold text-highlighted">Alamat area</p>
              <p class="mt-1 text-sm text-muted">{{ booking.address }}</p>
            </div>
            <div>
              <p class="text-sm font-semibold text-highlighted">Jam booking</p>
              <p class="mt-1 text-sm text-muted">{{ booking.hours }}</p>
            </div>
          </div>
        </UCard>
      </div>

      <div>
        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Ringkasan booking</h2>
          </template>

          <dl class="space-y-4 text-sm">
            <div>
              <dt class="text-muted">Harga mulai</dt>
              <dd class="mt-1 font-medium text-highlighted">
                Rp {{ booking.price.toLocaleString("id-ID") }},-
              </dd>
            </div>
            <div>
              <dt class="text-muted">Kontak pengelola</dt>
              <dd class="mt-1 font-medium text-highlighted">{{ booking.contact }}</dd>
            </div>
            <div>
              <dt class="text-muted">Catatan</dt>
              <dd class="mt-1 font-medium text-highlighted">{{ booking.locationNote }}</dd>
            </div>
          </dl>

          <UButton
            class="mt-6 w-full"
            color="primary"
            variant="solid"
            icon="i-lucide-message-circle-more"
            :to="`https://wa.me/${booking.contact.replace(/[^0-9]/g, '')}`"
            target="_blank">
            Booking via WhatsApp
          </UButton>

          <p class="mt-4 text-xs leading-5 text-muted">
            Konfirmasi jadwal, jumlah tamu, dan kebutuhan tambahan sebelum datang ke lokasi.
          </p>

          <iframe
            class="w-full rounded-xl mt-6 aspect-video border-0"
            :src="booking.googleMapsUrl"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </UCard>
      </div>
    </div>
  </div>
</template>
