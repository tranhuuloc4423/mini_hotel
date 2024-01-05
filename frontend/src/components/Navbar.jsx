import navbar from '../utils/verticalbars_items'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex flex-col gap-4">
            {navbar.map((item, index) => (
                <Link className="nav-item" key={index} to={item?.link}>
                    <div className="px-2">{item?.icon}</div>
                    {item?.name}
                </Link>
            ))}
        </div>
    )
}

export default Navbar
