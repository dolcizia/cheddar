// ExpenseForm.test.ts
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import ExpenseForm from '@/components/ExpenseForm.vue';

describe('ExpenseForm', () => {
  it('renders input fields and submit button', () => {
    const { getByPlaceholderText, getByText } = render(ExpenseForm);
    expect(getByPlaceholderText('Name')).toBeTruthy();
    expect(getByPlaceholderText('Amount')).toBeTruthy();
    expect(getByPlaceholderText('Date')).toBeTruthy();
    expect(getByText('Add')).toBeTruthy();
  });

  it('emits add-expense event on form submission', async () => {
    const { getByPlaceholderText, getByText, emitted } = render(ExpenseForm);
    const nameInput = getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'Test Expense');
    // Fill other fields similarly...

    const addButton = getByText('Add');
    await fireEvent.click(addButton);

    expect(emitted()).toHaveProperty('add-expense');
  });

  // Add more tests...
});
