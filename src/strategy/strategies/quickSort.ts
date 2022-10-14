import { ISortingStrategy } from "../sortingStrategy";

export class QuickSort implements ISortingStrategy {
	public get sortName() {
		return "QuickSort";
	}

	public sort(numbers: number[]): number[] {
		return this.quicksort(numbers, 0, numbers.length - 1);
	}

	private quicksort(numbers: number[], left: number, right: number) {
		if (left < right) {
			let teiler = this.teile(numbers, left, right);
			this.quicksort(numbers, left, teiler - 1);
			this.quicksort(numbers, teiler + 1, right);
		}

		return numbers;
	}

	private teile(numbers: number[], left: number, right: number) {
		let i = left;
		let j = right - 1;
		let pivot = numbers[right];

		while (i < j) {
			while (i < j && numbers[i] <= pivot) {
				i = i + 1;
			}

			while (j > i && numbers[j] > pivot) {
				j = j - 1;
			}

			if (numbers[i] > numbers[j]) {
				let temp = numbers[i];
				numbers[i] = numbers[j];
				numbers[j] = temp;
			}
		}

		if (numbers[i] > pivot) {
			let temp = numbers[i];
			numbers[i] = numbers[right];
			numbers[right] = temp;
		} else {
			i = right;
		}

		return i;
	}
}