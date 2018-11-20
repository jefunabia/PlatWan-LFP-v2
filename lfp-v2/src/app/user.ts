export class User {
    constructor(
        public email: string,
        public username: string,
        public displayName: string,
        public password: string,
        public confirmPassword: string
    ){}
}
