import {ISortingStrategy} from "./sortingStrategy";

export class Numbers {

    private sortingStrategy: ISortingStrategy;

    constructor(public numbers: number[]) {
    }

    public setStrategy(strategy: ISortingStrategy) {
        this.sortingStrategy = strategy;
    }

    public sort(): number[] {
        return this.numbers = this.sortingStrategy?.sort(this.numbers) ?? this.numbers;
    }
}