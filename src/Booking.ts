
import { Seat } from './Seat';
import { Showtime } from './Showtime';
import { Movie } from './Movie';
import { User } from './User';
import { Ticket } from './Ticket';

export class Booking {
  ticket: Ticket;

  constructor(
    public id: number,
    public user: User,
    public movie: Movie,
    public showtime: Showtime,
    public selectedSeats: Seat[],
    public paymentMethod: string
  ) {
    this.ticket = new Ticket(`${id}-${Date.now()}`, movie.title, showtime.time, user.name, this);
  }

  calculateTotal(): number {
    return this.selectedSeats.reduce((total, seat) => total + seat.getPrice(), 0);
  }

  confirmBooking(): boolean {
    let success = true;
    this.selectedSeats.forEach(seat => {
      if (!seat.book()) success = false;
    });
    return success;
  }

  selectSeat(seat: Seat): void {
    this.selectedSeats.push(seat);
  }

  getBookingSummary(): string {
    return `Booking for ${this.user.name}: ${this.selectedSeats.length} seat(s) for '${this.movie.title}' at ${this.showtime.time}. Total: $${this.calculateTotal()}`;
  }
}
