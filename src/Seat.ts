import { SeatStatus } from "./SeatStatus";
import { SeatType } from "./SeatType";


export class Seat {
  constructor(
    public seatID: number,
    public type: SeatType,
    public status: SeatStatus,
    public isReserved: boolean,
    public isBooked: boolean,
    public price: number
  ) {}

  book(): boolean {
    if (this.status === SeatStatus.AVAILABLE) {
      this.status = SeatStatus.BOOKED;
      this.isBooked = true;
      return true;
    }
    return false;
  }

  cancelReservation(): void {
    this.status = SeatStatus.AVAILABLE;
    this.isReserved = false;
    this.isBooked = false;
  }

  getPrice(): number {
    return this.price;
  }
}

