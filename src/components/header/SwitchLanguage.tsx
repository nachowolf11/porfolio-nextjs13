import { IoLanguageSharp } from "react-icons/io5"
import { Link } from "../../navigations"

export const SwitchLanguage = ({locale}:{locale: string}) => {



  return (
    <Link href="/dev" locale={locale === 'en' ? 'es' : 'en'} scroll={false} className="block hover:text-slate-200">
        <IoLanguageSharp className="h-6 w-6"/>
    </Link>
  )
}
