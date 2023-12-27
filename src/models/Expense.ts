import Decimal from 'decimal.js';
import { IExpense } from '@/interfaces';
import { ExpenseTypes, FrequencyTypes } from '@/enums';
export class Expense implements IExpense {
  public id: string;
  public name: string;
  public amount: Decimal;
  public type: ExpenseTypes;
  public frequency: FrequencyTypes;
  public dueDate: Date;
  public isPaid: boolean;

  constructor(expense: IExpense) {
    this.id = expense.id;
    this.name = expense.name;
    this.amount = expense.amount;
    this.type = expense.type;
    this.frequency = expense.frequency;
    this.dueDate = expense.dueDate;
    this.isPaid = expense.isPaid;
  }
}
