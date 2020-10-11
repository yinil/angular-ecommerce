export class LoginRequestModel {
    email : string;
    password : string;
    constructor(e, p) {
        this.email = e;
        this.password = p;
    }
}
