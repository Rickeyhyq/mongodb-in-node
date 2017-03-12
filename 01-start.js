'use strict'

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/music'
// 连接名为music的数据库
MongoClient.connect(url, (error, db) => {
  console.log('Connected correctly to server')
  // 向数据库中新增一个集合japan
  let collection = db.collection('japan')
  // 向japan集合中增加多个文档
  collection.insertMany([
    {name: 'super', song: 'sexy'},
    {name: 'girl', song: 'fsdfd'}
  ], (error, result) => {
    if (error) console.log(error)
    console.log('Insert success')
    // 关闭数据库
    db.close()
  })
})