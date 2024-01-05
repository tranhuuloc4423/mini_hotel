import Button from '../Button'
import icons from '../../utils/icons'

const { RiGoogleFill, RiFacebookFill, RiGithubFill } = icons
const Login = () => {
    return (
        <div className="bg-[#332d2d] p-[3rem] flex flex-col gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg">
            <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">LOGIN</span>
                <span className="text-silver">Please enter your email and password!</span>
            </div>
            <input
                type="email"
                placeholder="Email"
                className="outline-none border-b-2 border-silver bg-transparent p-2 text-xl text-white"
            />
            <input
                type="password"
                placeholder="Password"
                className="outline-none border-b-2 border-silver bg-transparent p-2 text-xl text-white"
            />
            <span className="text-silver cursor-pointer mb-8 hover:text-white transition-all">Forgot password?</span>
            <div className="flex justify-center">
                <Button text={'LOGIN'} fontSize={'14px'} fontWeight="600" />
            </div>
            <div className="flex mx-auto gap-4">
                <div className="cursor-pointer rounded-full hover:bg-[#ffffff21] p-2 transition-all">
                    <RiGoogleFill size={30} color="white" />
                </div>
                <div className="cursor-pointer rounded-full hover:bg-[#ffffff21] p-2 transition-all">
                    <RiFacebookFill size={30} color="white" />
                </div>
                <div className="cursor-pointer rounded-full hover:bg-[#ffffff21] p-2 transition-all">
                    <RiGithubFill size={30} color="white" />
                </div>
            </div>

            <div className="flex justify-center text-white">
                {`Don't have an account?`} <span className="text-silver ml-2 font-bold">{' Register'}</span>
            </div>
        </div>
    )
}

export default Login
