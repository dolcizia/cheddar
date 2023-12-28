import { vi } from 'vitest';
import { Expense } from '@/models';

// Mock the Database class
class MockDatabase {
  async getExpenses() {
    return [
      { id: '1', name: 'Mock Expense 1', amount: 100 },
      { id: '2', name: 'Mock Expense 2', amount: 200 },
    ];
  }

  async addExpense(expense: Expense) {
    return expense;
  }
}

vi.mock('@/database', () => ({
  Database: MockDatabase,
}));

// Define the mock store outside of vi.mock
const mockExpenseStore = () => ({
  expenses: [{ id: '1', name: 'Mock Expense 1', amount: 100 }],
  fetchExpenses: vi.fn(async () => {
    // Mock implementation that sets the expenses
    // Assuming this is what your actual fetchExpenses does
    this.expenses = await new MockDatabase().getExpenses();
  }),
  addExpense: vi.fn(async (expense) => {
    // Mock implementation for addExpense
    return Promise.resolve(expense);
  }),
  // Add other properties and actions as necessary
});

vi.mock('@/store/ExpenseStore', () => ({
  useExpenseStore: () => mockExpenseStore(),
}));
