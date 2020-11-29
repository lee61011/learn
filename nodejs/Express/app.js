/*
 * @Author: **
 * @Date: 2020-11-06 16:38:00
 * @LastEditTime: 2020-11-06 16:48:13
 * @LastEditors: **
 * @Description: 
 * @FilePath: \learn\nodejs\Express\app.js
 */

const express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('hello express!')
})

app.get('/login', (req, res) => {
  res.send('login page.')
})

app.get('/register', (req, res) => {
  res.send('register page.')
})

app.listen(3000, function() {
  console.log('app is running at port 3000 ...')
})