export interface Experience {
    date: string;
    url: string;
    role: string;
    company: string;
    previousRole: Array<string>;
    description: string;
    technologies: Array<string>;
    workProjects: Array<WorkProjects>;
}

export interface WorkProjects {
    name: string;
    url: string;
}

export interface Project {
    name:string;
    url: string;
    description: string;
    technologies: Array<string>;
    imageUrl: string;
}