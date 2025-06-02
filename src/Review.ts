class MovieReview {
    constructor(
        public movie: Movie,
        public rating: number,
        public comment: string,
        public date: Date
    ) {}

    editComment(newComment: string): void {
        this.comment = newComment;
    }

    updateRating(newRating: number): void {
        this.rating = newRating;
    }

    getReviewSummary(): string {
        return `${this.movie.title}: ${this.rating}/5 - ${this.comment}`;
    }
}