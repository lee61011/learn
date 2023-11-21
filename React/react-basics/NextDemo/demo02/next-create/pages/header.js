/* 

//  自定义 Head 更加友好的 SEO 操作
//  方法一：在各个页面加上 Head 标签


import Head from 'next/head'

function Header() {
    return (
        <>
            <Head>
                <title>JavaScript 是最好的语言！</title>
                <meta charSet='utf-8' />
            </Head>
            <div>JSpang.com</div>
        </>
    )
}

export default Header */


/* 
    //  自定义 Head 更加友好的 SEO 操作
    //  方法二：定义全局的 Head
*/

import Myheader from '../components/myheader'

function Header() {
    return (
        <>
            <Myheader />
            <div>JSPang.com</div>
        </>
    )
}

export default Header