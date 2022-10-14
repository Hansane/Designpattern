import { ISortingStrategy } from "../sortingStrategy";

export class InsertionSort implements ISortingStrategy {
	public get sortName() {
		return "InsertionSort";
	}

	public sort(numbers: number[]): number[] {
		return numbers;
	}
}