import one from "./Asset/dice-1.png";
import two from "./Asset/dice-2.png";
import three from "./Asset/dice-3.png";
import four from "./Asset/dice-4.png";
import five from "./Asset/dice-5.png";
import six from "./Asset/dice-6.png";

export const dices = [one, two, three, four, five, six];


export const rand = (arr) =>{
    return Math.floor(Math.random() * arr.length)
}