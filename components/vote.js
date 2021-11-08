import { ArrowCircleUpIcon, ArrowCircleDownIcon } from '@heroicons/react/solid';
import { classNames } from '../utils/styles';

export default function Vote({
    upvotes,
    handleUpVote,
    handleDownVote,
    classname,
}) {
    return (
        <span
            className={classNames(
                ' flex items-center justify-center gap-2 ',
                classname
            )}
        >
            <button
                type="button"
                className="flex items-center justify-center bg-white text-sm font-medium text-gray-500 active:scale-95"
                onClick={handleUpVote}
            >
                <ArrowCircleUpIcon
                    className="h-5 w-5 hover:text-indigo-500"
                    aria-hidden="true"
                />
            </button>
            <p className="text-center text-indigo-500 font-medium">{upvotes}</p>
            <button
                type="button"
                className="flex items-center justify-center bg-white text-sm font-medium text-gray-500 active:scale-95"
                onClick={handleDownVote}
            >
                <ArrowCircleDownIcon
                    className="h-5 w-5 hover:text-indigo-500"
                    aria-hidden="true"
                />
            </button>
        </span>
    );
}
