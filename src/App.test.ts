import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/vue';
import App from '@/App.vue';
import { createPinia, setActivePinia } from 'pinia';

// Mock the Database class
class MockDatabase {
  async getExpenses() {
    return [
      { id: '1', name: 'Mock Expense 1', amount: 100 },
      { id: '2', name: 'Mock Expense 2', amount: 200 },
    ];
  }

  async addExpense(expense) {
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

describe('App', () => {
  it('renders properly', () => {
    setActivePinia(createPinia());
    const { getByText } = render(App);
    expect(getByText('Hello Vue 3')).toBeTruthy();
  });
});
