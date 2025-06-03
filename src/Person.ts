// store registered users by email
const users: { [email: string]: any } = {};

export abstract class Person {
    public id: number;
    public name: string;
    public email: string;
  password: any;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    register(): void {
    if (users[this.email]) {
      console.log(`Email ${this.email} is already registered.`);
    } else {
      users[this.email] = this;
      console.log(`${this.name} has been successfully registered with email ${this.email}.`);
    }
  }

  login(): boolean {
    const user = users[this.email];
    if (user && user.password === this.password) {
      console.log(`${this.name} logged in successfully.`);
      return true;
    } else {
      console.log(`Login failed for ${this.email}. Check email or password.`);
      return false;
    }
  }

  logout(): void {
    console.log(`${this.name} has logged out.`);
  }
}