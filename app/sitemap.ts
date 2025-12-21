import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dreamhomeinfrastructures.com'
  
  // Main pages
  const mainPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // Service pages - Building Construction
  const buildingServices = [
    { url: `${baseUrl}/services/building-construction`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/building-construction/residential`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/building-construction/commercial`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/building-construction/villa`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // Service pages - Interior Design
  const interiorServices = [
    { url: `${baseUrl}/services/interior-design`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/interior-design/2d-design`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/interior-design/3d-design`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/interior-design/3d-walkthrough`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  return [...mainPages, ...buildingServices, ...interiorServices]
}
