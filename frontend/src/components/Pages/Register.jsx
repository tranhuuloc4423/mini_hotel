import { Link } from 'react-router-dom'
import Button from '../Button'

const Register = ({ children, type }) => {
    return (
        <div className="bg-[#332d2d] p-[3rem] flex flex-col gap-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg">
            <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white">{type == 'login' ? 'LOGIN' : 'SIGNUP'}</span>
                <span className="text-silver">
                    {type == 'login' ? 'Please enter your account!' : 'Please enter your email and password!'}
                </span>
            </div>
            {children}
            <div className="flex justify-center">
                <Button
                    text={type == 'login' ? 'Login' : 'Signup'}
                    fontSize={'14px'}
                    fontWeight="600"
                    addClass={'hover:bg-[#ffffff2b] transition-all cursor-pointer'}
                />
            </div>
            <div className="flex justify-center text-white">
                {type == 'login' ? `Don't have an account?` : `Already have an account?`}{' '}
                <span className="text-silver ml-2 font-bold cursor-pointer hover:text-white transition-all">
                    {type == 'login' ? <Link to={'/signup'}>Signup</Link> : <Link to={'/login'}>Login</Link>}
                </span>
            </div>
        </div>
    )
}

export default Register
