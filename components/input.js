export default function Input({ placeholder, handleChange, ...props }) {
    return (
        <input
            className="text-xl font-semibold text-gray-900 text-gray-900 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none"
            placeholder={placeholder}
            type="text"
            maxLength="65"
            onChange={(e) => {
                handleChange(e.target.value);
            }}
            {...props}
        />
    );
}
