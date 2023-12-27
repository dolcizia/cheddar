import { IBudget } from '@/interfaces';
import { Expense, Income } from '@/models';

export class Budget implements IBudget {
  id: string;
  description?: string;
  expenses: Expense[];
  incomes: Income[];

  constructor(
    id: string,
    income: Income[],
    expenses: Expense[],
    description?: string,
  ) {
    this.id = id;
    this.description = description;
    this.incomes = income;
    this.expenses = expenses;
  }
}
