import { defineStore } from 'pinia';
import { Database } from '@/database';
import { Expense } from '@/models';

const db = new Database();

export const useExpenseStore = defineStore('expenseStore', {
  state: (): { expenses: Expense[] } => ({
    expenses: [],
    // other relevant state properties...
  }),
  actions: {
    async fetchExpenses() {
      this.expenses = await db.getExpenses();
    },
    async addExpense(expense: Expense) {
      const newExpense = await db.addExpense(expense);
      this.expenses.push(newExpense);
    },
    // other actions like updateExpense, deleteExpense...
  },
});
