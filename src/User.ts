import {Person} from './Person';
class User extends Person {
    bookings: Booking[] = [];
    reviews: Review[] = [];

    constructor(id: number, name: string, email: string, public password: string) {
        super(id, name, email);
    }

    browseMovies(): void {}
    viewBookings(): void {}
    rateMovie(): void {}
    filterMoviesByGenre(): void {}

    register(): void {}
    login(): boolean { return true; }
}
