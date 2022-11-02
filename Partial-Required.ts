import { User } from "./users";

/**
Partial<Type>
Constructs a type with all properties of Type set to optional
*/

type UserPartial = Partial<User>;
// this is mainly used when typing the props of an input where all the fields are optional
// if we wanted the name of the input to be mandatory, we could do:
type UserPartial_1 = Partial<User> & { name: string }
// while doing some revision, same idea just dropped in now.. we can archive the same result as above like below:
type u1 = Partial<User>;
type u2 = Pick<User, 'name'|'password'>
type uFinal = u1 & u2
// const james: uFinal = {} // un-comment and see the result for yo self!

/**
Partial<Type>
Constructs a type with all properties of Type set to Required, the opposite of Partial
*/

type UserRequired = Required<User>; // we can also do:
type UserRequired_1 = Required<User> & { city?: string} // all options will be required except for city
