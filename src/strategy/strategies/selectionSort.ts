import {ISortingStrategy} from "../sortingStrategy";

export class SelectionSort implements ISortingStrategy {
	public get sortName() {
		return "SelectionSort";
	}

    public sort(numbers: number[]): number[] {

        for (let j = 0; j < numbers.length; j++) {
            let highestValue;
            let highestIndex;
            let tempValue;
            for (let i = j; i < numbers.length; i++) {
                const actualNumber = numbers[i]
                if (highestValue === undefined) {
                    highestValue = actualNumber;
                    highestIndex = i;
                }
                else if (actualNumber > highestValue) {
                    highestValue = actualNumber;
                    highestIndex = i;
                }
            }
            if (highestIndex != j) {
                tempValue = [numbers[j], j,  numbers[highestIndex], highestIndex];
                numbers[j] = numbers[highestIndex];
                numbers[highestIndex] = tempValue[0];
            }
        }
        return numbers;
    }
}