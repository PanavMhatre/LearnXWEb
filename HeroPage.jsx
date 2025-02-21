import Navbar from "../components/Navbar";
import HeroImage from "../assets/pexels-anna-nekrashevich-6801684.jpg";
import Footer from "../components/Footer";

export default function HeroPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-primary-content">
              Education Tool for Intellectuals
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From AP courses to college advice, students around the world use
              LearnX to simplify their learning journey.
            </p>
            <a
              href="/home"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-600 duration-300 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
              </svg>
            </a>
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-primary border border-primary rounded-lg hover:bg-gray-100 duration-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-primary-700 dark:focus:ring-gray-800"
            >
              Sign Up
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={HeroImage} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
