<template>
  <v-app v-if="isLoading">
    <AppHeader></AppHeader>
    <NuxtPage></NuxtPage>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const isLoading = ref(false);

onMounted(() => {
  const storedLang = localStorage.getItem("lang");
  if (storedLang) {
    locale.value = storedLang;
  }
  isLoading.value = true;
});
</script>

<style></style>
