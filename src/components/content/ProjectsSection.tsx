import { Project } from "@/models/models";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { ProjectItem } from "..";

const projects: Array<Project> = [
  {
    name: 'myglo.name',
    url: 'https://www.myglo.bg/',
    description: 'myglo.description',
    technologies: ['Angular', 'TypeScript', 'PHP', 'Laravel'],
    imageUrl: '/projects/myglobg.jpg',
    company:'Thalamus SA',
    year: 0
  },
  {
    name: 'conectados.name',
    url: 'https://conectadosbat.com/',
    description: 'conectados.description',
    technologies: ['Angular', 'TypeScript', 'PHP', 'Laravel'],
    imageUrl: '/projects/conectados.jpg',
    company:'Thalamus SA',
    year: 0
  },
  {
    name: 'portfoliov1.name',
    url: 'https://nachowolf11.github.io/portfolio/',
    description: 'portfoliov1.description',
    technologies: ['React'],
    imageUrl: '/projects/portfoliov1.jpg',
    company:'',
    year: 0
  },
];

export const ProjectsSection = () => {
  const t = useTranslations('projects');
  return (
    <div>
      <ul className="group/list">
        {
          projects.map( item => (
            <ProjectItem key={item.name} {...item}/>
          ))
        }
      </ul>

      <div className="mt-12">
        <Link href="archive" className="inline-flex items-center font-medium leading-tight text-slate-200 group">
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
              {t('view1')}
            </span>
            <span className="whitespace-nowrap">
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                {t('view2')}
              </span>
              <GoArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"/>
            </span>
          </span>
        </Link>
      </div>

    </div>
  )
}
