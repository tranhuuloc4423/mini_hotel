import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FaRegCircleUser } from 'react-icons/fa6'
import { MdOutlineBedroomParent } from 'react-icons/md'

const FirstRow = () => {
    const data = [
        {
            title: 'Monthly Revenue',
            content: '4444',
            icon: <AiOutlineDollarCircle size={50} color="#ffffff" />,
            bg: '#d63031'
        },
        {
            title: 'Total Room',
            content: '4444',
            icon: <FaRegCircleUser size={50} color="#ffffff" />,
            bg: '#0984e3'
        },
        {
            title: 'Total Customer',
            content: '4444',
            icon: <MdOutlineBedroomParent size={50} color="#ffffff" />,
            bg: '#00b894'
        },
        {
            title: 'Total Customer',
            content: '4444',
            icon: <AiOutlineDollarCircle size={50} color="#ffffff" />,
            bg: '#e17055'
        }
    ]
    return (
        <div className="flex justify-around gap-4">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between rounded-xl shadow-lg p-3 w-1/4"
                    style={{ backgroundColor: item.bg }}
                >
                    <div className="flex flex-col">
                        <div className="text-white text-xl font-bold">
                            {item.title}
                        </div>
                        <div className="text-white text-xl">
                            {item.content}
                        </div>
                    </div>
                    <div className="flex justify-center items-center  w-[50px] h-[50px] rounded-md">
                        {item.icon}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FirstRow