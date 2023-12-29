<template>
  <div class="budget-list-item">
    {{ record.name }} - {{ record.amount }} -
    {{ record.recordType }}
  </div>
</template>

<script setup lang="ts">
import { IExpense, IIncome, FinancialRecord } from '@/models';
import { RecordTypes } from '@/enums';

const props = defineProps({
  record: {
    type: Object as () => FinancialRecord,
    required: true,
  },
});

function isExpense(record: FinancialRecord): record is IExpense {
  return record.recordType === RecordTypes.Expense;
}

function isIncome(record: FinancialRecord): record is IIncome {
  return record.recordType === RecordTypes.Income;
}
</script>

<style scoped lang="scss">
.budget-list-item {
  background-color: #2e2e2e;
  border: 1px solid black;
  border-radius: 0.5rem;
  display: flex;
  margin: 0.5rem;
  padding: 0.5rem;
}
</style>
