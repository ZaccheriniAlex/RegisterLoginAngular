export class BaseUser {
  constructor(
    public username: string,
    public password: string,
    public logged: boolean,
  ) { }

}
