import { PlusCircleIcon } from '@heroicons/react/solid';

export default function Button({ ...props }) {
    return (
        <button
            className="inline-flex items-center mt-2 px-4 py-2 border border-transparent shadow-sm text-base max-w-[120px] font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            {...props}
        >
            Submit
            <PlusCircleIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
    );
}
