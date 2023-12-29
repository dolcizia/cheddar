<template>
  <div class="budget-list-item">
    {{ record.name }} - {{ record.amount }} -
    {{ record.recordType }}
  </div>
</template>

<script setup lang="ts">
import { IExpense, IIncome, FinancialRecord } from '@/interfaces';
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
  // Your styles here
}
</style>
