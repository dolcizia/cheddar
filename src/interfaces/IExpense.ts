import Decimal from 'decimal.js'
import { ExpenseTypes, FrequencyTypes } from '@/enums';

export interface IExpense {
    id: string;
    name: string
    description?: string;
    amount: Decimal;
    dueDate: Date;
    type: ExpenseTypes;
    frequency: FrequencyTypes;
    isPaid: boolean;
}