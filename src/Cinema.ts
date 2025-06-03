// cinema.ts
import { Theater } from './Theater';
import { Seat } from './Seat';

export class Cinema {
  private theaters: Theater[] = [];

  constructor(
    public id: number,
    public name: string,
    public location: string
  ) {}

  addTheater(theater: Theater): void {
    this.theaters.push(theater);
  }

  getAvailableSeats(showTimeId: number): Seat[] {
    for (const theater of this.theaters) {
      const available = theater.getAvailableSeats(showTimeId);
      if (available.length > 0) return available;
    }
    return [];
  }
}
