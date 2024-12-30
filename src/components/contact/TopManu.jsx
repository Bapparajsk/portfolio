const manuKeys = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

export const TopManu = () => {
    return (
        <div className="w-auto h-full flex items-center justify-center">
            {manuKeys.map((key) => (
                <div key={key} className="h-full flex items-center justify-center px-2 cursor-pointer">
                    <span className="hover:text-default-400 duration-500">{key}</span> 
                </div>
            ))}
        </div>
    )
};