
const Article = require('../models/Article')

module.exports = {

  async getList (ctx) {
    // force: true 如果表已经存在，将会丢弃表
    // const res = await User.create({
    //   firstName: 'John',
    //   lastName: 'Hancock'
    // })
    // console.log(res)

    const articles = await Article.findAll()
    // console.log(users[0])

    ctx.body = {
      code: 0,
      msg: '成功',
      data: articles
    }
  }

}
