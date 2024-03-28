import { MetadataRoute } from "next";

export default async function sitemap({}): Promise<MetadataRoute.Sitemap> {
    
    return [
        {
            url: `${process.env.BASE_URL}/es/dev`
        },
        {
            url: `${process.env.BASE_URL}/en/dev`
        },
        {
            url: `${process.env.BASE_URL}/es/archive`
        },
        {
            url: `${process.env.BASE_URL}/en/archive`
        },
        {
            url: `${process.env.BASE_URL}/resumen.pdf`
        },
        {
            url: `${process.env.BASE_URL}/resume.pdf`
        },
    ]
}