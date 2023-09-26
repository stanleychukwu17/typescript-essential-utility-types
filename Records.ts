import { User } from "./users";

/**
Record<Key, Type>
Constructs an object type whose property keys are Keys and whose property values are Type.
This utility can be used to map the types of one object to another object
This utility is mainly used for objects, but the teacher says he uses it a lot when writing a reduce function
examples below:
*/

// Record<string, number> means we want an object which it's 'keys' are 'type of string' and it's 'values' are 'type of number'
const users: Record<string, number> = {
    'age': 23,
    'year-of-birth':1993,
    'target-age-to-live-before-death':120, // only if my wife is alive until then
}

// Record<string, {name: string, age: number}> means we want an object where the 'key is a string' and the 'value is an object',
// the object in turn should contain 'precise keys of name and age', then the values should be of type 'spring and number'
const data: Record<string, {
    name: string,
    age: number
}> = {
    'firstPerson': {
        age: 25,
        name: 'stanley'
    }
}

/**
Using it in a reduce function
Lets say we wanted to convert the array below to an object using the reduce function
*/
const snacks = [
    {name: "Meat pie", price: 350},// boy things have gone up now, meat-pie is now #500
    {name: "Donut", price: 150} // and donut is now #200
]

// hope you'll understand what we've done below
const result = snacks.reduce((
        accumulator: Record<string, {name:string, price:number}>,
        current,
        index
    ) => {
        accumulator[String(index)] = {
            ...current,
        }
        return accumulator
}, {})

console.log(result)

// let me refactor the code above: to below:
type snacksProps = {
    name: string, price: number
}
const snacks_2:snacksProps[] = [
    {
        name: "Meat pie",
        price: 350
    },
    {
        name: "Donut",
        price: 150
    }
]

const result_2 = snacks.reduce((
        accumulator: Record<string, snacksProps>,
        current: snacksProps, // hover over current from the example above(i.e the teacher's example) to see it's value
        index: number
    ) => {
        accumulator[String(index)] = {
            ...current,
        }
        return accumulator
}, {})

console.log(result_2)