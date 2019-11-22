export class BaseUser {
  constructor(
    public username: string,
    public password: string,
    public logged: boolean,
    private token: string = '',
  ) { }

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }
}
