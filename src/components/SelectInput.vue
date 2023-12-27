<template>
  <div class="select-input">
    <select v-model="selectedValue">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const selectedValue = ref(props.modelValue);

// Emit update event when selection changes
const emit = defineEmits(['update:modelValue']);
watch(selectedValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style scoped lang="scss">
.select-input {
  // Your styles here
}
</style>
