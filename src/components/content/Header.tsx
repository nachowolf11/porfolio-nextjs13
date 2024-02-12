import { useTranslations } from "next-intl"
import Link from "next/link"
import { Nav } from "..";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

const socialNetworks = [
    {
        url: 'https://github.com/nachowolf11',
        label: 'GitHub',
        icon: <IoLogoGithub className="h-6 w-6"/>
    },
    {
        url: 'https://www.linkedin.com/in/ignacio-wolf-890642164/',
        label: 'LinkedIn',
        icon: <IoLogoLinkedin className="h-6 w-6"/>
    },
    {
        url: 'https://www.instagram.com/nachowolf/',
        label: 'Instagram',
        icon: <IoLogoInstagram className="h-6 w-6"/>
    }
];

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

        <ul className="ml-1 mt-8 flex items-center">
            {
                socialNetworks.map( item => (
                    <li key={item.label} className="mr-5 text-xs shrink-0">
                        <a href={item.url} className="block hover:text-slate-200" target="_blank" rel="noreferrer noopener" title={item.label}>
                            <span className="sr-only">{item.label}</span>
                            {item.icon}
                        </a>
                    </li>
                ))
            }
        </ul>
    </header>
  )
}
