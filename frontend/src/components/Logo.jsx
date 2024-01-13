import logo from '../assets/images/logo_dark.png'

const Logo = () => {
    return (
        <div className="flex flex-col justify-center items-center mb-4">
            <div className="text-[#1b6ff3]">
                <img src={logo} className="w-[150px]" />
            </div>
            <div className="text-silver text-xl">👋 Hello roku</div>
        </div>
    )
}

export default Logo
