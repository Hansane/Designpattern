import {TemperatureSensor} from "./sensors/temperatureSensor";
import {HumiditySensor} from "./sensors/humiditySensor";
import {PressureSensor} from "./sensors/pressureSensor";
import * as process from "process";
import * as Console from "console";

export  class WeatherStation {

    private temperatureSensor: TemperatureSensor;
    private humiditySensor: HumiditySensor;
    private pressureSensor: PressureSensor;
    private id: number;

    private _temperature: number;
    private _humidity: number;
    private _pressure: number;

    constructor() {
        this.id = Date.now();
        this.temperatureSensor = new TemperatureSensor();
        this.humiditySensor = new HumiditySensor();
        this.pressureSensor = new PressureSensor();

        this.temperatureSensor.subscribe((value: number,) => {
            this._temperature = value;
            this.valuesChanged();
        }, this.id);

        this.humiditySensor.subscribe((value: number) => {
            this._humidity = value;
            this.valuesChanged();
        }, this.id);

        this.pressureSensor.subscribe((value: number) => {
            this._pressure = value;
            this.valuesChanged();
        }, this.id);
    }

    private valuesChanged() {
        console.log("Temperature: " + this._temperature + "°C")
        console.log("Humidity: " + this._humidity + "%")
        console.log("Pressure: " + this._temperature + "hPa")
    }

    get temperature() {
        return this._temperature;
    };

    get humidity() {
        return this._humidity;
    }

    get pressure() {
        return this._pressure;
    }


}