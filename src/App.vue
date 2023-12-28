<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div>
    <div v-for="expense in expenseStore.expenses" :key="expense.id">
      {{ expense.name }} -
      {{ expense.amount }}
      {{ expense.dueDate }}
      {{ expense.type }}
      {{ expense.frequency }}
      {{ expense.isPaid }}
    </div>
    <ExpenseForm @add-expense="addExpense" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useExpenseStore } from '@/store/ExpenseStore';
import { Expense } from '@/models';
import ExpenseForm from './components/ExpenseForm.vue';

const expenseStore = useExpenseStore();

const addExpense = async (expense: Expense) => {
  await expenseStore.addExpense(expense);
};

onMounted(async () => {
  await expenseStore.fetchExpenses();
});
</script>

<style scoped lang="scss"></style>
