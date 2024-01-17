import { MDBInput } from 'mdb-react-ui-kit'
import { useEffect, useRef, useState } from 'react'
import icons from '../utils/icons'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'

const { MdOutlineDateRange } = icons

const DatePicker = ({ label }) => {
    const [inputValue, setInputValue] = useState('')
    const datepickerRef = useRef(null)
    const calendarRef = useRef(null)
    const [activeDatepicker, setActiveDatepicker] = useState(false)

    const [selected, setSelected] = useState()

    const handleIconClick = () => {
        setActiveDatepicker(!activeDatepicker)
        console.log(datepickerRef.current)
    }
    const handleOutsideClick = (event) => {
        if (
            datepickerRef.current &&
            !datepickerRef.current.contains(event.target) &&
            !calendarRef.current.contains(event.target)
        ) {
            setActiveDatepicker(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])
    useEffect(() => {
        if (selected) {
            setInputValue(format(selected, 'dd/MM/yyyy'))
        }
    }, [selected])
    return (
        <MDBInput
            label={label}
            id="form1"
            type="text"
            className="relative"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        >
            <div ref={datepickerRef} onClick={handleIconClick}>
                <MdOutlineDateRange className="absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer" size={24} />
            </div>
            {activeDatepicker && (
                <div ref={calendarRef}>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        onClick={handleOutsideClick}
                        className="absolute left-0 mx-0 bg-white shadow-md rounded-md p-2 z-50"
                    />
                </div>
            )}
        </MDBInput>
    )
}

export default DatePicker
