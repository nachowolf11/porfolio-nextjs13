'use client'

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useUIStore } from "@/store/ui/ui-store";

interface Props {
    children: React.ReactNode;
    sectionName: string;
}

export const SectionContainer = ({children, sectionName}:Props) => {
    const setActiveSection = useUIStore(state => state.setActiveSection);

    const onChange =  (isIntersecting:boolean, entries:IntersectionObserverEntry) => {
        if(isIntersecting){
            setActiveSection(sectionName);
        };
    }

    const { ref } = useIntersectionObserver({
        threshold: 0.5,
        onChange: onChange,
        rootMargin:'96px'
    });


  return (
    <div ref={ref} id={sectionName}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    {sectionName}
                </h2>
            </div>
            {children}
    </div>
  )
}
