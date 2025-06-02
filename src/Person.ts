export abstract class Person {
    private id: number;
    private name: string;
    private email: string;
    private password: string;

    constructor(id: number, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

     register(): void {
        console.log(`${this.name} has been registered with email ${this.email}`);
    }

    login(): boolean {
        console.log(`${this.name} is attempting to log in.`);
        return true;
    }

    logout(): void {
        console.log(`${this.name} has logged out.`);
    }
}