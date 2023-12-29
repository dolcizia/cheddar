<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div>
    <BudgetListItem
      v-for="expense in expenseStore.expenses"
      :key="expense.id"
      :record="expense"
    />
    <ExpenseForm @add-expense="addExpense" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useExpenseStore } from '@/store/ExpenseStore';
import { Expense } from '@/models';
import ExpenseForm from './components/ExpenseForm.vue';
import BudgetListItem from './components/BudgetListItem.vue';

const expenseStore = useExpenseStore();

const addExpense = async (expense: Expense) => {
  await expenseStore.addExpense(expense);
};

onMounted(async () => {
  await expenseStore.fetchExpenses();
});
</script>

<style scoped lang="scss"></style>
