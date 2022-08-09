import { User } from "./users";

/**
Omit<Type, Keys>
Constructs a type by picking all Properties from 'Type' and then removing 'Keys' provided as arguments
example below: you can do either 1 or 2 (i.e either 'type' or 'interface')
hover over 'UserProfile' and 'UserProfileInterface' to see what the final result would look like
*/
type UserProfile = Omit<User, "password" | "email">
interface UserProfileInterface extends Omit<User, "password" | "email"> {}


/**
Pick<Type, Keys>
Constructs a type by picking only the set of properties 'Keys' provided as arguments
*/
type userProfilePick = Pick<User, "phone" | "name" | "email">

// this one is from me, you can make every of the value required, you can do either of the 2 below, hover on each type to see the final result
type userProfilePick_1 = Required<userProfilePick>
type userProfilePick_2 = Required<Pick<User, "phone" | "name" | "email">>
type userProfilePick_3 = Partial<userProfilePick>


/**
When should you use Pick or Omit?
With Omit: The thing is if a new property is added to the User interface, they won't be omitted when a new request is made
    e.g let say you add the user bank_account_number, this information you might not want to be exposed, so in this situation, it's best to use pick
So you have to look at what you want and decide which of the functions you'd like to use 
*/