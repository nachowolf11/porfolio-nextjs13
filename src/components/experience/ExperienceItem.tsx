import { Experience } from "@/models/models";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export const ExperienceItem = ({date, url, role, company, previousRole, description, technologies, projects}:Experience) => {
    const t = useTranslations('experience');
  return (
    <li className="mb-12">
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
            </div>
            
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {t(date)}
            </header>

            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                        <Link href={url} target="_blank">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                                {t(role) + ' · '}
                                <span className="inline-block">
                                    {company}
                                    <MdArrowOutward className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"/>
                                </span>
                            </span>
                        </Link>
                    </div>
                    { 
                        !!previousRole &&
                        previousRole.map( role => (
                            <div className="text-slate-500" id={role}>
                                {role}
                            </div>
                        ))
                    }
                </h3>

                <p className="mt-2 text-sm leading-normal">
                    {t(description)}
                </p>
                
                {
                    !!projects &&
                    <ul className="mt-2 flex flex-wrap">
                        {
                            projects.map( item => (
                                <li className="mr-4" key={item.name}>
                                    <a target="_blank" href={item.url} className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" rel="noreferrer noopener">
                                        <FaLink className="mr-1 h-3 w-3"/>
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                }

                <ul className="mt-2 flex flex-wrap">
                    {
                        technologies.map( technology => (
                            <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    {technology}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </li>

  )
}
