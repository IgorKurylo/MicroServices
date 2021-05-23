import jwt from 'jsonwebtoken'
import { User } from '../models/user'
export class JwtToken {
  constructor() {}
  generate(user: User): string {
    const token = jwt.sign({ id: user.id }, 'secret', {
      expiresIn: '1day',
    })
    return token
  }
  validate(token: string) {
    try {
      const decoded = jwt.verify(token, 'secret')
    } catch (err) {
      console.log('Inalid Token', err)
      return false
    }
    return true
  }
}
