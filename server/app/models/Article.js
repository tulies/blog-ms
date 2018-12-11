const Sequelize = require('sequelize')
const sequelize = require('../plugins/sequelize')
const moment = require('moment')
const Article = sequelize.define('article', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  slogan: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  poster: {
    type: Sequelize.STRING
  },
  tags: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  categoryId: {
    field: 'category_id',
    type: Sequelize.STRING
  },
  pv: {
    type: Sequelize.STRING
  },
  createTime: {
    field: 'create_time',
    type: Sequelize.DATE,
    get () {
      return moment(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  updateTime: {
    field: 'update_time',
    type: Sequelize.DATE,
    get () {
      return moment(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}, {
  // 自定义表名
  'freezeTableName': true,
  'tableName': 'blog_article',

  // 是否需要增加createdAt、updatedAt、deletedAt字段
  'timestamps': false

  // 不需要createdAt字段
  // 'createdAt': false,

  // 将updatedAt字段改个名
  // 'updatedAt': 'utime'

  // 将deletedAt字段改名
  // 同时需要设置paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间
  // 'deletedAt': 'dtime',
  // 'paranoid': true
})

module.exports = Article
