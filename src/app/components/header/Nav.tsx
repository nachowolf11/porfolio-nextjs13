import { useTranslations } from "next-intl"
import { NavLink } from ".."

const sections = [
    {
        navTo: '#about',
        text: 'about'
    },
    {
        navTo: '#experience',
        text: 'experience'
    },    {
        navTo: '#projects',
        text: 'projects'
    }
]

export const Nav = () => {
    const t = useTranslations('header.sections');
  return (
    <nav className="nav hidden lg:block">
        <ul className="mt-16 w-max">
            {
                sections.map(section => (
                    <NavLink key={section.text} text={t(section.text)} navTo={section.navTo}/>
                ))
            }
        </ul>
    </nav>
  )
}
