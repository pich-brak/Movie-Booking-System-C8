import { Movie } from './Movie';
import { Seat } from './Seat';

export class ShowTime {
    private id: number;
    private movie: Movie;
    private startTime: Date;
    private endTime: Date;
    private seats: Seat[] = [];

    constructor(id: number, movie: Movie, startTime: Date, endTime: Date) {
        this.id = id;
        this.movie = movie;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public addSeat(seat: Seat): void {
        this.seats.push(seat);
    }

    public getSeats(): Seat[] {
        return this.seats;
    }

    public getStartTime(): Date {
        return this.startTime;
    }
}