'use strict'

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/music'

MongoClient.connect(url, (error, db) => {
  console.log('Connected correctly to server')
  // 获取已存在的china集合
  let china = db.collection('china')

  // 查询china集合中指定条件的文档
  china.find({}).toArray((error, datas) => {
    if (error) console.log(error)
    console.log('Found the following documents')
    console.log(datas.length)
    console.log(datas)
    console.dir(datas)
    db.close()
  })
})