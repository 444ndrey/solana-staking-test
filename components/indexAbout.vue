<template>
  <v-row no-gutters class="mb-10" style="min-height: 100vh">
    <v-container
      fluid
      class="d-flex flex-md-row pa-4 align-center justify-space-between flex-wrap"
    >
      <v-col
        cols="12"
        md="4"
        class="d-flex align-start justify-center mb-4 mb-md-0"
      >
        <v-card
          class="pa-5 flex-grow-1 d-flex flex-column"
          color="#21ddb1"
          variant="text"
        >
          <v-card-title class="large-title">{{
            $t("about-us-title")
          }}</v-card-title>
          <v-card-text class="flex-grow-1 large-text">
            {{ $t("about-us-text") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="d-flex align-start justify-center mb-4 mb-md-0"
      >
        <v-card
          class="pa-5 flex-grow-1 d-flex flex-column"
          color="#827cdc"
          variant="text"
        >
          <v-card-title class="large-title">{{
            $t("about-goals-title")
          }}</v-card-title>
          <v-card-text class="flex-grow-1 large-text">
            {{ $t("about-goals-text") }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="d-flex align-start justify-center">
        <v-card
          class="pa-5 flex-grow-1 d-flex flex-column"
          color="#bd3ef2"
          variant="text"
        >
          <v-card-title class="large-title">{{
            $t("about-invite-title")
          }}</v-card-title>
          <v-card-text class="flex-grow-1 large-text">
            {{ $t("about-invite-text") }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-container>
  </v-row>
</template>

<script setup lang="ts"></script>

<style scoped>
.page-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
}

.large-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.large-text {
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
}

@media (max-width: 767px) {
  .page-title {
    font-size: 1.5rem;
  }

  .large-title {
    font-size: 1.25rem;
  }

  .large-text {
    font-size: 0.875rem;
  }
}
</style>
