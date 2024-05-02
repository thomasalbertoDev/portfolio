import techStack from './constant';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function TechStackView() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Tech Stack</h1>
      <hr className="my-3 border-gray-900" />
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-3 mt-4">
        {techStack.map((tech: any) => (
          <div
            key={tech.id}
            className="py-3 px-4 rounded-lg bg-gray-800 flex items-center gap-4"
          >
            <Icon icon={tech.icon} width="2rem" height="2rem" />
            <span className="font-bold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
