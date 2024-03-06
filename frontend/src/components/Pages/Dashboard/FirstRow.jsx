import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FaRegCircleUser } from 'react-icons/fa6'
import { MdOutlineBedroomParent } from 'react-icons/md'

const FirstRow = () => {
    const data = [
        {
            title: 'Monthly Revenue',
            content: '4444',
            icon: <AiOutlineDollarCircle size={30} color="white" />,
            colorIcon: 'red_1'
        },
        {
            title: 'Total Room',
            content: '4444',
            icon: <FaRegCircleUser size={30} color="white" />,
            colorIcon: 'red_1'
        },
        {
            title: 'Total Customer',
            content: '4444',
            icon: <MdOutlineBedroomParent size={30} color="white" />,
            colorIcon: 'red_1'
        },
        {
            title: 'Total Customer',
            content: '4444',
            icon: <AiOutlineDollarCircle size={30} color="white" />,
            colorIcon: 'red_1'
        }
    ]
    return (
        <div className="flex justify-around gap-4">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between rounded-xl bg-white shadow-lg p-3 w-1/4"
                >
                    <div>
                        <div className="font-bold text-black_1 text-md">
                            {item.title}
                        </div>
                        <div className="text-black_2 font-bold text-xl">
                            {item.content}
                        </div>
                    </div>
                    <div
                        className={`flex justify-center items-center  w-[50px] h-[50px] rounded-md bg-${item.colorIcon}`}
                    >
                        {item.icon}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FirstRow
