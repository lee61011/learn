import { withRouter } from 'next/router'
import Link from 'next/link'

const Books = ({router})=>{
    return (
        <>
            <div>{router.query.name}</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

export default withRouter(Books)