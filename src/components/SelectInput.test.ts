import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/vue';
import SelectInput from '@/components/SelectInput.vue';

describe('SelectInput', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  it('renders all options passed to it', () => {
    const { getByText } = render(SelectInput, {
      props: { options, modelValue: '' },
    });

    options.forEach((optionText) => {
      expect(getByText(optionText)).toBeInTheDocument();
    });
  });

  it('emits update:modelValue event when an option is selected', async () => {
    const { getByRole, emitted } = render(SelectInput, {
      props: { options, modelValue: '' },
    });

    const select = getByRole('combobox');
    await fireEvent.update(select, 'Option 2');

    expect(emitted()).toHaveProperty('update:modelValue');
    expect(emitted()['update:modelValue'][0]).toEqual(['Option 2']);
  });
});
