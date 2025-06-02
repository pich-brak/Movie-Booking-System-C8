import { Person } from "./Person";
import { Booking } from "./Booking";
import { Review } from "./Review";
import { Movie } from "./Movie";

export class User extends Person {
  private bookings: Booking[] = [];
  private reviews: Review[] = [];
  private password: string;

 

  constructor(id: number, name: string, email: string, password: string) {
    super(id, name, email);
    this.password = password;
  }
}