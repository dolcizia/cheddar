<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div>
    <li v-for="expense in expenseStore.expenses" :key="expense.id">
      {{ expense.amount }}
    </li>
    <form @submit.prevent="addExpense">
      <input type="number" v-model="newExpense.amount" label="amount" />
      <input type="text" v-model="newExpense.name" label="name" />
      <input type="text" v-model="newExpense.date" label="date" />
      <input type="text" v-model="newExpense.category" label="category" />
      <input type="text" v-model="newExpense.frequency" label="frequency" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Decimal from 'decimal.js';
import { useExpenseStore } from '@/store/ExpenseStore';
import { ExpenseTypes, FrequencyTypes } from './enums';

const expenseStore = useExpenseStore();

const newExpense = ref({
  name: '',
  amount: 0,
  date: new Date(),
  category: ExpenseTypes.Bill,
  frequency: FrequencyTypes.Monthly,
});

const addExpense = async () => {
  await expenseStore.addExpense({
    id: '',
    name: newExpense.value.name,
    amount: new Decimal(newExpense.value.amount),
    dueDate: newExpense.value.date,
    type: newExpense.value.category,
    frequency: newExpense.value.frequency,
    isPaid: false,
  });
  newExpense.value = {
    name: '',
    amount: 0,
    date: new Date(),
    category: ExpenseTypes.Bill,
    frequency: FrequencyTypes.Monthly,
  };
};

onMounted(async () => {
  await expenseStore.fetchExpenses();
});
</script>

<style scoped lang="scss"></style>
