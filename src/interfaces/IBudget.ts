import { Decimal } from "decimal.js";
import { Expense } from "@/models";

export interface IBudget {
    id: string;
    description?: string;
    expenses: Expense[];
    income: Decimal;
}