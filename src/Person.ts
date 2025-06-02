export abstract class Person {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}

    abstract register(): void;
    abstract login(): boolean;
}