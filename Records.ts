import { User } from "./users";

/**
Record<Key, Type>
Constructs an object type whose property keys are Keys and whose property values are Type.
This utility can be used to map the properties of a Type to another Type
This utility is mainly used for objects, but the teacher says he uses it a lot when writing a reduce function
examples below:
*/

const users: Record<string, number> = {
    'age': 25,
    'year-of-birth':1993,
    'target-age-to-live-before-death':120, // only if my wife is alive until then
}

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
    {
        name: "Meat pie",
        price: 350
    },
    {
        name: "Donut",
        price: 150
    }
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
        current,
        index
    ) => {
        accumulator[String(index)] = {
            ...current,
        }
        return accumulator
}, {})

console.log(result_2)
