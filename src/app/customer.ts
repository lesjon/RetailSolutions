export class Customer {
  id: string;
  firstName: string;
  lastName: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  email: string;
  points: number;
  constructor(id: string, firstName: string, lastName: string, street: string, houseNumber: string, zipCode: string, city: string, email: string, points: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.houseNumber = houseNumber;
    this.zipCode = zipCode;
    this.city = city;
    this.email = email;
    this.points = points;
  }

  clear() {
    this.id = '';
    this.firstName = '';
    this.lastName = '';
    this.street = '';
    this.houseNumber = '';
    this.zipCode = '';
    this.city = '';
    this.email = '';
    this.points = 0;
  }
}
