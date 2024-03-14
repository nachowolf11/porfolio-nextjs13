'use client'

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { useUIStore } from "@/store/ui/ui-store";
import { useEffect, useState } from "react";
import { TitleSkeleton } from "..";

interface Props {
    children: React.ReactNode;
    sectionTitle: React.ReactNode;
    sectionName: string;
}

export const SectionContainer = ({ children, sectionTitle, sectionName }: Props) => {
    const setActiveSection = useUIStore(state => state.setActiveSection);

    const onChange = (isIntersecting: boolean, entries: IntersectionObserverEntry) => {
        if (isIntersecting) {
            setActiveSection(sectionName);
        };
    }

    const { ref } = useIntersectionObserver({
        threshold: 0.7,
        onChange: onChange,
        rootMargin: '96px'
    });

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true);
    }, [])
    


    return (
        <div ref={ref} id={sectionName}
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                { loaded ? sectionTitle : <TitleSkeleton/>}
            </div>
            {children}
        </div>
    )
}
