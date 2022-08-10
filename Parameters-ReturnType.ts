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




/**
So the teacher showed another example using an object
hover on all answers below to see their results, but the answer i want is ('createUserInput_2' or 'createUserInput_3') they are both the same but 'createUserInput_3' looks more typescript-eee.
the result of CreateUserInput_2 and CreateUserInput_3 and the same. but remember that anytime you use number, a looping across all values of the array or object will occur

But the explanation of the answer below is, if the argument of the function is an object and we wanted the 'Parameters' type to be an object, just attach '[]' at the end when you
call 'Parameters'.
*/
function createUser_1 ({username, password}: {username: string, password: string}) {
    return {username, password, secret:true}
}

type CreateUserInput_0 = Parameters<typeof createUser_1>;
type CreateUserInput_1 = Parameters<typeof createUser_1>[];
type CreateUserInput_2 = Parameters<typeof createUser_1>[0];
type CreateUserInput_3 = Parameters<typeof createUser_1>[number];

const data_2: CreateUserInput_2 = {username:'stanley', password:'123456789'}
createUser_1(data_2)


/**
ReturnType<Type>
Constructs a type consisting of the return type of function Type, i.e based on, as usual hover over both answers to see their results
*/

type CreateUserResult = ReturnType<typeof createUser>
type CreateUserResult_1 = ReturnType<typeof createUser_1>

// if you have an sync function, do the below, CreateUserResult_3 is the right answer, but over over both answers to see the difference
async function createUser_2 ({username, password}: {username: string, password: string}) {
    return {username, password, secret:true}
}
type CreateUserResult_2 = ReturnType<typeof createUser_2>
type CreateUserResult_3 = Awaited<ReturnType<typeof createUser_2>>
