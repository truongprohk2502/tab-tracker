import express, { type Request, type Response } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User'
import { RegisterPolicy } from '../policies/AuthPolicy'
import { jwtSignUser } from '../configs/jwt'

const router = express.Router()

interface IRegisterBody {
  email: string
  password: string
}

router.post(
  '/register',
  RegisterPolicy,
  async function (req: Omit<Request, 'body'> & { body: IRegisterBody }, res: Response) {
    try {
      const { email, password } = req.body
      const hashPass = await bcrypt.hash(password, 10)
      const user = await User.create({ email, password: hashPass })
      res.send({ user: user.toJSON(), token: jwtSignUser({ email }) })
    } catch (err) {
      res.status(400).send({ error: 'This email is already in use' })
    }
  },
)

interface ILoginBody {
  email: string
  password: string
}

router.post(
  '/login',
  async function (req: Omit<Request, 'body'> & { body: ILoginBody }, res: Response) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email } })
      if (!user) {
        return res.status(403).send({ message: 'The login information was incorrect' })
      }
      const isValidPassword = await bcrypt.compare(password, user.password)
      if (!isValidPassword) {
        return res.status(403).send({ message: 'The login information was incorrect' })
      }
      res.send({ user: user.toJSON(), token: jwtSignUser({ email }) })
    } catch (err) {
      res.status(400).send({ error: 'This email is already in use' })
    }
  },
)

export default router
