import {ISortingStrategy} from "../sortingStrategy";

export class BubbleSort implements ISortingStrategy {
	public get sortName() {
		return "BubbleSort";
	}

    public sort(numbers: number[]): number[]{
        let swapped = false;

        for(let i = 0; i < numbers.length; i++) {
            if(i >= numbers.length -1) break;
            if(numbers[i] > numbers[i+1]) {
                let num = numbers[i+1];
                numbers[i+1] = numbers[i];
                numbers[i] = num;
                swapped = true;
            }
        }

        if(!swapped) return numbers;
        return this.sort(numbers);
    }
}