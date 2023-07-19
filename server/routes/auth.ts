import express, { type Request, type Response } from 'express'
import User from '../models/User'
import { RegisterPolicy } from '../policies/AuthPolicy'

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
      const user = await User.create(req.body)
      res.send(user.toJSON())
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
      if (user.password !== password) {
        return res.status(403).send({ message: 'The login information was incorrect' })
      }
      res.send({ user: user.toJSON() })
    } catch (err) {
      res.status(400).send({ error: 'This email is already in use' })
    }
  },
)

export default router
