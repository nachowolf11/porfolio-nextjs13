import { Experience } from "@/models/models";
import { ExperienceItem } from "..";

const experiences: Array<Experience> = [
  {
    date: 'thalamusDev.date',
    url: 'https://thalamus.global/',
    role: 'thalamusDev.role',
    company: 'Thalamus SA',
    previousRole: [],
    description: 'thalamusDev.description',
    technologies: [ 'Angular', 'React', 'JavaScript', 'TypeScript', 'PHP', 'Laravel', 'HTML & CSS', 'Codeigniter', 'jQuery']
  }
];

export const ExperienceSection = () => {
  return (
    <div>
      <ol className="group/list">
        <li className="mb-12">
          {
            experiences.map( experience => (
              <ExperienceItem key={experience.role} {...experience}/>
            ))
          }
        </li>
      </ol>
    </div>
  )
}
