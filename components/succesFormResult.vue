<template>
  <v-sheet
    class="pa-4 text-center mx-auto"
    max-width="600"
    rounded="lg"
    width="100%"
  >
    <v-icon
      class="mb-5"
      color="success"
      icon="fa-sharp fa-solid fa-check"
      size="112"
    ></v-icon>
    <h2 class="text-h5 mb-6">{{ $t("contact-form-result") }}</h2>

    <div class="text-center">
      <v-btn
        class="text-none"
        color="success"
        variant="flat"
        width="90"
        rounded
        @click="() => emits('onDone')"
      >
        Ок
      </v-btn>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
const emits = defineEmits(["onDone"]);
</script>

<style scoped></style>
