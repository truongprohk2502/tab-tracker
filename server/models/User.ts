import {
  DataTypes,
  type Model,
  type InferCreationAttributes,
  type InferAttributes,
} from 'sequelize'
import sequelize from '../configs/sequelize'

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  email: string
  password: string
}

const User = sequelize.define<UserModel>('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
})

export default User
