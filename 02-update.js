'use strict'

const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/music'

MongoClient.connect(url, (error, db) => {
  console.log('Connected correctly to server')
  // 获取已存在的japan集合
  let japan = db.collection('japan')

  // 更新japan集合中的文档
  japan.update({ name: 'girl' }, { $set: { song: 'Genie' } }, (error, result) => {
    if (error) console.log(error)
    console.log('Update success')
    console.log(result)
    // 关闭数据库
    db.close()
  })
})