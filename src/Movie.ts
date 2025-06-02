import { Cinema } from './Cinema';
import { ShowTime } from './Showtime';

export class Movie {
    private id: number;
    private title: string;
    private genre: string;
    private duration: number;
    private showTimes: ShowTime[] = [];
    private cinema: Cinema;

    constructor(id: number, title: string, genre: string, duration: number, cinema: Cinema) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.duration = duration;
        this.cinema = cinema;
    }

    public addShowTime(showTime: ShowTime): void {
        this.showTimes.push(showTime);
    }

    public getShowTimes(): ShowTime[] {
        return this.showTimes;
    }

    public getTitle(): string {
        return this.title;
    }
}