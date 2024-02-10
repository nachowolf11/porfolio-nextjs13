import { Header, Main } from "@/components";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { fontSans } from "@/config/fonts";

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

  return (
    <div className={`${fontSans.className} mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0`}>
      <div className="lg:flex lg:justify-between lg:gap-4">

        <Header/>
        <Main/>

      </div>
    </div>
  );
}
