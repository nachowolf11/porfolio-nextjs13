import { AboutSection, ExperienceSection, ProjectsSection, SectionContainer, SectionTitle } from ".."

export const Main = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">

      <SectionContainer sectionName="about" sectionTitle={ <SectionTitle sectionName="about"/> }>
        <AboutSection/>
      </SectionContainer>

      <SectionContainer sectionName="experience" sectionTitle={ <SectionTitle sectionName="experience"/> }>
        <ExperienceSection/>
      </SectionContainer>

      <SectionContainer sectionName="projects" sectionTitle={ <SectionTitle sectionName="projects"/> }>
        <ProjectsSection/>
      </SectionContainer>

    </main>
  )
}
