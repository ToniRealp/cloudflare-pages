export default function Textarea({
    name,
    placeholder,
    handleChange,
    ...props
}) {
    return (
        <div className="flex flex-col h-full border border-gray-300 rounded-md px-3 py-2 shadow-sm mt-3">
            <textarea
                name={name}
                rows={4}
                id={name}
                maxLength="250"
                className="w-full h-full border-0 p-0 text-base text-gray-500 placeholder-gray-400 focus:outline-none resize-none"
                placeholder={placeholder}
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
                {...props}
            />
        </div>
    );
}
