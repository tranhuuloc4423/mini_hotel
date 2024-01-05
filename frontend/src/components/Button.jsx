const Button = ({ text, fontWeight = '500', fontSize = '16px', bg = 'transparent', color = '#fff' }) => {
    console.log(color)
    return (
        <div
            className={`outline-none border-x-2 border-y-2 border-[#fbfbfb] px-12 py-[10px] rounded-md text-[#fff] bg-[${bg}] text-[${fontSize}] font-[${fontWeight}] inline-block`}
        >
            {text}
        </div>
    )
}

export default Button
