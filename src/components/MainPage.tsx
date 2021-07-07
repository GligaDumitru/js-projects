import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <div className="">
        <div className="max-w-7xl  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
          <h2 className="text-3xl font-extrabold tracking-tight text-yellow-300 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-yellow-400">Start your journey!</span>
          </h2>
          <div className="mt-8 w-full">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="projects"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-250 hover:bg-yellow-300"
              >
                Get started
              </Link>
            </div>
          </div>
          <div className="my-10">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://hackr.io/blog/javascript-projects/thumbnail/large"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
