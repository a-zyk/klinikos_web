import { redirect } from "@sveltejs/kit";

const REDIRECTS = {
  ["veterinarijos-klinikos-paslaugos.html"]: "/paslaugos",
  ["vakcinacija.html"]: "/straipsniai",
  ["odos-pleiskanojimas.html"]: "/straipsniai",
  ["kastracija-ir-sterilizacija.html"]: "/straipsniai",
  ["darbo-pasiulymai.html"]: "/",
  ["fotogalerija.html"]: "/",
  ["index.html"]: "/",
  ["scaronlapimo-p363sl279s-u382degimas.html"]: "/straipsniai",
  ["erk279s-ir-j371-sukeliamos-ligos.html"]: "/straipsniai",
  ["naudinga.html"]: "/straipsniai",
  ["scaronunid382i371-kosulys.html"]: "/straipsniai",
  ["dovanotigyvuna.html"]: "/",
  ["akcijos.html"]: "/straipsniai",
  ["maistas-vaistai.html"]: "/straipsniai",
  ["pasiutlig279.html"]: "/straipsniai",
  ["egzema.html"]: "/straipsniai",
  ["augintini371-dehelmintizacija.html"]: "/",
  ["kontaktai-182681.html"]: "/kontaktai",
  ["privatumopolitika.html"]: "/",
  ["registracija.html"]: "/kontaktai",
};

export function load({ params: { old_path } }) {
  const path = REDIRECTS[old_path];

  if (path) {
    throw redirect(301, path);
  }
}
