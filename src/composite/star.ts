import {IMobile} from "./interfaces/mobile";

export class Star implements IMobile {

    constructor(private _weight: number) {

    }

    balance(): void {
    }

    get weight(): number {
        return this._weight;
    }

    toString(): string {
        return "Star["+ this._weight+"]";
    }
}