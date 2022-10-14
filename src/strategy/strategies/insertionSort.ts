import {ISortingStrategy} from "../sortingStrategy";

export class InsertionSort implements ISortingStrategy {
	public get sortName() {
		return "InsertionSort";
	}

    public sort(numbers: number[]): number[]{
        let result = [];
        result.push(numbers[0])
        for(let i = 0; i < numbers.length; i++) {
            if(i == 0) {

                continue;
            }
            let inserted = false;
            for(let j = 0; j < result.length; j++) {
                if(numbers[i] < result[j]) {
                    console.log(result);
                    result.splice(j, 0, numbers[i]);
                    inserted = true;
                    break;
                }
            }
            if(!inserted) {
                result.push(numbers[i]);
            }
        }
        return result;
    }
}