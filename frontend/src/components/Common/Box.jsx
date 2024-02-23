const Box = ({ children, title }) => {
    return (
        <div className="bg-white shadow-md rounded-md max-h-[400px] p-4 overflow-hidden flex flex-col justify-between">
            <div className="text-2xl border-b-2 border-silver text-left md:text-center">
                {title}
            </div>
            <div className="h-4/5">{children}</div>
        </div>
    )
}

export default Box
