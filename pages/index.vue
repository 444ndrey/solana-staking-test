<template>
  <v-container
    fluid
    class="d-flex flex-column align-center justify-center px-4 py-5"
    style="min-height: 100vh"
  >
    <index-header @on-nav-click="handleAboutClick"></index-header>
    <index-about id="about" ref="aboutRef"></index-about>
    <index-services id="services" ref="servicesRef"></index-services>
    <index-contact id="contact" ref="contactRef"></index-contact>
  </v-container>
</template>

<script setup lang="ts">
import { useGoTo } from "vuetify";

const aboutRef = ref<Element | null>(null);
const servicesRef = ref<Element | null>(null);
const contactRef = ref<Element | null>(null);
const goTo = useGoTo();

function handleAboutClick(target: "about" | "services" | "contact") {
  const options = {
    easing: "easeInOutCubic",
    duration: 700,
  };
  switch (target) {
    case "about":
      goTo("#about", options);
      break;
    case "services":
      goTo("#services", options);
      break;
    case "contact":
      goTo("#contact", options);
      break;
  }
}
</script>

<style scoped>
html,
body,
#__nuxt,
.v-application {
  height: 100%;
  margin: 0;
}

.v-application--wrap {
  min-height: 100%;
}

.v-container {
  width: 100%;
  max-width: 1400px;
  margin: auto;
}
</style>
