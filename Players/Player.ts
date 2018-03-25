
import { Profile } from "./Profile";

export class Player {
    private id: string;
    private name: string;
    private balance: number;

    
    constructor(name?: string, balance?: number, id?: string) {
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

    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getBalance():number {
        return this.balance;
    }

    toString(): string {
        return "Name: ".concat(this.getName(), " | ", "Balance: ", "+this.balance+");
    } 


}