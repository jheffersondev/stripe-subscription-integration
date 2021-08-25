import { Schema, model } from 'mongoose'

interface User {
  name: string
  gender: string
  birthDate: string
  email: string
  password: string
  stripe: any
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  birthDate: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  stripe: { type: Object, required: true },
})

const userModel = model<User>('User', schema)
export default userModel
