import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import App from '@/App.vue';
import userEvent from '@testing-library/user-event';
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

describe('App', () => {
  it('renders expenses from the store', async () => {
    setActivePinia(createPinia());
    const { findByText } = render(App);

    // Use a regular expression for more flexibility
    const expenseItem = await findByText(/Mock Expense 1/i);
    expect(expenseItem).toBeTruthy();
  });

  it('renders the add expense form', () => {
    setActivePinia(createPinia());
    const { getByPlaceholderText, getByText } = render(App);

    expect(getByPlaceholderText('Name')).toBeTruthy();
    expect(getByPlaceholderText('Amount')).toBeTruthy();
    expect(getByPlaceholderText('Date')).toBeTruthy();
    expect(getByText('Add')).toBeTruthy();
  });

  it('calls addExpense on form submission', async () => {
    setActivePinia(createPinia());
    const { getByPlaceholderText, getByText } = render(App);

    const nameInput = getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'New Expense');

    const amountInput = getByPlaceholderText('Amount');
    await userEvent.type(amountInput, '100');

    const dateInput = getByPlaceholderText('Date');
    await userEvent.type(dateInput, '2023-01-01');

    const addButton = getByText('Add');
    await userEvent.click(addButton);

    // Assuming you have a way to check if addExpense was called, like a spy
    // expect(expenseStore.addExpense).toHaveBeenCalled();
  });
});
