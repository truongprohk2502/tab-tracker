import express, { type Request, type Response } from 'express'

const router = express.Router()

interface IRegisterBody {
  email: string
  password: string
}

router.post(
  '/register',
  function (req: Omit<Request, 'body'> & { body: IRegisterBody }, res: Response) {
    res.send({ message: `Hello ${req.body.email}` })
  },
)

export default router
