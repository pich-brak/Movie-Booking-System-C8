import { Person } from "./Person";
import { Booking } from "./Booking";
import { Review } from "./Review";
import { Movie } from "./Movie";
import { Showtime } from "./Showtime";
import { Seat } from "./Seat";

export class User extends Person {
  bookings: Booking[] = [];
  reviews: Review[] = [];

  constructor(id: number, name: string, email: string) {
    super(id, name, email);
  }

  login(): void {
    console.log(`${this.name} logged in successfully.`);
  }

  logout(): void {
    console.log(`${this.name} logged out.`);
  }

  browseMovies(movies: Movie[]): void {
    console.log(`${this.name} is browsing movies:`);
    movies.forEach(movie => {
      console.log(`- ${movie.title} (${movie.genre})`);
    });
  }

  filterMoviesByGenre(movies: Movie[], genre: string): Movie[] {
    const filtered = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    console.log(`${this.name} filtered movies by genre: ${genre}`);
    return filtered;
  }

  bookMovie(
    movie: Movie,
    showtime: Showtime,
    selectedSeats: Seat[],
    paymentMethod: string
  ): Booking | null {
    const booking = new Booking(Date.now(), this, movie, showtime, selectedSeats, paymentMethod);
    if (booking.confirmBooking()) {
      this.bookings.push(booking);
      console.log(`Booking confirmed for ${movie.title}`);
      return booking;
    } else {
      console.log("Booking failed: some seats may already be taken.");
      return null;
    }
  }

  writeReview(movie: Movie, rating: number, comment: string): void {
    const review = new Review(movie, rating, new Date(), comment);
    this.reviews.push(review);
    movie.addReview(review);
    console.log(`${this.name} wrote a review for ${movie.title}: "${comment}"`);
  }
}
