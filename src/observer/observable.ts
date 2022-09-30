export class Observable<T> {
    private value: T = null;
    private functions: ((value: T) => void)[] = [];

    publish(value: T): void {
        this.value = value;
        for(const func of this.functions) {
            func(value);
        }
    }

    subscribe(func: (value: T) => void): void {
        this.functions.push(func);
    }
}