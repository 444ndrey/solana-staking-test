<template>
  <v-container class="w-100 d-flex justify-end">
    <v-select
      :items="$i18n.availableLocales"
      style="max-width: 100px"
      variant="solo"
      v-model="$i18n.locale"
    ></v-select>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

watch(locale, () => {
  localStorage.setItem("lang", locale.value);
});
</script>

<style scoped></style>
