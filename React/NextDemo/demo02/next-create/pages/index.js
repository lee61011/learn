import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {

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


  Router.events.on('routerChangeStart', (...args)=>{
    console.log('1. routerChangeStart ==> 路由开始变化，参数为：', ...args)
  })

  Router.events.on('routerChangeComplete', (...args)=>{
    console.log('2. routerChangeComplete ==> 路由结束变化，参数为：', ...args)
  })

  Router.events.on('beforeHistoryChange', (...args)=>{
    console.log('3. beforeHistoryChange ==> 在改变浏览器 History 之前触发，参数为：', ...args)
  })

  Router.events.on('routeChangeError', (...args)=>{
    console.log('4. routeChangeError ==> 跳转发生错误，参数为：', ...args)
  })

  Router.events.on('hashChangeStart', (...args)=>{
    console.log('5. hashChangeStart ==> hash 跳转开始时执行，参数为：', ...args)
  })

  Router.events.on('hashChangeComplete', (...args)=>{
    console.log('6. hashChangeComplete ==> hash 跳转完成时，参数为：', ...args)
  })





  /* 编程式跳转传递参数 */
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href={{ pathname: '/books', query: { name: 'React' } }}><a>React</a></Link>
        <br />
        <Link href="/books?name=Vue"><a>Vue</a></Link>
      </div>
      <div>
        <button onClick={gotoBooks}>JavaScript</button>
      </div>
      <div>
        <Link href="#Angular"><a>Angular</a></Link>
      </div>
    </>
  )
}

export default Home