// movie.ts
import { Review } from './Review';
import { Showtime } from './Showtime';

export class Movie {
  reviews: Review[] = [];

  constructor(
    public movieID: number,
    public title: string,
    public genre: string,
    public releaseDate: string,
    public duration: number,
    public rating: number
  ) {}

  addReview(review: Review): void {
    this.reviews.push(review);
  }

  getAverageRating(): number {
    const sum = this.reviews.reduce((acc, r) => acc + r.rating, 0);
    return this.reviews.length ? sum / this.reviews.length : 0;
  }

  getShowtimes(): Showtime[] {
    return [];
  }

  isShowing(currentDate: Date): boolean {
    return new Date(this.releaseDate) <= currentDate;
  }
}
