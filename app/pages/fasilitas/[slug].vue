<script setup lang="ts">
import { computed } from "vue"

import { getFacilityBySlug } from "~/data/facilities"

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const facility = computed(() => getFacilityBySlug(slug.value))

if (!facility.value) {
  throw createError({ statusCode: 404, statusMessage: "Fasilitas tidak ditemukan" })
}

useSeoMeta({
  title: () => `${facility.value?.name} | Taman Legawong`,
  ogTitle: () => `${facility.value?.name} | Taman Legawong`,
  description: () => facility.value?.summary,
  ogDescription: () => facility.value?.summary,
})
</script>

<template>
  <div
    v-if="facility"
    class="space-y-10">
    <UPageHeader
      class="max-w-3xl"
      :title="facility.name"
      :description="facility.summary"
      :headline="facility.badge"
      :links="[
        {
          label: 'Kembali ke daftar fasilitas',
          to: '/fasilitas',
          icon: 'i-lucide-arrow-left',
          color: 'neutral',
          variant: 'outline',
        },
      ]" />

    <UCard class="overflow-hidden">
      <template #header>
        <ImageContainer>
          <Image
            v-if="facility.heroImage"
            :src="facility.heroImage"
            :alt="`Foto ${facility.name}`" />
          <ImageEmpty v-else />
        </ImageContainer>
      </template>

      <div class="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)]">
        <article class="space-y-8">
          <section
            v-for="section in facility.sections"
            :key="section.title"
            class="space-y-4">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Bagian cerita
              </p>
              <h2 class="mt-2 text-2xl font-semibold text-highlighted">
                {{ section.title }}
              </h2>
            </div>

            <div class="space-y-4 text-sm leading-7 text-muted">
              <p
                v-for="paragraph in section.paragraphs"
                :key="paragraph">
                {{ paragraph }}
              </p>
            </div>

            <ul
              v-if="section.points && section.points.length"
              class="list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
              <li
                v-for="point in section.points"
                :key="point">
                {{ point }}
              </li>
            </ul>

            <div
              v-if="section.note"
              class="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm leading-7 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              {{ section.note }}
            </div>
          </section>
        </article>

        <aside class="space-y-4">
          <UCard>
            <h3 class="text-base font-semibold text-highlighted">Fakta singkat</h3>
            <dl class="mt-4 space-y-4">
              <div
                v-for="fact in facility.facts"
                :key="fact.label">
                <dt class="text-xs font-medium uppercase tracking-wide text-muted">
                  {{ fact.label }}
                </dt>
                <dd class="mt-1 text-sm font-medium text-highlighted">
                  {{ fact.value }}
                </dd>
              </div>
            </dl>
          </UCard>

          <UCard>
            <h3 class="text-base font-semibold text-highlighted">Galeri foto</h3>
            <div class="mt-4 grid gap-3">
              <ImageContainer
                v-for="image in facility.gallery"
                :key="image"
                class="overflow-hidden rounded-2xl">
                <Image
                  :src="image"
                  :alt="`Galeri ${facility.name}`" />
              </ImageContainer>
            </div>
          </UCard>
        </aside>
      </div>
    </UCard>
  </div>
</template>
