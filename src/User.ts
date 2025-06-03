import { Person } from './Person';
import { Movie } from './Movie';
import { Booking } from './Booking';
import { showtimes, movies, bookings } from './Data';

class User extends Person {
  // Removed duplicate 'password' property to match base class 'Person'
  private userBookings: Booking[] = [];

  constructor(id: number, name: string, email: string, password: string) {
    super(id, name, email);
    this.password = password;
  }

  public reviewMovie(movieId: number, reviewText: string): void {
    const movie = movies.find((m: { id: number; }) => m.id === movieId);
    if (movie) {
      movie.addReview(this.id, reviewText);
      console.log(`You reviewed "${movie.title}"`);
    } else {
      console.log("Movie not found.");
    }
  }

  public bookMovie(showtimeId: number, seatNumbers: number[]): void {
    const showtime = showtimes.find((s: { id: number; }) => s.id === showtimeId);
    if (showtime) {
      const bookingId = Date.now();
      const showTime = showtime;
      const seats = seatNumbers; 
      const paymentStatus = "Pending";

      const booking = new Booking(bookingId, this.id, showTime, seats, paymentStatus);
      this.userBookings.push(booking);
      bookings.push(booking); 
      console.log(`Booking successful for "${showtime.movieTitle}"`);
    } else {
      console.log("Showtime not found.");
    }
  }

  public viewBookings(): void {
    if (this.userBookings.length === 0) {
      console.log("No bookings yet.");
    } else {
      this.userBookings.forEach(b => {
        console.log(`Booking: ${b.showTime} | Seats: ${b.seatNumbers.join(', ')}`);
      });
    }
  }

  public rateMovie(movieId: number, rating: number): void {
    const movie = movies.find((m: { id: number; }) => m.id === movieId);
    if (movie) {
      movie.addRating(this.id, rating);
      console.log(`You rated "${movie.title}" with ${rating} stars`);
    } else {
      console.log("Movie not found.");
    }
  }

  public filterMoviesByGenre(genre: string): void {
    const filtered = movies.filter((m: { genre: string; }) => m.genre.toLowerCase() === genre.toLowerCase());
    console.log(`Movies in genre "${genre}":`);
    filtered.forEach((m: { title: any; }) => console.log(`- ${m.title}`));
  }
}
