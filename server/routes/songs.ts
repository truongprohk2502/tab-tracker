import express, { type Response } from 'express'
import type { BodyRequest } from '../types/request'
import Song from '../models/Song'

const router = express.Router()

router.get('/', async function (req, res) {
  const songs = await Song.findAll({ limit: 10 })
  res.send(songs)
})

interface ICreateSongBody {
  title: string
  artist: string
  genre: string
  album: string
  albumImageUrl: string
  youtubeId: string
  lyrics: string
  tab: string
}

router.post('/', async function (req: BodyRequest<ICreateSongBody>, res: Response) {
  const song = await Song.create(req.body)
  res.send(song)
})

export default router
