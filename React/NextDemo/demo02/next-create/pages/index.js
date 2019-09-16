import React from 'react'
import Link from 'next/link'

const Home = () => (
  <>
    <div>我是首页</div>
    <div><Link href="/jspangA"><a>去 JspangA 页面</a></Link></div>
    <div><Link href="/jspangB"><a>去 JspangB 页面</a></Link></div>
  </>
)

export default Home