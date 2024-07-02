<template>
  <v-row no-gutters class="main w-100" style="min-height: 100vh">
    <v-col class="d-flex flex-column space-between px-4 py-5" cols="12" md="6">
      <h1 class="gradiented text-md-left main-title title-apperance">
        {{ $t("header-title") }}
      </h1>
      <h3 class="main-subtitle text-center text-md-left delayed-apperance">
        {{ $t("header-subtitle") }}
      </h3>

      <div
        class="main-nav d-flex justify-center justify-md-start mb-4 delayed-apperance"
      >
        <v-btn
          color="#21ddb1"
          variant="outlined"
          class="mx-2 my-2"
          @click="() => $emit('onNavClick', 'about')"
          >{{ $t("header-about-btn") }}</v-btn
        >
        <v-btn
          color="#827cdc"
          variant="outlined"
          class="mx-2 my-2"
          @click="() => $emit('onNavClick', 'services')"
          >{{ $t("header-services-btn") }}</v-btn
        >
        <v-btn
          color="#bd3ef2"
          variant="outlined"
          class="mx-2 my-2"
          @click="() => $emit('onNavClick', 'contact')"
          >{{ $t("header-contact-btn") }}</v-btn
        >
      </div>
      <v-card
        :title="$t('header-earn')"
        class="mt-10 mx-auto mx-md-0 delayed-apperance"
        style="width: fit-content"
        color="orange"
      ></v-card>
    </v-col>
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
      <v-img
        class="main-img logo-apperance"
        src="../public/sol-logo.svg"
        alt="SOLANA logo"
        style="max-width: 100%; height: auto"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  onNavClick: [target: "about" | "services" | "contact"];
}>();
</script>

<style scoped>
.main {
  color: #3e3d4a;
}
.main-title {
  max-width: 500px;
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #bd3ef2;
  text-transform: uppercase;
}
.main-subtitle {
  margin-bottom: 50px;
  font-size: 1.25rem;
}
.main-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.main-img {
  user-select: none;
}
.gradiented {
  color: #1ac79f;
  background-image: -webkit-linear-gradient(
    225deg,
    #1ac79f 41%,
    #a454eb 70%,
    #bd3ef2 45%
  );
  background-clip: text;
  -webkit-background-clip: text;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}
@media (min-width: 768px) {
  #main-title {
    font-size: 4rem;
  }
  .main-subtitle {
    font-size: 1.5rem;
    margin-bottom: 100px;
  }
}
.title-apperance {
  animation: title-apperance 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes title-apperance {
  0% {
    transform: translateY(-200px);
    opacity: 0;
  }
  100% {
    opacity: 100;
    transform: translateY(0px);
  }
}
.logo-apperance {
  animation: logo-apperance 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-delay: 0.8s;
}

@keyframes logo-apperance {
  0% {
    transform: translateX(300px);
    opacity: 0;
  }

  100% {
    opacity: 100;
    transform: translateX(0px);
  }
}
.delayed-apperance {
  animation: delayed-apperance 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-delay: 0.8s;
}

@keyframes delayed-apperance {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}
</style>
