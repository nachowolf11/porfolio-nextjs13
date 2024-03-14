import { useTranslations } from "next-intl";

interface Props{
    sectionName: string
}

export const SectionTitle = ({ sectionName }:Props) => {
    const t = useTranslations('header.sections');

  return (
    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
      { t( sectionName ) }
    </h2>
  )
}
