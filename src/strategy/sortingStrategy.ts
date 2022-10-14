export interface ISortingStrategy {
	get sortName();

	sort(numbers: number[]): number[];
}