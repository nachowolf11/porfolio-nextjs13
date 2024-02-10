'use client'

import useHash from "@/app/hooks/useHash";

interface Props {
    navTo: string;
    text: string;
}

export const NavLink = ({navTo, text}:Props) => {
  const hash = useHash();
  
  return (
    <li>
        <a className={`group flex items-center py-3 ${hash === navTo.replace(/#/g, '') ? 'active' : ''}`} href={navTo}>
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                { text }
            </span>
        </a>
    </li>
  )
}
