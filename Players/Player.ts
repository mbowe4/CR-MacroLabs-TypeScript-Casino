
import { Profile } from "./Profile";

export class Player {
    private id: String;
    private name: String;
    private balance: String;

    
    constructor(name: String, balance: String, id?: String) {
        this.setId(id);
        this.setName(name);
        this.balance = balance;
    }

    public getId() {
        return this.id;
    }

    public setId(id: String) {
        this.id = id;
    }

    public getName() {
        return this.name;
    }

    public setName(name: String) {
        this.name = name;
    }

    public getBalance() {
        return this.balance;
    }


}