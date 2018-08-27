// export class User {
//     constructor(
//         public id?: string,
//       public email?: string,
//       public password?: string,
//       public name?: string
//     ) {}
//   }

//   export class UserExtrat {
//     constructor(
//       public firstname?: string,
//       public lastname?: string,
//       public address?: string,
//       public city?: string,
//       public state?: string,
//       public postalcode?: string
//     ) {}
//   }

  export interface IUser{
    id: string;
    email: string;
    password: string;
    name: string;
  }