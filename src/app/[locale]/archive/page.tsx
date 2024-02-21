import { useTranslations } from "next-intl";
import Link from "next/link";
import { projectsArchive } from '../../../data/projectsArchive';
import { ProjectTableItem } from "@/components";



export default function ArchivePage() {
  const t = useTranslations('archive');
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:py-24">

        <Link href="/" className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
          Ignacio Wolf
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          {t('allProjects')}
        </h1>

        <table className="mt-12 w-full border-collapse text-left" id="content">

          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                {t('tableHeaders.year')}
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                {t('tableHeaders.project')}
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                {t('tableHeaders.madeAt')}
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                {t('tableHeaders.technologies')}
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                {t('tableHeaders.link')}
              </th>
            </tr>
          </thead>

          <tbody>
            {
              projectsArchive.map( project => (
                <ProjectTableItem key={project.name} {...project}/>
              ))
            }
          </tbody>

        </table>

      </div>
    </div>
  );
}