import DatePicker from '../../Common/DatePicker'
import icons from '../../../utils/icons'
import Button from '../../Common/Button'
import IndexBody from './IndexBody'
import { useState } from 'react'

const { TbInfoSquare, BsSave } = icons
const IndexEW = () => {
    const [date, setDate] = useState('')
    return (
        <div className="main-container">
            <div className="main-header">
                <div className="flex-center-y justify-between gap-2">
                    <DatePicker
                        label={'Date'}
                        value={date}
                        setValue={setDate}
                    />
                    <div className="flex-center-y gap-2"></div>
                    <div className="flex-center-y gap-2"></div>
                </div>
                <div className="flex-center-y gap-2">
                    <Button
                        color={'info'}
                        text={'View'}
                        icon={<TbInfoSquare size={20} />}
                    />
                    <Button
                        color={'success'}
                        text={'Save'}
                        icon={<BsSave size={20} />}
                    />
                </div>
            </div>
            <div className="main-body">
                <div className="w-full text-center text-xl pb-3 font-bold"></div>
                <IndexBody />
            </div>
        </div>
    )
}

export default IndexEW
