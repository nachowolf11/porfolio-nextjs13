import { Header, Main } from "@/components";
import { unstable_setRequestLocale } from "next-intl/server";
import { fontSans } from "@/config/fonts";

interface Props {
  params: {
    locale: string;
  }
}

export default function Home({ params }:Props) {
  unstable_setRequestLocale(params.locale);

  return (
    <div className={`${fontSans.className} mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0`}>
      <div className="lg:flex lg:justify-between lg:gap-4">

        <Header locale={params.locale}/>
        <Main/>

      </div>
    </div>
  );
}
