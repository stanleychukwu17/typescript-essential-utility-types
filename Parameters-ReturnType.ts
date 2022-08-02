import { User } from "./Users";

/**
Parameters<Type>
Constructs a tuple type from the types used in the parameters of a function type Type
*/
function createUser(username: string, password: string) {
    return {username, password}
}

type CreateUserInput = Parameters<typeof createUser>;

const data: CreateUserInput = ["stanley", "123456789"]

// call the function below
createUser(...data)

// another example using an object

/**
ReturnType<Type>
Constructs a type consisting of the return type of function Type
*/