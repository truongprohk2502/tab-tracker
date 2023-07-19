import path from 'path'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'db.sqlite3'),
})

export default sequelize
