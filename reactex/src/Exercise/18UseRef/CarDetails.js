import { useRef } from 'react'
export default function CarDetails({ initialData }) {
    const targetModel = useRef()
    const targetColor = useRef()
    const targetYear = useRef()
    return (
        <>
            <input ref={targetModel} onFocus={() => { targetModel.current.value = '' }} type='text' defaultValue={initialData.model}></input>
            <input ref={targetYear} onFocus={() => { targetYear.current.value = '' }} type='number' defaultValue={initialData.year}></input>
            <input ref={targetColor} onFocus={() => { targetColor.current.value = '' }} type='text' defaultValue={initialData.color}></input>
        </>
    )
}