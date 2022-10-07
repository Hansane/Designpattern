import {Observable} from "../../observable";

export class PressureSensor {
    private observable: Observable<number> = new Observable<number>();

    constructor() {
        setInterval(() => {
            this.setPressure(Math.random() * 1000);
        }, 10000)
    }

    setPressure(value: number) {
        this.observable.publish(value);
    }

    subscribe(func: (value: number) => void, id: number) {
        this.observable.subscribe(func, id);
    }

    unsubscribe(id: number) {
        this.observable.unsubscribe(id)
    }
}