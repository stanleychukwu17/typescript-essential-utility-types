import { User } from "./Users";

/**
Omit<Type, Keys>
Constructs a type by picking all Properties from 'Type' and then removing 'Keys' {string literal or union of string literals}
example below: you can do either 1 or 2 (i.e either type of interface)
*/
type UserProfile = Omit<User, "password" | "email">
interface UserProfileInterface extends Omit<User, "password" | "email"> {}


/**
Pick<Type, Keys>
Constructs a type by picking the set of properties 'Keys' {string literal or union of string literals}
*/
type userProfilePick = Pick<User, "phone" | "name" | "email">

/**
When should you use Pick or Omit?
With Omit: The thing is if a new property is added the the User interface, they won't be omitted
    e.g let say you add the user account_number, that information you might not want to be exposed, so in this situation, it's best to use pick
So you have to look at what you want and decide which of the functions you'd like to use 
*/