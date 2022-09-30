import {Observable} from "../../observable";

export class HumiditySensor {
    private observable: Observable<number> = new Observable<number>();

    constructor() {
        setInterval(() => {
            this.setHumidity(Math.random() * 100);
        }, 69420)
    }

    setHumidity(value: number) {
        this.observable.publish(value);
    }

    subscribe(func: (value: number) => void) {
        this.observable.subscribe(func);
    }
}