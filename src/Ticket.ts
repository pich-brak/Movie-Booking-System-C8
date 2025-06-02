export class Ticket {
    constructor(
        private qrCode: string,
        private seatDetails: string,
        private reference: string,
        private booking: Booking
    ){}
    generateQRCode(): void {}
    validateQRCode(code: string): boolean {
        return this.qrCode === code;
    }
    getSeatDetails(): string {
        return this.seatDetails;
    }
    getReference(): string {
        return this.reference;
    }
    getBookingDetails(): Booking {
        return this.booking;
    }
    isValid(): boolean {
        return true;
    }
}