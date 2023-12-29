import Decimal from 'decimal.js';
import { IExpense } from '@/models';
import { ExpenseTypes, FrequencyTypes, RecordTypes } from '@/enums';
export class Expense implements IExpense {
  id: string;
  name: string;
  amount: Decimal;
  type: ExpenseTypes;
  frequency: FrequencyTypes;
  dueDate: Date;
  isPaid: boolean;
  recordType: RecordTypes.Expense;

  constructor(expense: IExpense) {
    this.id = expense.id;
    this.name = expense.name;
    this.amount = expense.amount;
    this.type = expense.type;
    this.frequency = expense.frequency;
    this.dueDate = expense.dueDate;
    this.isPaid = expense.isPaid;
    this.recordType = RecordTypes.Expense;
  }
}
