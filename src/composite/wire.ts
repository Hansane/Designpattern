import {IMobile} from "./interfaces/mobile";

export class Wire implements IMobile {

    private lengthFirst: number = 0;
    private lengthSecond: number = 0;

    constructor(private first: IMobile, private second: IMobile, private totalLength: number) {
    }

    balance(): void {
       this.first.balance();
       this.second.balance();

       this.lengthFirst = this.second.weight * this.totalLength / (this.first.weight + this.second.weight);
       this.lengthSecond = this.totalLength - this.lengthFirst;
    }

    get weight(): number {
        return this.first.weight + this.second.weight;
    }

    toString(): string {
        return "Mobile:("+ this.lengthFirst +": "+ this.first.toString() +
            ", " +this.lengthSecond+": "+ this.second.toString()+")";
    }

}