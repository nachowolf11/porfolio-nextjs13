import { Project } from "@/models/models";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { ProjectItem } from "..";

const projects: Array<Project> = [
  {
    name: 'livosur.name',
    url: 'https://livosur.com/',
    description: 'livosur.description',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    imageUrl: '/projects/livosur.jpg',
    company: '',
    year: 2025
  },
  {
    name: 'miescuela.name',
    url: 'https://miescuela.bue.edu.ar',
    description: 'miescuela.description',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    imageUrl: '/projects/miescuela.png',
    company: 'Phinxlab',
    year: 2024
  },
  {
    name: 'myglo.name',
    url: 'https://myglo.bg',
    description: 'myglo.description',
    technologies: ['Angular', 'TypeScript', 'PHP', 'Laravel', 'MySQL'],
    imageUrl: '/projects/myglo.svg',
    company:'Thalamus SA',
    year: 2023
  }
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
