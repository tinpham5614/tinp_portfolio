import { useForm } from "react-hook-form";
import {
  BookOpenIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import env from "react-dotenv";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(`🔔 Nice to meet you ${data.name}! Happy coding 😊!`);
    emailjs
      .sendForm(
        env.MY_SERVICE_ID,
        env.MY_TEMPLATE_ID,
        document.querySelector("form"),
        env.MY_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="relative text-center">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <BookOpenIcon className="mx-auto inline-block w-10 mt-4 text-gray-800" />
        <h1 className="sm:text-4xl font-medium title-font text-gray-800 mt-4 text-center">
          Contact
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
          Feel free to reach out to me if you have any questions or just want to
          say hi!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-8 w-1/2 text-left"
        >
          <div className="flex flex-col sm:flex-row -mx-3 mb-6">
            <div className="flex-1 mx-3">
              <label className="block mb-2 text-gray-800" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded border-2 border-gray-800"
                {...register("name")}
              />
            </div>
            <div className="flex-1 mx-3">
              <label className="block mb-2 text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded border-2 border-gray-800"
                required={true}
                type="email"
                {...register("email")}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row -mx-3 mb-6 text-center">
            <div className="flex-1 mx-3">
              <label className="block mb-2 text-gray-800" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded border-2 border-gray-800"
                {...register("message")}
              />
            </div>
          </div>
          <button className="block w-full px-4 py-3 mt-8 text-lg font-medium text-white bg-gray-800 rounded-lg">
            Send Message
          </button>
        </form>
        <footer className="text-gray-800 body-font">
          <div className="container px-5 mt-8 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-800 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4 right-0">
              © 2023 Tin Pham
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://github.com/tinpham5614"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800"
              >
                <ChatBubbleBottomCenterIcon className="w-5 h-5" />
              </a>
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
