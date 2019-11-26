export class User {
  constructor(
    public name: string,
    public surname: string,
    public mail: string,
    public user: string,
    public password: string,
    public eta: number,
    public gender: string,
    public statoCivile: string,
    public sport: string[],
    public hobbies: string[],
    public id?: number,
  ) { }

}
