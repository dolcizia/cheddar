import { v4 as uuid } from 'uuid';
import Decimal from 'decimal.js';
import { Expense, Budget, Income } from '@/models';
import { ExpenseTypes, FrequencyTypes, RecordTypes } from '@/enums';

const stubExpenses: Expense[] = [
  new Expense({
    id: uuid(),
    name: 'Rent',
    amount: new Decimal(1000),
    dueDate: new Date(),
    type: ExpenseTypes.Bill,
    frequency: FrequencyTypes.Monthly,
    isPaid: false,
    recordType: RecordTypes.Expense,
  }),
  new Expense({
    id: uuid(),
    name: 'Car Payment',
    amount: new Decimal(400),
    dueDate: new Date(),
    type: ExpenseTypes.Bill,
    frequency: FrequencyTypes.Monthly,
    isPaid: false,
    recordType: RecordTypes.Expense,
  }),
  new Expense({
    id: uuid(),
    name: 'Groceries',
    amount: new Decimal(500),
    dueDate: new Date(),
    type: ExpenseTypes.Essential,
    frequency: FrequencyTypes.Monthly,
    isPaid: false,
    recordType: RecordTypes.Expense,
  }),
  new Expense({
    id: uuid(),
    name: 'Gas',
    amount: new Decimal(150),
    dueDate: new Date(),
    type: ExpenseTypes.Essential,
    frequency: FrequencyTypes.Monthly,
    isPaid: false,
    recordType: RecordTypes.Expense,
  }),
  new Expense({
    id: uuid(),
    name: 'Electricity',
    amount: new Decimal(75),
    dueDate: new Date(),
    type: ExpenseTypes.Bill,
    frequency: FrequencyTypes.Monthly,
    isPaid: false,
    recordType: RecordTypes.Expense,
  }),
  new Expense({
    id: uuid(),
    name: 'Garbage',
    amount: new Decimal(50),
    dueDate: new Date(),
    type: ExpenseTypes.Bill,
    frequency: FrequencyTypes.Custom,
    isPaid: false,
    recordType: RecordTypes.Expense,
  }),
];

const stubIncomes: Income[] = [
  new Income({
    id: uuid(),
    name: 'Paycheck',
    amount: new Decimal(2000),
    frequency: FrequencyTypes.BiWeekly,
    recordType: RecordTypes.Income,
  }),
  new Income({
    id: uuid(),
    name: 'Birthday Money',
    description: 'Grandma is the best',
    amount: new Decimal(300),
    frequency: FrequencyTypes.Once,
    recordType: RecordTypes.Income,
  }),
];

const stubBudget: Budget = {
  id: uuid(),
  expenses: stubExpenses,
  incomes: stubIncomes,
};

export class Database {
  private budget: Budget = stubBudget;

  getExpenses() {
    return Promise.resolve(this.budget.expenses);
  }

  getIncomes() {
    return Promise.resolve(this.budget.incomes);
  }

  addExpense(expense: Expense) {
    return Promise.resolve(expense);
  }

  addIncome(income: Income) {
    return Promise.resolve(income);
  }
}
