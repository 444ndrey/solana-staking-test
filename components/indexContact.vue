<template>
  <v-row no-gutters class="w-75">
    <v-col
      cols="12"
      class="d-flex align-center flex-column p-5 w-100"
      style="height: 100vh"
    >
      <h2>{{ $t("contact-title") }}</h2>
      <v-sheet class="w-100">
        <succes-form-result
          v-if="isSubmited"
          @on-done="() => (isSubmited = false)"
        ></succes-form-result>
        <v-form @submit.prevent @submit="submitHandler" v-if="!isSubmited">
          <v-text-field
            :label="$t('contact-form-name')"
            v-model="contactForm.name"
            :rules="[
              (value) => localizeErrorMessage(validations.validateName(value)),
            ]"
            color="#21ddb1"
          ></v-text-field>
          <v-text-field
            :label="$t('contact-form-email')"
            v-model="contactForm.email"
            :rules="[
              (value) => localizeErrorMessage(validations.validateEmail(value)),
            ]"
            color="#827cdc"
          ></v-text-field>
          <v-textarea
            :label="$t('contact-form-message')"
            v-model="contactForm.message"
            :rules="[
              (value) =>
                localizeErrorMessage(validations.validateMessage(value)),
            ]"
            color="#bd3ef2"
          ></v-textarea>
          <v-btn class="mt-2" type="submit" block :loading="isLoading">{{
            $t("contact-form-submit")
          }}</v-btn>
        </v-form>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { validations, getErrors } from "~/validate";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const contactForm = ref({
  name: "",
  email: "",
  message: "",
});
const isLoading = ref(false);

const isSubmited = ref(false);
function submitHandler() {
  if (getErrors(contactForm.value).length === 0) {
    isLoading.value = true;
    setTimeout(() => {
      isSubmited.value = true;
      contactForm.value.message = "";
      isLoading.value = false;
    }, 700);
  }
}

function localizeErrorMessage(value: string | true) {
  if (typeof value === "string") {
    return t(value);
  }
  return value;
}
</script>

<style scoped></style>
