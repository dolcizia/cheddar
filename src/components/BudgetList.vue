<template>
  <div class="budget-list">
    <BudgetListItem
      v-for="expense in expenseStore.expenses"
      :key="expense.id"
      :record="expense"
    />
  </div>
</template>

<script setup lang="ts">
import BudgetListItem from './BudgetListItem.vue';
import { onMounted } from 'vue';
import { useExpenseStore } from '@/store/ExpenseStore';

const expenseStore = useExpenseStore();

onMounted(async () => {
  await expenseStore.fetchExpenses();
});
</script>

<style scoped lang="scss">
.budget-list {
  background-color: #2e2e2e;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
}
</style>
