import { UserCircleIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

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
          I'm a recent graduate with a Bachelor's degree in Application Development, specializing in web development.
          I am currently seeking an internship or entry-level opportunity to gain practical experience and further my skills in the technology field.
        </p>
        <div className="flex justify-center">
          <a
            href="https://drive.google.com/file/d/1prNddjWbb2Xi1V8FhBJ-2HVYG8CkjCW2/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg hover:underline"
          >
            My Resume <ArrowTopRightOnSquareIcon className="ml-2 w-3 h-3 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
