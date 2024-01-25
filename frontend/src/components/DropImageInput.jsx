import React, { useEffect, useRef, useState } from 'react'

const DropImageInput = () => {
    const [file, setFile] = useState()
    const [blob, setBlob] = useState('')
    const inputFileRef = useRef(null)
    const [isDragEnter, setIsDragEnter] = useState(false)

    useEffect(() => {
        if (file) {
            setBlob(URL.createObjectURL(file))
        }

        return () => {
            URL.revokeObjectURL(blob)
        }
    }, [file])

    const onFileChange = (e) => {
        const newFile = e.target.files[0]
        if (newFile) {
            if (!newFile.type.match('image.*')) {
                //File không đúng định dạng
            } else {
                inputFileRef.current && (inputFileRef.current.value = null)

                setFile(newFile)
            }
        }
    }

    const onDragLeave = () => {
        setIsDragEnter(false)
    }

    const onDragEnter = () => {
        setIsDragEnter(true)
    }

    const onDrop = (e) => {
        setIsDragEnter(false)
        const newFile = e.dataTransfer.files?.[0]
        if (newFile) {
            if (!newFile.type.match('image.*')) {
                //File không đúng định dạng
            } else {
                setFile(newFile)
            }
        }
    }

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault() // Disable open image in new tab
        }

        window.addEventListener('dragover', handler)
        window.addEventListener('drop', handler)

        return () => {
            window.removeEventListener('dragover', handler)
            window.removeEventListener('drop', handler)
        }
    }, [])

    return (
        <div
            style={{
                '--bg': `url(${blob})`
            }}
            onDrop={onDrop}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onClick={() => inputFileRef.current && inputFileRef.current.click()}
            className={`${
                blob ? 'before-bg-file' : ''
            } relative p-6 cursor-pointer h-[300px] w-full mx-auto flex flex-col items-center border-2 border-dashed border-blue-600 text-base leading-[1.6] select-none`}
        >
            <input
                ref={inputFileRef}
                onChange={onFileChange}
                type="file"
                accept="image/*"
                hidden
            />
            <p className="text-center text-[#F05123] pointer-events-none absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                {isDragEnter
                    ? 'Drop photo here'
                    : 'Drag and drop photos here or click to select photos'}
            </p>
        </div>
    )
}

export default DropImageInput
