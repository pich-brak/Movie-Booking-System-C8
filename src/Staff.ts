import { Person } from "./Person";
export class Staff extends Person {
    constructor(id: number, name: string, email: string) {
        super(id, name, email);
    }

     scanTicket(ticket: Ticket): boolean {
    if (ticket.valid && !ticket.used) {
      ticket.used = true;
      console.log(`Ticket #${ticket.id} scanned successfully by ${this.name}.`);
      return true;
    } else {
      console.log(`Ticket #${ticket.id} is invalid or already used.`);
      return false;
    }
  }

}