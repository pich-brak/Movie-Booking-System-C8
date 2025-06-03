import { Movie } from "./Movie";

export class Review {
  
  private movie: Movie | undefined;
  private rating: number;
  private comment: string;
  private date: Date;
  user: any;

  constructor(rating: number, comment: string) {
    this.rating = rating;
    this.comment = comment;
    this.date = new Date();
  }

  editComment(newComment: string): void {
    this.comment = newComment;
    this.date = new Date(); // Update date when comment is changed
    console.log(`Comment updated: "${newComment}"`);
  }

  updateRating(newRating: number): void {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
      this.date = new Date(); // Update date when rating is changed
      console.log(`Rating updated to: ${newRating}`);
    } else {
      console.log("Rating must be between 0 and 5.");
    }
  }

  getReviewSummary(): string {
    const movieTitle = this.movie ? this.movie.getTitle() : "Unknown Movie";
    return `Review by ${this.user.constructor.name} for "${movieTitle}": ${this.rating}/5 - "${this.comment}" [${this.date.toLocaleString()}]`;
  }
}
