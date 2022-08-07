import { User } from "./users";

/**
Parameters<Type>
Constructs a tuple type from the types used in the parameters of a function type Type
*/
function createUser(username: string, password: string) {
    return {username, password}
}

// hover over createUserInput to see the result
type CreateUserInput = Parameters<typeof createUser>;

const data: CreateUserInput = ["stanley", "123456789"]

// call the function below
createUser(...data) // destructure the array and leaves u with something like createUser("stanley", "123456789")

// another example using an object

/**
ReturnType<Type>
Constructs a type consisting of the return type of function Type
*/