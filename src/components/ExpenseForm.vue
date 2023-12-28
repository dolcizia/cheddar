<template>
  <form @submit.prevent="submitExpense">
    <input type="text" v-model="localExpense.name" placeholder="Name" />
    <input type="number" v-model="localExpense.amount" placeholder="Amount" />
    <input type="date" v-model="localExpense.date" placeholder="Date" />
    <SelectInput
      v-model="localExpense.category"
      :options="expenseTypeOptions"
    />
    <SelectInput
      v-model="localExpense.frequency"
      :options="frequencyTypeOptions"
    />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Decimal from 'decimal.js';
import { ExpenseTypes, FrequencyTypes } from '@/enums';
import SelectInput from './SelectInput.vue';

const emit = defineEmits(['add-expense']);

const localExpense = ref({
  name: '',
  amount: 0,
  date: new Date(),
  category: ExpenseTypes.Bill,
  frequency: FrequencyTypes.Once,
});

const expenseTypeOptions = Object.values(ExpenseTypes);
const frequencyTypeOptions = Object.values(FrequencyTypes);

const submitExpense = () => {
  emit('add-expense', {
    ...localExpense.value,
    amount: new Decimal(localExpense.value.amount),
    isPaid: false,
  });

  // Reset the form
  localExpense.value = {
    name: '',
    amount: 0,
    date: new Date(),
    category: ExpenseTypes.Bill,
    frequency: FrequencyTypes.Once,
  };
};
</script>
