import Decimal from "decimal.js";
import { IBudget } from "@/interfaces";
import { Expense } from "@/models";

export class Budget implements IBudget {
    id: string;
    description?: string;
    expenses: Expense[];
    income: Decimal;

    constructor(id: string, income: Decimal, expenses: Expense[], description?: string) {
        this.id = id;
        this.description = description;
        this.income = income;
        this.expenses = expenses;
    }
}