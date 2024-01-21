<script lang="ts" setup>
/**
 * @credits NuxtLabs <https://nuxtlabs.com/>
 * @see https://github.com/nuxt/nuxt.com/blob/main/components/OgImage/OgImageDocs.vue
 */
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{ title?: string; description?: string }>(),
  {
    title: 'title',
    description: 'description',
  }
)

const title = computed(() => props.title.slice(0, 60))
</script>

<template>
  <div class="flex flex-col justify-center w-full h-full">
    <img src="/og-bg.png" alt="" class="absolute inset-0 object-cover" />

    <div class="w-[840px] pl-[120px] z-1">
      <h1
        class="m-0 text-[75px] font-semibold mb-4 text-orange-50 flex items-center"
      >
        <span>{{ title }}</span>
      </h1>
      <p class="text-[32px] text-orange-50 leading-tight">
        {{ description.slice(0, 200) }}
      </p>
    </div>

    <img
      src="/profile.png"
      alt=""
      class="w-[200px] h-[200px] absolute top-[200px] right-[120px]"
    />
  </div>
</template>
