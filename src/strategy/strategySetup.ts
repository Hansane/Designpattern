import { Numbers } from "./numbers";
import { ISortingStrategy } from "./sortingStrategy";
import { BubbleSort } from "./strategies/bubbleSort";
import { InsertionSort } from "./strategies/insertionSort";
import { QuickSort } from "./strategies/quickSort";
import { SelectionSort } from "./strategies/selectionSort";

export class StrategySetup {
	constructor() {
		let numbers = new Numbers([1, 4, 5, 7, 89, 2, 96, 2, 3, 9, 3, 444, 69]);
		let strategies: ISortingStrategy[] = [
			new BubbleSort(),
			new InsertionSort(),
			new QuickSort(),
			new SelectionSort()
		]

		for (const strategy of strategies) {
			numbers.setStrategy(strategy);
			console.log(`[${strategy.sortName}] Sorted number: ${numbers.sort()}`);
		}
	}
}