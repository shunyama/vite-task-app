import { useTaskStore, TaskType } from '../index';


export default () => {
  const taskStore = useTaskStore();

  return (obj: { name: string, desc: string }) => {
    const newId = taskStore?.data.length + 1;
    const newData = {
      id: newId,
      name: obj.name,
      desc: obj.desc,
    }
    obj.name = obj.desc = '';

    taskStore?.data.push(newData);
  }
}
