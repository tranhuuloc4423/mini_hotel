const Table = ({ children, title }) => {
    return (
        <div className="bg-white border-2 border-silver rounded-md max-h-[400px] p-4">
            <div className="text-2xl p-4 border-b-2 border-silver">{title}</div>
            <div>{children}</div>
        </div>
    )
}

export default Table
