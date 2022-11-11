<script setup>
import { ref, onMounted } from 'vue'
import TaskCard from "./TaskCard.vue"
import { ApiService } from '../Services/ApiService';

const tasks = ref([]);

onMounted(() => {
    ApiService.GetTasks()
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            tasks.value = json;
        });
});

function OnTaskToggle(taskId) {
    let taskToToggle = tasks.value.find(t => t.id === taskId);
    taskToToggle.completed = !taskToToggle.completed;
}

function OnTaskRename(taskId, newName) {
    let taskToRename = tasks.value.find(t => t.id === taskId);
    taskToRename.desc = newName;
}

function OnTaskDelete(taskId) {
    tasks.value = tasks.value.filter(t => t.id != taskId);
}
</script>

<template>
    <div>
        <TaskCard class="task-card-with-spaces" v-for="task in tasks" :key="task.id" :id="task.id" :desc="task.desc"
            :completed="task.completed" @rename="OnTaskRename" @delete="OnTaskDelete"
            @toggle-completness="OnTaskToggle"></TaskCard>
    </div>
</template>

<style lang="scss">
.task-card-with-spaces {
    margin: 15px 0px 15px 0px;
}
</style>