import { useTaskStore } from '../index.ts';

export default () => {
  const taskStore = useTaskStore();

  return (id: number) => {
    taskStore?.data.forEach((task, i) => {
      if (task.id === id) taskStore?.data.splice(i, 1);
    });
  };
};
