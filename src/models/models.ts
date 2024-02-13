export interface Experience {
    date: string;
    url: string;
    role: string;
    company: string;
    previousRole: Array<string>;
    description: string;
    technologies: Array<string>;
    projects: Array<Project>;
}

export interface Project {
    name: string;
    url: string;
}