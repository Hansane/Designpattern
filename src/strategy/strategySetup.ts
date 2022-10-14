import {Numbers} from "./numbers";
import {BubbleSort} from "./strategies/bubbleSort";

export class StrategySetup {
    constructor() {
        let strategy = new BubbleSort();
        let numbers = new Numbers([1,4,5,7,89,2,96,2,3,9,3,444]);
        numbers.setStrategy(strategy);
        console.log("Sorted number: " + numbers.sort());
    }
}