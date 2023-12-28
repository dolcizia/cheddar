import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import App from '@/App.vue';

describe('App', () => {
  it('renders expenses from the store', async () => {
    setActivePinia(createPinia());
    const { findByText } = render(App);

    // Use a regular expression for more flexibility
    const expenseItem = await findByText(/Mock Expense 1/i);
    expect(expenseItem).toBeTruthy();
  });
});
