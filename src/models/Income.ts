import Decimal from 'decimal.js';
import { IIncome } from '@/interfaces';
import { FrequencyTypes } from '@/enums';

export class Income implements IIncome {
  id: string;
  name: string;
  description?: string;
  amount: Decimal;
  frequency: FrequencyTypes;

  constructor(income: IIncome) {
    this.id = income.id;
    this.name = income.name;
    this.description = income.description;
    this.amount = income.amount;
    this.frequency = income.frequency;
  }
}
