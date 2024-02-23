import { useState } from 'react'
import navbar from '../../utils/verticalbars_items'
import { Link } from 'react-router-dom'

const Navbar = ({ openSidenav }) => {
    const [tabActive, setTabActive] = useState(0)
    return (
        <div className="flex flex-col gap-2">
            {navbar.map((item, index) =>
                tabActive == index ? (
                    <Link
                        className="sidenav-item-active"
                        key={index}
                        to={item?.link}
                        onClick={() => setTabActive(index)}
                    >
                        <div>{item?.icon}</div>
                        {openSidenav ? item?.name : ''}
                    </Link>
                ) : (
                    <Link
                        className="sidenav-item"
                        key={index}
                        to={item?.link}
                        onClick={() => setTabActive(index)}
                    >
                        <div>{item?.icon}</div>
                        {openSidenav ? item?.name : ''}
                    </Link>
                )
            )}
        </div>
    )
}

export default Navbar
