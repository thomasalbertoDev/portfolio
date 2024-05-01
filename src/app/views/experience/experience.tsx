import Link from 'next/link';
import experience from './constant';
import { Icon } from '@iconify/react/dist/iconify.js';
import { usePathname } from 'next/navigation';

export default function ExperienceView() {
  const pathname = usePathname();
  const isExperiencePage = pathname === '/experience';

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
        {/* Cyber security */}
        <div id="cybersecurity">
          <div className="md:flex flex-row items-center justify-between">
            <h1 className="text-xl font-semibold md:mb-0 mb-2">
              Cybersecurity | Studi Independen MSIB Batch 6
            </h1>
            <span className="italic text-blue-500 font-semibold">
              Celerates School
            </span>
          </div>
          <span className="italic mt-5 text-sm">February 2024 - Now</span>

          <ul className="space-y-1 list-disc list-inside mt-6 marker:text-blue-500 md:ml-6 text-justify leading-loose">
            {experience[0].data.map(
              (exp: { id: number; description: string }) => (
                <li key={exp.id}>{exp.description}</li>
              )
            )}
          </ul>
        </div>

        <hr className="my-8 border-gray-900" />

        {/* Web Developer */}
        <div id="freelance">
          <div className="md:flex flex-row items-center justify-between">
            <h1 className="text-xl font-semibold md:mb-0 mb-2">
              Web Developer
            </h1>
            <span className="italic text-blue-500 font-semibold">
              Freelance
            </span>
          </div>
          <span className="italic mt-5 text-sm">November 2023 - Now</span>

          <ul className="space-y-1 list-disc list-inside mt-6 marker:text-blue-500 md:ml-6 text-justify leading-loose">
            {experience[1]?.data.map(
              (exp: { id: number; description: string }) => (
                <li key={exp.id}>{exp.description}</li>
              )
            )}
          </ul>
        </div>

        <hr className="my-8 border-gray-900" />

        {/* UI / UX Digipages */}
        <div id="uiuxDigipages">
          <div className="md:flex flex-row items-center justify-between">
            <h1 className="text-xl font-semibold md:mb-0 mb-2">
              UI / UX Designer
            </h1>
            <span className="italic text-blue-500 font-semibold">
              Digipages
            </span>
          </div>
          <span className="italic mt-5 text-sm">
            September 2022 - January 2024
          </span>

          <ul className="space-y-1 list-disc list-inside mt-6 marker:text-blue-500 md:ml-6 text-justify leading-loose">
            {experience[2]?.data.map(
              (exp: { id: number; description: string }) => (
                <li key={exp.id}>{exp.description}</li>
              )
            )}
          </ul>
        </div>

        <hr className="my-8 border-gray-900" />

        {/* UI / UX Niagahoster */}
        <div id="uiuxNiagahoster">
          <div className="md:flex flex-row items-center justify-between">
            <h1 className="text-xl font-semibold md:mb-0 mb-2">
              Project-Based Virtual Intern : UI / UX Designer Niagahoster x
              Rakamin Academy
            </h1>
            <span className="italic text-blue-500 font-semibold">
              Niagahoster
            </span>
          </div>
          <span className="italic mt-5 text-sm">
            August 2023 - September 2023
          </span>

          <ul className="space-y-1 list-disc list-inside mt-6 marker:text-blue-500 md:ml-6 text-justify leading-loose">
            {experience[3]?.data.map(
              (exp: { id: number; description: string }) => (
                <li key={exp.id}>{exp.description}</li>
              )
            )}
          </ul>
        </div>

        <hr className="my-8 border-gray-900" />

        {/* Dicoding For university */}
        <div id="dicodingUniversity">
          <div className="md:flex flex-row items-center justify-between">
            <h1 className="text-xl font-semibold md:mb-0 mb-2">
              Dicoding For University
            </h1>
            <span className="italic text-blue-500 font-semibold">Dicoding</span>
          </div>
          <span className="italic mt-5 text-sm">May 2023 - August 2023</span>

          <ul className="space-y-1 list-disc list-inside mt-6 marker:text-blue-500 md:ml-6 text-justify leading-loose">
            {experience[4]?.data.map(
              (exp: { id: number; description: string }) => (
                <li key={exp.id}>{exp.description}</li>
              )
            )}
          </ul>
        </div>

        <hr className="my-8 border-gray-900" />

        {/* Frontend Developer Core Initiative Studio */}
        <div id="frontendCoreInitiativeStudio">
          <div className="md:flex flex-row items-center justify-between">
            <h1 className="text-xl font-semibold md:mb-0 mb-2">
              Project-Based Virtual Intern : Frontend Developer Core Initiative
              Studio x Rakamin Academy
            </h1>
            <span className="italic text-blue-500 font-semibold">
              Core Initiative Studio
            </span>
          </div>
          <span className="italic mt-5 text-sm">April 2023 - May 2023</span>

          <ul className="space-y-1 list-disc list-inside mt-6 marker:text-blue-500 md:ml-6 text-justify leading-loose">
            {experience[5]?.data.map(
              (exp: { id: number; description: string }) => (
                <li key={exp.id}>{exp.description}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
