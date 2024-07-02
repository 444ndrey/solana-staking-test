<template>
  <v-row no-gutters class="w-100" style="height: 100vh">
    <v-col cols="12" class="d-flex flex-column align-center justify-center">
      <h2 class="services-title">{{ $t("services-title") }}</h2>
      <v-expansion-panels variant="popout">
        <v-expansion-panel
          :title="$t('services-simplestaking-title')"
          :text="$t('services-simplestaking-text')"
        >
        </v-expansion-panel>
        <v-expansion-panel
          :title="$t('services-security-title')"
          :text="$t('services-security-text')"
        >
          <v-expansion-panel-text></v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel
          :title="$t('services-analityc-title')"
          :text="$t('services-analityc-text')"
        >
        </v-expansion-panel>
        <v-expansion-panel
          :title="$t('services-education-title')"
          :text="$t('services-education-text')"
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script setup lang="ts"></script>

<style scoped>
.services-title {
  margin-right: auto;
  margin-bottom: 50px;
}
</style>
