import {Star} from "./star";
import {Wire} from "./wire";

export class MobileSetup {
    constructor() {
        let a: Star = new Star(66);
        let b: Star = new Star(4);
        let c: Star = new Star(2);

        let ab: Wire = new Wire(a,b,999);
        let abc: Wire = new Wire(ab, c, 10);

        abc.balance();
        console.log(abc);
    }
}