import { ISortingStrategy } from "../sortingStrategy";

export class BubbleSort implements ISortingStrategy {
	public get sortName() {
		return "BubbleSort";
	}

	public sort(numbers: number[]): number[] {
		return numbers;
	}
}