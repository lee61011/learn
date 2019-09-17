/* 标签式导航 */
/* import React from 'react'
import Link from 'next/link'

const Home = () => (
  <>
    <div>我是首页</div>
    <div><Link href="/jspangA"><a>去 JspangA 页面</a></Link></div>
    <div><Link href="/jspangB"><a>去 JspangB 页面</a></Link></div>
  </>
)

export default Home */


/* 编程式导航 */
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  function gotoA() {
    Router.push('/jspangA')
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="/jspangA">
          <a>
            <span>去JspangA页面</span>
            <span>前端博客</span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/jspangB"><a>去JspnagB页面</a></Link>
      </div>
      <div>
        <button onClick={gotoA}>去JspangA页面</button>
      </div>
    </>
  )
}

export default Home