<script setup lang="ts">
import { reactive } from 'vue';
import useAddTask from '../store/Task/actions/useAddTask';
import useDestroyTask from '../store/Task/actions/useDestroyTask';
import useGetAllTasks from '../store/Task/selectors/useGetAllTasks';

const addTask = useAddTask();
const destroyTask = useDestroyTask();
const allTasks = useGetAllTasks();

const newTask = reactive({
  name: '',
  desc: '',
});
</script>


<template>
  <div class="input-form">
    <div class="input-form-name">
      NAME: <input type="text" v-model="newTask.name">
    </div>

    <div class="input-form-desc">
      TEXTAREA: <textarea v-model="newTask.desc"></textarea>
    </div>
    
    <button type="button" @click="addTask(newTask)">CREATE</button>
  </div>

  <table class="task-list">
    <tr>
      <th class="th-id">ID</th>
      <th class="th-name">Name</th>
      <th class="th-desc">Description</th>
      <th class="th-destroy"></th>
    </tr>
    <tr v-for="task in allTasks" :key="task.id">
      <td>{{ task.id }}</td>
      <td>{{ task.name }}</td>
      <td>{{ task.desc }}</td>
      <a class="delete-link" @click="destroyTask(task.id)">DELETE</a>
    </tr>
  </table>
</template>

<style scoped lang="scss">
.input-form {
  background: #F0F0F0;
  padding: 64px;

  .input-form-name, .input-form-desc {
    padding: 12px 0;
  }
}

.task-list {
  margin-top: 12px;

  td td {
    text-align: center;
  }

  .th-id {
    width: 24px;
  }

  .th-name {
    width: 100px;
  }

  .th-desc {
    width: 300px;
  }

  .delete-link {
    cursor: pointer;
  }
}

</style>