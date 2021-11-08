import { TrashIcon } from '@heroicons/react/solid';
import { classNames } from '../utils/styles';
export function DeleteButton({ classnames, handleClick }) {
    return (
        <button
            className={classNames(
                'flex items-center justify-center bg-white text-sm font-medium text-gray-500 active:scale-95',
                classnames
            )}
            type="button"
            onClick={handleClick}
        >
            <TrashIcon
                className="h-5 w-5 hover:text-red-500"
                aria-hidden="true"
            />
        </button>
    );
}
