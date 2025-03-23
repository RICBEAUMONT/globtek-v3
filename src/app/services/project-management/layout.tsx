import { Metadata } from 'next';
import ProjectManagementPage from './page';

export const metadata: Metadata = {
  title: 'Project Management Services | Globtek Engineering',
  description: 'Expert project management services for maritime projects, ensuring efficient planning, coordination, and execution of all aspects of maritime initiatives.',
  keywords: 'project management, maritime projects, project planning, resource management, risk management, quality control, maritime engineering, project coordination',
  openGraph: {
    title: 'Project Management Services | Globtek Engineering',
    description: 'Expert project management services for maritime projects, ensuring efficient planning, coordination, and execution of all aspects of maritime initiatives.',
    images: [
      {
        url: '/images/services/project-management/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Project Management Services at Globtek Engineering'
      }
    ]
  }
};

export default function ProjectManagementLayout() {
  return <ProjectManagementPage />;
} 