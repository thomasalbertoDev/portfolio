'use client';

import Link from 'next/link';
import projects from '@/app/views/projects/constant';
import { Icon } from '@iconify/react/dist/iconify.js';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ProjectsView() {
  const pathname = usePathname();
  const isProjectsPage = pathname === '/projects';

  const [numProjectsToShow, setNumProjectsToShow] = useState(
    isProjectsPage ? projects.length : 4
  );

  return (
    <div id="project" className="container">
      {isProjectsPage && (
        <Link
          href="/"
          className="flex items-center gap-3 mb-16 font-semibold text-xl"
        >
          <Icon icon="mdi:arrow-left-bold" width="2rem" height="2rem" />
          <span>Back</span>
        </Link>
      )}
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Projects</h1>
        <Link
          href="/projects"
          className={`text-blue-500 font-semibold text-sm ${
            isProjectsPage ? 'hidden' : 'block'
          }`}
        >
          View All
        </Link>
      </div>
      <hr className="my-3 border-gray-900" />

      {/* Data nya */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {projects.slice(0, numProjectsToShow).map((project: any) => (
          <div key={project.id}>
            <div className="rounded-xl bg-gray-900 p-6 h-auto">
              <div className="md:flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">{project.title}</h1>
                <div className="flex items-center gap-2 md:mt-0 mt-3">
                  <Link
                    className="pointer-events-none lg:pointer-events-auto lg:p-0"
                    href={project.urlGithub}
                    rel="noopener noreferrer"
                  >
                    <Icon icon="mdi:github" width="1.8rem" height="1.8rem" />
                  </Link>

                  <Link
                    className="pointer-events-none lg:pointer-events-auto lg:p-0"
                    href={project.urlLinkedin}
                    rel="noopener noreferrer"
                  >
                    <Icon icon="mdi:linkedin" width="1.8rem" height="1.8rem" />
                  </Link>
                </div>
              </div>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mt-3">
                {project.techStack.map((tech: string) => (
                  <div
                    className="bg-blue-500 text-white py-1 px-3 rounded-md text-center"
                    key={tech}
                  >
                    <p className="text-sm font-semibold">{tech}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-justify">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
