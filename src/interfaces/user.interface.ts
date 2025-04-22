export interface IUser {
  _id: string
  firstName: string
  lastName: string
  email: string
  pwdHash: string
  image?: string
  phone?: string
  dob: string
  institute?: string
  standard: string
  events?: string[]
  profileType: 'Student/Other' | 'Psychologist/Councellor'
  createdTimeStamp: string
  updatedTimeStamp: string
}
