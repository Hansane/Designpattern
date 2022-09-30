export class Observable<T> {
    private value: T = null;
    private functions: Map<number, (value: T) => void> = new Map;

    publish(value: T): void {
        this.value = value;
        this.functions.forEach(funktion => funktion(value))
    }

    subscribe(func: (value: T) => void, id: number): void {
        this.functions.set(id, func);
    }

    unsubscribe(id: number): void {
        this.functions.delete(id);
    }
}