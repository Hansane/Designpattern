import {Observable} from "../../observable";

export class TemperatureSensor {
    private observable: Observable<number> = new Observable<number>();

    constructor() {
        setInterval(() => {
            this.setTemperature(Math.random() * 100);
        }, 5000)
    }

    setTemperature(value: number) {
        this.observable.publish(value);
    }

    subscribe(func: (value: number) => void) {
        this.observable.subscribe(func);
    }

}