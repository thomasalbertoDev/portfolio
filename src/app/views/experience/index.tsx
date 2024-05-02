import Link from 'next/link';
import experience from './constant';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ExperienceView() {
  const pathname = usePathname();
  const isExperiencePage = pathname === '/experience';

  const numExperienceToShow = isExperiencePage ? experience.length : 2;

  return (
    <div id="experience" className="container">
      {isExperiencePage && (
        <Link
          href="/"
          className="flex items-center gap-3 mb-16 font-semibold text-xl"
        >
          <Icon icon="mdi:arrow-left-bold" width="2rem" height="2rem" />
          <span>Back</span>
        </Link>
      )}
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">Experience</h1>
        <Link
          href="/experience"
          className={`text-blue-500 font-semibold text-sm ${
            isExperiencePage ? 'hidden' : 'block'
          }`}
        >
          View All
        </Link>
      </div>
      <hr className="my-3 border-gray-900" />

      <div className="block mt-10">
        {experience
          .slice(0, numExperienceToShow)
          .map((exp: any, index: any) => (
            <div key={index}>
              <div className="md:flex block items-center justify-between">
                <h1 className="text-xl font-bold md:mb-0 mb-3">{exp.title}</h1>
                <span className="italic text-blue-500 font-semibold">
                  {exp.company}
                </span>
              </div>
              <span className="italic mt-5 text-sm">{exp.date}</span>
              <ul className="space-y-1 list-disc list-inside mt-6 marker:text-blue-500  leading-loose">
                {exp.data.map((item: any) => (
                  <li key={item.id}>{item.description}</li>
                ))}
              </ul>
              <hr className="my-8 border-gray-900" />
            </div>
          ))}
      </div>
    </div>
  );
}
