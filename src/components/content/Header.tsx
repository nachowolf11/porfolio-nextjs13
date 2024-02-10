import { useTranslations } from "next-intl"
import Link from "next/link"
import { Nav } from "..";

export const Header = () => {
    const t = useTranslations('header');
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <Link href="/">Ignacio Wolf</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                { t('role') }
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
                { t('description') }
            </p>
            
            <Nav/>
        </div>
    </header>
  )
}
