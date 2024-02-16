import { Project } from '@/models/models';
import { useTranslations } from 'next-intl'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md';

export const ProjectTableItem = ({ year, name, url, technologies, company }: Project) => {
    const t = useTranslations('projects');
    return (
        <tr className='border-b border-slate-300/10 last:border-none'>
            <td className='py-4 pr-4 align-top text-sm'>
                <div className='translate-y-px'>{year}</div>
            </td>
            <td className='py-4 pr-4 align-top font-semibold leading-snug text-slate-200'>
                <div>
                    <div className='block sm:hidden'>
                        <a href={url} className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 sm:hidden group/link text-base'>
                            <span>
                                {t(name)}
                                <span className="inline-block">
                                    <MdArrowOutward className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className='hidden sm:block'>{t(name)}</div>
                </div>
            </td>
            <td className='hidden py-4 pr-4 align-top text-sm lg:table-cell'>
                <div className='translate-y-px whitespace-nowrap'>
                    {company}
                </div>
            </td>
            <td className='hidden py-4 pr-4 align-top lg:table-cell'>
                <ul className='flex -translate-y-1.5 flex-wrap'>
                    {
                        technologies.map(technology => (
                            <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                    {technology}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </td>
            <td className='hidden py-4 align-top sm:table-cell'>
                {
                    !!url &&
                    <a href={url} className='inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 group/link'>
                        <span>
                            <span className="inline-block">
                                {url.replace('https://', '')}
                                <MdArrowOutward className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                        </span>
                    </a>
                }
            </td>

        </tr>
    )
}
