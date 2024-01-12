import logo from '../assets/images/logo_dark.png'

const Logo = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-[#1b6ff3]">
                <img src={logo} className="w-[150px]" />
            </div>
            <div className="text-silver text-2xl">👋 hello roku</div>
        </div>
    )
}

export default Logo
