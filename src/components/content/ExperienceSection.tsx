import { Experience } from "@/models/models";
import { ExperienceItem } from "..";
import { useLocale, useTranslations } from "next-intl";
import { MdArrowOutward } from "react-icons/md";

const experiences: Array<Experience> = [
  {
    date: 'thalamusDev.date',
    url: 'https://thalamus.global/',
    role: 'thalamusDev.role',
    company: 'Thalamus SA',
    previousRole: [],
    description: 'thalamusDev.description',
    technologies: [ 'Angular', 'React', 'JavaScript', 'TypeScript', 'PHP', 'Laravel', 'HTML & CSS', 'Codeigniter', 'jQuery'],
    workProjects: [
      {
        name: 'Glo',
        url: 'https://www.myglo.bg/'
      },
      {
        name: 'My Renault',
        url: 'https://myrenault.com.ar/'
      },
      {
        name: 'Conectados',
        url: 'https://conectadosbat.com/'
      }
    ]
  },
  {
    date: 'thalamusAA.date',
    url: 'https://thalamus.global/',
    role: 'thalamusAA.role',
    company: 'Thalamus SA',
    previousRole: [],
    description: 'thalamusAA.description',
    technologies: [ 'MySQL', 'HTML & CSS', 'Postman'],
    workProjects: []
  },
];

export const ExperienceSection = () => {
  const t = useTranslations('experience');
  const locale = useLocale();
  
  return (
    <div>
      <ol className="group/list">
          {
            experiences.map( experience => (
              <ExperienceItem key={experience.role} {...experience}/>
            ))
          }
      </ol>

      <div className="mt-12">
          <a 
            href={locale === 'es' ? '/resumen.pdf' : '/resume.pdf'}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
            <span>
              {t('view')}
              <span className="inline-block">
                <MdArrowOutward className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"/>
              </span>
            </span>
          </a>
      </div>

    </div>
  )
}
