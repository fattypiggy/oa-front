export class Employee implements Serializable<Employee>{
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
    tooltip?: string
    deserialize(input) {
        this.id = input.id;
        this.name = input.name;
        this.username = input.username;
        this.email = input.email;
        this.address = new Address().deserialize(input.address);
        this.phone = input.phone;
        this.website = input.website;
        this.company = new Company().deserialize(input.company);
        return this;
    }
}

class Address implements Serializable<Address>{
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
    deserialize(input) {
        this.street = input.street;
        this.suite = input.suite;
        this.city = input.city;
        this.zipcode = input.zipcode;
        this.geo = new Geo().deserialize(input.geo);
        return this;
    }
}
class Geo implements Serializable<Geo>{
    lat: number
    lng: number
    deserialize(input) {
        this.lat = input.lat;
        this.lng = input.lng;
        return this;
    }
}
class Company implements Serializable<Company> {
    name: string
    catchPhrase: string
    bs: string
    deserialize(input) {
        this.name = input.name;
        this.catchPhrase = input.catchPhrase;
        this.bs = input.bs;
        return this;
    }
}
interface Serializable<T> {
    deserialize(input: Object): T;
}