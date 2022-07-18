import { computed } from "vue";
import { useTaskStore } from "..";


export default () => {
  const taskStore = useTaskStore();

  return computed(() => {
    return taskStore?.data;
  })
}