import React, { useState } from 'react'

function Jspang(){
    const [color, setColor] = useState('blue')
    const changeColor=()=>{
        setColor(color=='blue' ? 'red' : 'blue')
    }

    return (
        <>
            <div>技术胖免费前端教程</div>
            <div className="jspang">技术胖免费前端教程</div>
            <div><button onClick={changeColor}>改变颜色</button></div>

            {/* <style jsx>
                {`
                    div {color: blue;}
                    .jspang {color: red;}
                `}
            </style> */}
            <style jsx>
                {`
                    div {color: ${color};}
                `}
            </style>
        </>
    )
}

export default Jspang