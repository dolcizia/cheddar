import { Expense, Income } from '@/models';

export interface IBudget {
  id: string;
  description?: string;
  expenses: Expense[];
  incomes: Income[];
}
