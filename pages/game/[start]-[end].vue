<script setup lang="ts">
import { Buffer } from 'buffer';

const route = useRoute();
const start = route.params.start as string;
const end = route.params.end as string;
</script>

<template>
  <Options :forward="true" :item="start"></Options>
</template>