import React, { useState } from 'react'

//  let showSex = true
function Example2(){
    const [age, setAge] = useState(18)

    //  React Hooks 不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序
    //  下面的代码会报错： React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render 
    /* if(showSex) {
        const [ sex, setSex ] = useState('男')
        showSex = false
    } */

    const [sex, setSex] = useState('男')
    const [work, setWork] = useState('前端程序员')
    return (
        <div>
            <p>张三 年龄： { age } 岁</p>
            <p>性别： { sex }</p>
            <p>工作： { work }</p>
        </div>
    )
}

export default Example2