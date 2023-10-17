import { redirect } from "@sveltejs/kit";

const REDIRECTS = {
  ["veterinarijos-klinikos-paslaugos.html"]: "/paslaugos",
  ["vakcinacija.html"]: "/",
  ["odos-pleiskanojimas.html"]: "/",
  ["kastracija-ir-sterilizacija.html"]: "/",
  ["darbo-pasiulymai.html"]: "/",
  ["fotogalerija.html"]: "/",
  ["index.html"]: "/",
  ["scaronlapimo-p363sl279s-u382degimas.html"]: "/",
  ["erk279s-ir-j371-sukeliamos-ligos.html"]: "/",
  ["naudinga.html"]: "/",
  ["scaronunid382i371-kosulys.html"]: "/",
  ["dovanotigyvuna.html"]: "/",
  ["akcijos.html"]: "/",
  ["maistas-vaistai.html"]: "/",
  ["pasiutlig279.html"]: "/",
  ["egzema.html"]: "/",
  ["augintini371-dehelmintizacija.html"]: "/",
  ["kontaktai-182681.html"]: "/",
  ["privatumopolitika.html"]: "/",
  ["registracija.html"]: "/",
};

export function load({ params: { old_path } }) {
  const path = REDIRECTS[old_path];

  if (path) {
    throw redirect(301, path);
  }
}
