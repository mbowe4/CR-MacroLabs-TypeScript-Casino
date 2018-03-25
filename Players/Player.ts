
import { Profile } from "./Profile";

export class Player {
    private id: string;
    private name: string;
    private balance: string;

    
    constructor(name?: string, balance?: string, id?: string) {
        this.setId(id);
        this.setName(name);
        this.balance = balance;
    }

    public getId() {
        return this.id;
    }

    public setId(id: string) {
        this.id = id;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getBalance() {
        return this.balance;
    }


}