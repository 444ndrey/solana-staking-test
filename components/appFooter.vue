<template>
  <v-footer
    class="text-center d-flex flex-column w-100 mx-0 py-10 pt-5"
    color="#827cdc"
  >
    <div>
      <h3>{{ $t("footer-joinnow") }}</h3>
      <v-btn
        icon="fa-brands fa-x-twitter"
        href="https://x.com/solana"
        target="_blank"
        class="mx-4"
        variant="text"
      ></v-btn>
      <v-btn
        icon="fa-brands fa-telegram"
        href="https://t.me/solana"
        target="_blank"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      {{ $t("footer-text") }}
    </div>
    <div>{{ new Date().getFullYear() }} — <strong>SolanaStake</strong></div>
  </v-footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
