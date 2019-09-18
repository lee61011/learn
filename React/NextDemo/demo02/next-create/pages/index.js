import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

/* function gotoBooks() {
  Router.push('/books?name=JavaScript')
} */
function gotoBooks() {
  Router.push({
    pathname: '/books',
    query: {
      name: 'JavaScript'
    }
  })
}

const Home = () => {
  /* return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="/books?name=JavaScript"><a>JavaScript</a></Link>
        <br />
        <Link href="/books?name=React"><a>React</a></Link>
      </div>
    </>
  ) */


  /* 编程式跳转传递参数 */
  return (
    <div>
      <Link href={{pathname: '/books', query: {name: 'React'}}}><a>React</a></Link>
      <br />
      <button onClick={gotoBooks}>JavaScript</button>
    </div>
  )
}

export default Home`