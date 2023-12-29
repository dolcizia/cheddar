<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <div class="cheddar">
    <BudgetList />
    <ExpenseForm @add-expense="addExpense" />
  </div>
</template>

<script setup lang="ts">
import { Expense } from '@/models';
import { useExpenseStore } from '@/store/ExpenseStore';
import BudgetList from '@/components/BudgetList.vue';
import ExpenseForm from '@/components/ExpenseForm.vue';

const expenseStore = useExpenseStore();

const addExpense = async (expense: Expense) => {
  await expenseStore.addExpense(expense);
};
</script>

<style scoped lang="scss">
.cheddar {
  background-color: #2e2e2e;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
}
</style>
