import { useTranslations } from "next-intl"

export const About = () => {
  const t = useTranslations('about');
  return (
    <div>
      <p className="mb-4">{t('p1')}</p>
      <p className="mb-4">{t('p2')}</p>
      <p>{t('p3')}</p>
    </div>
  )
}
