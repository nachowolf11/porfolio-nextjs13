import "@/app/globals.css";
import { Mousefollow } from "@/components";
import { getTranslations } from "next-intl/server";
import GoogleAnalytics from '@/components/googleAnalytics/GoogleAnalytics';


interface Props {
  params: {
    locale: string;
  }
}

export async function generateMetadata({params: {locale}}:Props) {
  const t = await getTranslations({locale, namespace: 'metadata.index'});
 
  return {
    title: t('title'),
    description:t('description'),
    keywords:t('keywords'),
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  return (
    <html lang={ locale } suppressHydrationWarning>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <GoogleAnalytics/>
        <Mousefollow/>
        {children}
      </body>
    </html>
  );
}
