import { Movie } from './Movie';

export class Cinema {
    private id: number;
    private name: string;
    private location: string;
    private movies: Movie[] = [];

    constructor(id: number, name: string, location: string) {
        this.id = id;
        this.name = name;
        this.location = location;
    }

    public addMovie(movie: Movie): void {
        this.movies.push(movie);
    }

    public getMovies(): Movie[] {
        return this.movies;
    }
}