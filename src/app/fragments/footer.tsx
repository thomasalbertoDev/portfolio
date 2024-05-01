import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black mt-24">
      <hr className="border border-gray-900" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 pb-24 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Thomas Alberto
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-[9rem] sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Page
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className=" hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/experience" className=" hover:text-blue-500">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className=" hover:text-blue-500">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:text-blue-500"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://www.instagram.com/thomasalberto___/"
                    className="hover:text-blue-500"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://github.com/xRiot45"
                    className="hover:text-blue-500"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
