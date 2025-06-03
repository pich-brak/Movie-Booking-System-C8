
// ticket.ts
import { Booking } from './Booking';

export class Ticket {
  qrCode: string = '';

  constructor(
    public code: string,
    public movieTitle: string,
    public showtime: string,
    public customer: string,
    public booking: Booking
  ) {}

  generateQRCode(): void {
    this.qrCode = `QR-${this.code}-${Date.now()}`;
  }

  validate(): boolean {
    return this.booking !== null;
  }
}
