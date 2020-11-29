export class Users {
  userID: number
  email: string
  password: string
  firstName: string
  lastName: string

  constructor(userID: number, email: string, password: string, firstName: string, lastName: string) {
    this.userID = userID;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName
  }
}
