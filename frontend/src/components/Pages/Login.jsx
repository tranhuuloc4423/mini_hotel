import icons from '../../utils/icons'
import Register from './Register'
import Input from '../Input'

// const { RiGoogleFill, RiFacebookFill, RiGithubFill } = icons
const Login = () => {
    return (
        <Register type={'login'}>
            <Input type={'email'} placeholder={'Email'} />
            <Input type={'password'} placeholder={'Password'} />
            <span className="text-silver cursor-pointer mb-8 hover:text-white transition-all">Forgot password?</span>

            {/* <div className="flex mx-auto gap-4">
                <div className="cursor-pointer rounded-full hover:bg-[#ffffff21] p-2 transition-all">
                    <RiGoogleFill size={30} color="white" />
                </div>
                <div className="cursor-pointer rounded-full hover:bg-[#ffffff21] p-2 transition-all">
                    <RiFacebookFill size={30} color="white" />
                </div>
                <div className="cursor-pointer rounded-full hover:bg-[#ffffff21] p-2 transition-all">
                    <RiGithubFill size={30} color="white" />
                </div>
            </div> */}
        </Register>
    )
}

export default Login
