import Decimal from 'decimal.js';
import { IIncome } from '@/models';
import { FrequencyTypes, RecordTypes } from '@/enums';

export class Income implements IIncome {
  id: string;
  name: string;
  description?: string;
  amount: Decimal;
  frequency: FrequencyTypes;
  recordType: RecordTypes.Income;

  constructor(income: IIncome) {
    this.id = income.id;
    this.name = income.name;
    this.description = income.description;
    this.amount = income.amount;
    this.frequency = income.frequency;
    this.recordType = RecordTypes.Income;
  }
}
