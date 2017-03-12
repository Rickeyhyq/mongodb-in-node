'use strict'

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/music'

MongoClient.connect(url, (error, db) => {
  console.log('Connected correctly to server')
  // 获取已存在的japan集合
  let japan = db.collection('japan')

  // 删除数据库中的集合
  // db.dropCollection('usa', (error, result) => {
  //   if (error) console.log(error)
  //   console.log('Delete collection success')
  //   console.log(result)
  //   // 关闭数据库
  //   db.close()
  // })

  // 删除集合中的文档
  japan.deleteMany({ name: 'girl'}, (error, result) => {
    if (error) console.log(error)
    console.log('Delete document success')
    db.close()
  })
})