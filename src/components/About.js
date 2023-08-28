import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section id="about" className="relative text-center">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
          <UserCircleIcon className="mx-auto inline-block w-10 mb-2 mr-3 text-gray-800" />
          I'm Tin,
          <br className="hidden lg:inline-block" /> a software developer.
        </h1>
        <div className="flex justify-center">
        <iframe
          src="https://giphy.com/embed/qgQUggAC3Pfv687qPC"
          width="480"
          height="360"
          className="mx-auto mb-4 rounded-lg shadow-lg position-relative"
          title="developer"
        ></iframe>
        </div>
        <p className="mb-4">
          <a
            href="https://giphy.com/gifs/dommespace-domme-space-programador-qgQUggAC3Pfv687qPC"
          >
            via GIPHY
          </a>
        </p>
        <p className="mb-8 sm:text-lg text-gray-800 leading-relaxed text-center max-w-3xl mx-auto">
          Currently pursuing a Bachelor's degree in Application Development with
          Android and web development. Seeking an internship opportunity to
          learn and experience the real world of technology.
        </p>
        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/1FA43erkaqD8FB_Vd3nbDjUgnd9MpwRjq/view"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg"
          >
            My Resume
          </a>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
    </section>
  );
}
