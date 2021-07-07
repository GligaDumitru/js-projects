import { ExclamationIcon } from "@heroicons/react/outline";

interface ItemProps {
    title?:string;
    description?:string;
}

const ProjectItem = ({title = 'Title Here', description ='Decstiption here'}:ItemProps) => {
  return (
    <div className="inline-block align-bottom  bg-gradient-to-r from-yellow-250 to-yellow-300 hover:from-yellow-300 hover:to-yellow-250  rounded-lg text-left overflow-hidden shadow-xl transition duration-700 ease-in-out sm:align-middle sm:max-w-lg sm:w-full h-40">
      <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationIcon
              className="h-6 w-6 text-yellow-900"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
             {title}
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
               {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
