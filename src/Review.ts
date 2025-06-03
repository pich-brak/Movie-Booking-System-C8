// review.ts
import { Movie } from './Movie';

export class Review {
  constructor(
    public movie: Movie,
    public rating: number,
    public date: Date,
    public comment: string
  ) {}

  updateComment(newComment: string): void {
    this.comment = newComment;
  }

  updateRating(newRating: number): void {
    this.rating = newRating;
  }

  getReviewSummary(): string {
    return `${this.movie.title} - Rating: ${this.rating}/5 - ${this.comment}`;
  }
}
