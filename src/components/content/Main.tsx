import { AboutSection, ExperienceSection, ProjectsSection, SectionContainer } from ".."

export const Main = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">

      <SectionContainer sectionName="about">
        <AboutSection/>
      </SectionContainer>

      <SectionContainer sectionName="experience">
        <ExperienceSection/>
      </SectionContainer>

      <SectionContainer sectionName="projects">
        <ProjectsSection/>
      </SectionContainer>

    </main>
  )
}
