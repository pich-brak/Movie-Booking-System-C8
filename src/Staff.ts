import { Person } from './Person';
class Staff extends Person {
    constructor(id: number, name: string, email: string) {
        super(id, name, email); 
    }

    public scanTicket(ticket: String): boolean {
        return false;
    }
}