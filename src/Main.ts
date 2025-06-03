import { Seat } from './Seat';
import { SeatType } from './SeatType';
import { SeatStatus } from './SeatStatus';
import { User } from './User';
import { Staff } from './Staff';
import { Movie } from './Movie';
import { Showtime } from './Showtime';
import { Theater } from './Theater';
import { Cinema } from './Cinema';
import { Review } from './Review'; 

// 1. Create a user
const user = new User(1, "Alice", "alice@example.com");
user.login();

// 2. Create a movie
const movie = new Movie(101, "Inception", "Sci-Fi", "2025-06-01", 148, 5);

// 3. Create a cinema and theater
const cinema = new Cinema(1, "Dreamplex", "Downtown");
const seats: Seat[] = [];
for (let i = 1; i <= 10; i++) {
  seats.push(new Seat(i, SeatType.STANDARD, SeatStatus.AVAILABLE, false, false, 10));
}
const theater = new Theater(1, "Theater 1", "First Floor", seats);
cinema.addTheater(theater);

// 4. Create a showtime and assign it to theater
const showtime = new Showtime(201, movie, "18:00", cinema);
showtime.seats = [...seats];
theater.assignShowtime(showtime);

// 5. User browses and filters movies
user.browseMovies([movie]);
const filtered = user.filterMoviesByGenre([movie], "sci-fi");

// 6. Get available seats
const availableSeats = theater.getAvailableSeats(showtime.id);
console.log("Available Seats:", availableSeats.map(seat => seat.seatID));

// 7. Book seats
const seatsToBook = availableSeats.slice(0, 2);
const booking = user.bookMovie(movie, showtime, seatsToBook, "Credit Card");

if (booking) {
  console.log(booking.getBookingSummary());
  booking.ticket.generateQRCode();
  console.log("QR Code:", booking.ticket.qrCode);
}

// 8. Write a review (handled inside `user.writeReview`)
user.writeReview(movie, 5, "Mind-blowing movie with a great concept!");

// Optionally create and display a review manually using Review class
const review = new Review(movie, 5, new Date(), "Mind-blowing movie with a great concept!");
console.log(review.getReviewSummary());

// 9. Staff scans the ticket
const staff = new Staff(99, "Bob", "bob@cinema.com");
staff.login();
if (booking) {
  staff.scanTicket(booking.ticket.code);
}
staff.logout();

user.logout();
