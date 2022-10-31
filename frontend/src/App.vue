<script setup>
import { ref } from 'vue'
import TaskCard from "./components/TaskCard.vue"

const tasks = ref([
  { id: 1, name: 'task1', completed: false },
  { id: 2, name: 'task2', completed: false },
  { id: 3, name: 'task3', completed: true },
  { id: 4, name: 'task4', completed: false },
]);

function OnTaskToggle(taskId) {
  let taskToToggle = tasks.value.find(t => t.id === taskId);
  taskToToggle.completed = !taskToToggle.completed;
}

function OnTaskRename(taskId, newName) {
  let taskToRename = tasks.value.find(t => t.id === taskId);
  taskToRename.name = newName;
}

function OnTaskDelete(taskId) {
  tasks.value = tasks.value.filter(t => t.id != taskId);
}
</script>


<template>
  <header>

  </header>

  <main>
    <div>
      <TaskCard v-for="task in tasks" :key="task.id" :id="task.id" :name="task.name" :completed="task.completed"
        @rename="OnTaskRename" @delete="OnTaskDelete" @toggle-completness="OnTaskToggle"></TaskCard>
    </div>
  </main>
</template>
