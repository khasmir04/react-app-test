// Spread Discussion

import express from 'express'
const app = express()

app.post('/add', (req, res) => {
  const tempObject = {
    ...req.body,
  }
  return tempObject
})

const myArr = [2, 5, 3, 4]
const user = () => (prev) => { prev.push(9) }
// ...prev

const newArr = user(myArr)
console.log(newArr) // [2,5,3,4,9]
console.log(myArr) // [2,5,3,4]