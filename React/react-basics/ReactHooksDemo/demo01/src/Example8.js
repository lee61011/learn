import React, { useRef, useState, useEffect } from 'react'

function Example8() {
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = "Hello React"
        console.log(inputEl)
    }
    const [text, setText] = useState('World')
    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text
        console.log('textRef.current:',  textRef.current)
    })
    
    return (
        <>
            {/* 保存 input 的 ref 到 inputEl */}
            <input ref={inputEl} type="text" />
            <button onClick = {onButtonClick}>在 input 上展示的文字</button>
            <br />
            <br />
            <input value={text} onChange={(e)=>{setText(e.target.value)}} />
        </>
    )
}

export default Example8