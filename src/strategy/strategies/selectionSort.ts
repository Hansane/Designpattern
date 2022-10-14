import { ISortingStrategy } from "../sortingStrategy";

export class SelectionSort implements ISortingStrategy {
	public get sortName() {
		return "SelectionSort";
	}

	public sort(numbers: number[]): number[] {
		return numbers;
	}
}