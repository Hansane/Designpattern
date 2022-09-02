import {IMobile} from "./interfaces/mobile";

export class Wire implements IMobile {

    private lengthFirst: number;
    private lengthSecond: number;

    constructor(private first: IMobile, private second: IMobile, length: number) {
        this.lengthFirst = 0;
        this.lengthSecond = length;
    }

    balance(): void {
       this.first.balance();
       this.second.balance();

       let weight1 = this.first.weight;
       let weight2 = this.second.weight;

       let length = this.lengthFirst + this.lengthSecond;
       this.lengthFirst = weight2 * length / (weight1 + weight2);
       this.lengthSecond = length - this.lengthFirst;
    }

    get weight(): number {
        return this.first.weight + this.second.weight;
    }

    toString(): string {
        return "Mobile:("+ this.lengthFirst +": "+ this.first.toString() +
            ", " +this.lengthSecond+": "+ this.second.toString()+")";
    }

}