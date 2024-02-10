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
        onChange: onChange
    });


  return (
    <div ref={ref} id={sectionName}>
        {children}
    </div>
  )
}
