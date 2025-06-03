// theater.ts
import { Showtime } from './Showtime';
import { Seat } from './Seat';
import { SeatStatus } from './SeatStatus';

export class Theater {
  showtimes: Showtime[] = [];

  constructor(
    public theaterID: number,
    public name: string,
    public location: string,
    public seats: Seat[]
  ) {}

  assignShowtime(showtime: Showtime): void {
    this.showtimes.push(showtime);
  }

  getAvailableSeats(showtimeId: number): Seat[] {
    const showtime = this.showtimes.find(s => s.id === showtimeId);
    return showtime ? showtime.getAvailableSeats() : [];
  }

  getSeatLayout(): string {
    return `Layout of ${this.name} with ${this.seats.length} seats.`;
  }
}
