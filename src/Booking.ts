import { ShowTime } from "./Showtime";
import { Seat } from "./Seat";

export class Booking {
  bookingDate: Date = new Date();
  seatNumbers: any;

  constructor(
    public id: number,
    public userId: number,
    public showTime: ShowTime,
    public seats: Seat[],
    public paymentStatus: string
  ) {}

  getBookingTotal(): number {
    return this.seats.reduce((sum, seat) => sum + seat.getPrice(), 0);
  }

  confirmBooking(): string {
    this.seats.forEach(seat => (seat.seatStatus = 2)); // BOOKED
    return "Booking confirmed.";
  }

  getBookingSummary(): string {
    return `Booking ID: ${this.id}, Total: $${this.getBookingTotal()}`;
  }
}
