import { useState } from 'react'
import navbar from '../../utils/verticalbars_items'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [tabActive, setTabActive] = useState(0)
    const { sidenav } = useSelector((state) => state.app)
    return (
        <div className="flex flex-col gap-2">
            {navbar?.map((item, index) =>
                tabActive == index ? (
                    <Link
                        className="sidenav-item-active"
                        key={index}
                        to={item?.link}
                        onClick={() => setTabActive(index)}
                    >
                        <div>{item?.icon}</div>
                        <span className={sidenav ? '' : 'hidden'}>
                            {item?.name}
                        </span>
                    </Link>
                ) : (
                    <Link
                        className="sidenav-item"
                        key={index}
                        to={item?.link}
                        onClick={() => setTabActive(index)}
                    >
                        <div>{item?.icon}</div>
                        <span className={sidenav ? '' : 'hidden'}>
                            {item?.name}
                        </span>
                    </Link>
                )
            )}
        </div>
    )
}

export default Navbar
