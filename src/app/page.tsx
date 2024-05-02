'use client';

import Link from 'next/link';
import Layouts from './layouts/layouts';
import ProjectsView from './views/projects';
import TechStackView from './views/techstack';
import ExperienceView from './views/experience';

export default function Home() {
  return (
    <div className="container pb-24">
      <Layouts>
        <section id="hero">
          <h1 className="font-bold md:text-4xl text-3xl mb-3">
            Hey, I&apos;m Thomas Alberto!
          </h1>
          <span className="text-lg italic ">Welcome to my Web Portfolio.</span>
          <p className="text-justify mt-12 leading-8">
            I am a student of the D3 Information Systems study program at Bina
            Sarana Informatika University. My main interests lie in{' '}
            <strong className="text-blue-500">Web Programming</strong> and{' '}
            <strong className="text-blue-500">Cybersecurity</strong> . I have
            skills in creating attractive user interfaces using HTML, CSS,
            JavaScript, React JS, and Tailwind CSS. In addition, I am capable of
            developing RESTful APIs using Express JS and Node JS as well as
            managing databases using MySQL and PostgreSQL. My capabilities also
            include operating Linux Operating Systems. I also have high
            motivation, strong creativity, adaptability, responsibility, and
            enthusiasm to face new challenges related to Web Programming and
            Cybersecurity.
          </p>
          <button className="bg-blue-600 hover:bg-blue-800 transition-all py-3 px-7 rounded-full text-white mt-10 font-semibold">
            <Link href="https://drive.google.com/file/d/1SWFrvxr75S9OtIaRwMxrl_jiDGkN3sG-/view?usp=sharing">
              Download Resume
            </Link>
          </button>
        </section>

        <section id="techstack" className="mt-24">
          <TechStackView />
        </section>

        <section id="experience" className="experience mt-24">
          <ExperienceView />
        </section>

        <section id="projects" className="projects mt-24">
          <ProjectsView />
        </section>
      </Layouts>
    </div>
  );
}
