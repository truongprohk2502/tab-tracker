import {
  DataTypes,
  type Model,
  type InferCreationAttributes,
  type InferAttributes,
} from 'sequelize'
import sequelize from '../configs/sequelize'

interface SongModel extends Model<InferAttributes<SongModel>, InferCreationAttributes<SongModel>> {
  title: string
  artist: string
  genre: string
  album: string
  albumImageUrl: string
  youtubeId: string
  lyrics: string
  tab: string
}

const Song = sequelize.define<SongModel>('Song', {
  title: DataTypes.STRING,
  artist: DataTypes.STRING,
  genre: DataTypes.STRING,
  album: DataTypes.STRING,
  albumImageUrl: DataTypes.STRING,
  youtubeId: DataTypes.STRING,
  lyrics: DataTypes.TEXT,
  tab: DataTypes.TEXT,
})

export default Song
