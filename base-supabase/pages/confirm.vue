<script setup lang="ts">
const user = useSupabaseUser()
watch(
  user,
  () => {
    if (user.value) {
      return navigateTo('/')
    }
  },
  { immediate: true }
)
</script>
<template>
  <div class="absolute inset-0 flex items-center justify-center">
    <Icon name="lucide:loader-2" class="text-3xl animate-spin" />
  </div>
</template>
