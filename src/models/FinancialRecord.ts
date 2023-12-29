import Decimal from 'decimal.js';
import { ExpenseTypes, FrequencyTypes, RecordTypes } from '@/enums';

export interface IExpense {
  id: string;
  name: string;
  description?: string;
  amount: Decimal;
  dueDate: Date;
  type: ExpenseTypes;
  frequency: FrequencyTypes;
  isPaid: boolean;
  recordType: RecordTypes.Expense;
}

export interface IIncome {
  id: string;
  name: string;
  description?: string;
  amount: Decimal;
  frequency: FrequencyTypes;
  recordType: RecordTypes.Income;
}

export type FinancialRecord = IExpense | IIncome;
