import { useTaskStore } from '../index';

export default () => {
  const taskStore = useTaskStore();

  return (obj: { name: string, desc: string }) => {
    const last = taskStore?.data.slice(-1)[0];
    const newId = last ? last.id + 1 : 1;
    const newData = {
      id: newId,
      name: obj.name,
      desc: obj.desc,
    };
    obj.name = obj.desc = '';

    taskStore?.data.push(newData);
  };
};
