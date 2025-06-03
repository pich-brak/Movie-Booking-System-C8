import { Person } from "./Person";

export class Staff extends Person {
  login(): void {
    console.log(`${this.name} (staff) logged in.`);
  }

  logout(): void {
    console.log(`${this.name} (staff) logged out.`);
  }

  scanTicket(ticketCode: string): boolean {
    console.log(`Ticket ${ticketCode} scanned successfully by ${this.name}.`);
    return true;
  }
}
