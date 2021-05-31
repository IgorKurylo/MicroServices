import { request, Router } from 'express'
import { Auth } from '../models/auth'
import { User } from '../models/user'
import { JwtToken } from '../jwt/jwtToken'
const authRouter = Router()
const jwt = new JwtToken()
authRouter.post('/', (request, response) => {
  //TODO: make auth with jwt
  const auth: Auth = request.body as Auth
  //TODO: check if user exist in db
  const user: User = {
    firstName: auth.userName,
    lastName: auth.userName,
    id: 1,
  }
  const token = jwt.generate(user)

  return response.status(200).send({ accessToken: token })
})
authRouter.get('/verify', (request, response) => {
  const auth_header = request.headers['authorization']
  if (auth_header) {
    console.log(auth_header)
    const token = auth_header.substring(auth_header.indexOf(' '), auth_header.length)
    if (!jwt.validate(token)) {
      return response.status(401).send('Unauthorized')
    } else {
      return response.status(200)
    }
  } else {
    return response.status(401).send('Unauthorized')
  }
})

export default authRouter
