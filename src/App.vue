<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div>
    <p>Hello Vue 3</p>
    <div v-for="expense in expenseStore.expenses" :key="expense.id">
      {{ expense.name }} -
      {{ expense.amount }}
      {{ expense.dueDate }}
      {{ expense.type }}
      {{ expense.frequency }}
      {{ expense.isPaid }}
    </div>
    <form @submit.prevent="addExpense">
      <input type="text" v-model="newExpense.name" placeholder="Name" />
      <input type="number" v-model="newExpense.amount" placeholder="Amount" />
      <input type="date" v-model="newExpense.date" placeholder="Date" />
      <SelectInput
        v-model="newExpense.category"
        :options="expenseTypeOptions"
      />
      <SelectInput
        v-model="newExpense.frequency"
        :options="frequencyTypeOptions"
      />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Decimal from 'decimal.js';
import { useExpenseStore } from '@/store/ExpenseStore';
import { ExpenseTypes, FrequencyTypes } from './enums';
import SelectInput from './components/SelectInput.vue';

const expenseStore = useExpenseStore();
const selectedExpenseType = ref(ExpenseTypes.Bill);
const expenseTypeOptions = Object.values(ExpenseTypes);

const selectedFrequencyType = ref(FrequencyTypes.Once);
const frequencyTypeOptions = Object.values(FrequencyTypes);

const newExpense = ref({
  name: '',
  amount: 0,
  date: new Date(),
  category: selectedExpenseType.value,
  frequency: selectedFrequencyType.value,
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
