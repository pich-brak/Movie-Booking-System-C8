enum SeatStatus {
    AVAILABLE = "AVAILABLE",
    RESERVED = "RESERVED",
    BOOKED = "BOOKED",
}

enum SeatType {
    STANDARD = "STANDARD",
    PREMIUM = "PREMIUM",
    VIP = "VIP",
}
export class Seat {
    constructor(
        private seatId: number,
        private type: SeatType,
        private status: string
    ){}
    isAvailable(): boolean {
        return this.status === SeatStatus.AVAILABLE;
    }
    reserve(): boolean {
        if (this.isAvailable()) {
            this.status = SeatStatus.RESERVED;
            return true;
        }
        return false;
    }
    book(): boolean {
        if (this.status === SeatStatus.RESERVED){
            this.status = SeatStatus.BOOKED;
            return true;
        }
        return false;
    }
    cancelReservation(): void {
        if (this.status === SeatStatus.RESERVED) {
            this.status = SeatStatus.AVAILABLE;
        }
    }
    getPrice(): number {
        switch (this.type){
            case SeatType.VIP:
                return 20;
            case SeatType.PREMIUM:
                return 15;
            default:
                return 10;
        }
    }
}