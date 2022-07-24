import { computed } from 'vue';
import { useTaskStore } from '../index.ts';

export default () => {
  const taskStore = useTaskStore();

  return computed(() => taskStore?.data);
};
