// Case Study Images Database
// Add images to public/work/{project-folder}/ and reference them here

export const caseStudyImages = {
  'integrated-member-platform': {
    title: 'Integrated Member Platform',
    meta: 'CRM + Payments + Engagement',
    summary: 'Unified member experience with role-based access, subscription billing, and automated outreach.',
    images: []
  },
  'operational-api-layer': {
    title: 'Operational API Layer',
    meta: 'Automation + Reporting',
    summary: 'Bridged finance, logistics, and analytics stacks with resilient event-driven pipelines and observability.',
    images: []
  },
  'productized-client-portal': {
    title: 'Productized Client Portal',
    meta: 'Web App + AI Assist',
    summary: 'Client-facing portal with guided workflows, secure document exchange, and AI-supported support flows.',
    images: []
  }
}

export const getCaseStudy = (slug) => caseStudyImages[slug] || null

export const getAllCaseStudies = () => Object.values(caseStudyImages)
