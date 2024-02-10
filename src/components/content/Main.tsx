import { About, Experience, Projects, SectionContainer } from ".."

export const Main = () => {
  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">

      <SectionContainer sectionName="about">
        <About/>
      </SectionContainer>

      <SectionContainer sectionName="experience">
        <Experience/>
      </SectionContainer>

      <SectionContainer sectionName="projects">
        <Projects/>
      </SectionContainer>

    </main>
  )
}
