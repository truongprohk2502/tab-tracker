import jwt from 'jsonwebtoken'

interface IJwtPayload {
  email: string
}

const jwtSignUser = (payload: IJwtPayload) => {
  return jwt.sign(payload, 'jwt-secret', {
    expiresIn: 7 * 24 * 60 * 60,
  })
}

export { jwtSignUser }
