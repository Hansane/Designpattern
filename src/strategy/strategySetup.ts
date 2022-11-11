import { Numbers } from "./numbers";
import { ISortingStrategy } from "./sortingStrategy";
import { BubbleSort } from "./strategies/bubbleSort";
import { InsertionSort } from "./strategies/insertionSort";
import { QuickSort } from "./strategies/quickSort";
import { SelectionSort } from "./strategies/selectionSort";

export class StrategySetup {
	constructor() {

		let numArr = []

		for(let i = 0; i < 6466; i++) {
			numArr.push(i);
		}

		let numbers = new Numbers(numArr);
		let strategies: ISortingStrategy[] = [
			new BubbleSort(),
			new InsertionSort(),
			new QuickSort(),
			new SelectionSort()
		]

		for (const strategy of strategies) {
			numbers.setStrategy(strategy);
			let time = performance.now()
			numbers.sort();
			console.log(`[${strategy.sortName}] Time needed: ${performance.now() - time}ms`);
		}
	}
}