
const Category = require('../models/Category')

module.exports = {

  async getList (ctx) {
    const categorys = await Category.findAll()
    console.log(categorys[0])

    ctx.body = {
      code: 0,
      msg: '成功',
      data: categorys
    }
  }

}
