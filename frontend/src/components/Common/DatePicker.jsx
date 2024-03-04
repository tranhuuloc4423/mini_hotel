import { MDBInput } from 'mdb-react-ui-kit'
import { useEffect, useRef, useState } from 'react'
import icons from '../../utils/icons'
import { DayPicker, useInput } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'

const { MdOutlineDateRange } = icons

const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid plum;
    color: plum
  }
  .my-selected:hover:not([disabled]) { 
    border-color: black;
    color: black;
  }
  .my-today { 
    font-weight: bold;
    font-size: 120%; 
    color: powderblue;
  }
`

const DatePicker = ({ label, value, setValue, disabled }) => {
    const datepickerRef = useRef(null)
    const calendarRef = useRef(null)
    const [activeDatepicker, setActiveDatepicker] = useState(false)
    const { inputProps, dayPickerProps } = useInput({
        fromYear: 1980,
        toYear: new Date().getFullYear(),
        format: 'dd/MM/yyyy',
        required: true
    })

    const [selected, setSelected] = useState()

    const handleIconClick = () => {
        setActiveDatepicker(!activeDatepicker)
    }
    const handleOutsideClick = (event) => {
        if (
            datepickerRef.current &&
            calendarRef.current &&
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
            setValue(format(selected, 'dd/MM/yyyy'))
            setActiveDatepicker(false)
        }
    }, [selected])
    return (
        <MDBInput
            disabled={disabled}
            label={label}
            type="text"
            // defaultValue={value}
            value={selected ? format(selected, 'dd/MM/yyyy') : value}
            className="relative"
            onChange={(e) => setValue(e.target.value)}
            {...inputProps}
        >
            {!disabled && (
                <div ref={datepickerRef} onClick={handleIconClick}>
                    <MdOutlineDateRange
                        className="absolute top-1/2 translate-y-[-50%] right-2 cursor-pointer"
                        size={24}
                    />
                </div>
            )}
            {activeDatepicker && (
                <div ref={calendarRef}>
                    <style>{css}</style>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        onClick={handleOutsideClick}
                        className="absolute left-0 mx-0 bg-white shadow-md rounded-md p-2 z-50"
                        modifiersClassNames={{
                            selected: 'my-selected',
                            today: 'my-today'
                        }}
                        captionLayout="dropdown-buttons"
                        {...dayPickerProps}
                    />
                </div>
            )}
        </MDBInput>
    )
}

export default DatePicker
