import { inject, provide, reactive } from 'vue';

const TASKS_STORE_KEY = 'tasks-store';

export type TaskType = {
  id: number,
  name: string,
  desc: string,
}

type TaskStoreType = {
  data: TaskType[];
}

const initialData: TaskType = {
  id: 1,
  name: 'sample',
  desc: 'this is a sample data',
};

export const provideTask = () => {
  const state = reactive<TaskStoreType>({
    data: [] as TaskType[],
  });

  state.data.push(initialData);
  provide(TASKS_STORE_KEY, state);
};

export const useTaskStore = () => inject<TaskStoreType>(TASKS_STORE_KEY);
