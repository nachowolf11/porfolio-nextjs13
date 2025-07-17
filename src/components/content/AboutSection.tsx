import { useTranslations } from "next-intl"

export const AboutSection = () => {
  const t = useTranslations('about');
  return (
    <div>
      <p className="mb-4">{t('p1')}</p>
      <p className="mb-4">{t('p2')}</p>
      <p className="mb-4">{t('p3')}</p>
      <p className="mb-4">{t('p4')}</p>
      <p>{t('p5')}</p>
    </div>
  )
}
