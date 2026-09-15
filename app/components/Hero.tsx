import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="bg-red-950 px-2 py-2 mx-auto">
      <section className="container items-center px-6 pb-12 mx-auto mt-20 lg:flex md:px-40">
          <div className="flex-1 space-y-4 sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold text-white">
                  Bird Union
              </h1>
              <p className="max-w-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0">
                Future Home of the Strike Shrike
              </p>
              <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                  <Link
                      to="/blog"
                      className="block px-6 py-2 text-center text-white bg-red-800 rounded-md"
                  >
                      Blog
                  </Link>
                  <Link
                      to="/faq"
                      className="block px-6 py-2 text-center text-gray-500 bg-white rounded-md"
                  >
                      FAQ
                  </Link>
              </div>
          </div>
          <div>
              <img
                  src="images/solidarity-01.png"
                  className="w-fit object-cover mx-auto mt-6 px-2 py-2 sm:w-10/12 lg:w-full"
              />
          </div>
      </section>
    </div>
  );
};

export default Hero;
