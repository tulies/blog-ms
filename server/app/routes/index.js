/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
  prefix: '/api'
})

// xxx.com/weapp/demo
const controllers = require('../controllers')
// --- 文章相关接口 --- //
// GET  查询文章list
router.get('/article/list', controllers.article.getList)

// 查询全部分类
router.get('/category/list', controllers.category.getList)

module.exports = router
