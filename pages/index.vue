<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <h1>{{ $t('index') }}</h1>
  <ClientOnly>
    <NuxtLink :to="localePath({ path: '/game/Q161904-Q41269' })">{{ $t('play') }}
    </NuxtLink>
  </ClientOnly>
</template>