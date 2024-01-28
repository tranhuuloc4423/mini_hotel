const Input = ({ type, placeholder }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`outline-none border-b-2 border-silver bg-transparent p-2 text-xl text-white`}
        />
    )
}

export default Input
