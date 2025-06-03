// showtime.ts
import { Seat } from './Seat';
import { Movie } from './Movie';
import { Cinema } from './Cinema';

export class Showtime {
  seats: Seat[] = [];

  constructor(
    public id: number,
    public movie: Movie,
    public time: string,
    public cinema: Cinema
  ) {}

  getAvailableSeats(): Seat[] {
    return this.seats.filter(seat => seat.status === SeatStatus.AVAILABLE);
  }

  getSeatStatus(seatNumber: number): SeatStatus {
    const seat = this.seats.find(seat => seat.seatID === seatNumber);
    return seat ? seat.status : SeatStatus.AVAILABLE;
  }

  isFull(): boolean {
    return this.seats.every(seat => seat.status === SeatStatus.BOOKED);
  }
}

import { SeatStatus } from './SeatStatus';
