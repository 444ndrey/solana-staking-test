import { createI18n } from "vue-i18n";
import ru from "../locale/ru.json";
import en from "../locale/en.json";

const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "en",
  allowComposition: true,
  messages: {
    ru: ru,
    en: en,
  },
});

export default defineNuxtPlugin((app) => {
  app.vueApp.use(i18n);
});
