import { first } from 'rxjs/operators';

export class User {
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    constructor(fn: string, ln : string, el: string, pw: string) {
        this.firstName = fn;
        this.lastName = ln;
        this.email = el;
        this.password = pw;
    }
}
