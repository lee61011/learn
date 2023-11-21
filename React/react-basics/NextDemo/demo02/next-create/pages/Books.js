import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Books = ({router, list})=>{
    return (
        <>
            <h2>Books.js Page</h2>
            <div>{router.query.name} <br /> {list} </div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

Books.getInitiaProps = async () => {
    const promise = new Promise((resolve) => {
        console.log('远程数据结果：', res)
        axios('https://www.easy-mock.com/mock/5b336ab6e312d1110939a921/SmileVue/getBookName').then(
            (res) => {
                console.log('远程数据结果：', 'res')
                resolve(res.data.data)
            }
        )
    })
    return await promise
}

export default withRouter(Books)