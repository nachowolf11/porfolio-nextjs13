import { useTranslations } from "next-intl";
import { ThemeSwitch } from "../components";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  }
}

export async function generateMetadata({params: {locale}}:Props) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title')
  };
}

export default function Home({ params }:Props) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations('index');
  return (
    <main className="">
      <ThemeSwitch/>
    </main>
  );
}
