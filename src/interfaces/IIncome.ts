import Decimal from 'decimal.js';
import { FrequencyTypes } from '@/enums';

export interface IIncome {
  id: string;
  name: string;
  description?: string;
  amount: Decimal;
  frequency: FrequencyTypes;
}
