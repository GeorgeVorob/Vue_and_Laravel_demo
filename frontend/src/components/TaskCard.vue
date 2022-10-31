<script setup>
import { ref, toRef } from 'vue'

const props = defineProps({
    id: Number,
    name: String,
    completed: Boolean
});

const emits = defineEmits(['toggle-completness', 'delete', 'rename']);


const isEditing = ref(false);
const renamingString = ref(props.name);

function OnCardSave() {
    isEditing.value = false;
    emits('rename', props.id, renamingString.value);
}
</script>

<template>
    <div class="task-card">
        <button @click="$emit('toggle-completness', props.id)">
            Completed: {{ props.completed == true ? "true" : "false" }}
        </button>

        <div v-if="!isEditing">
            <h4>{{ props.name }}</h4>
            <button @click="isEditing = true">Изменить</button>
            <button @click="$emit('delete', props.id)">Удалить</button>
        </div>

        <div v-else>
            <form @submit.prevent="OnCardSave">
                <input v-model="renamingString" name="taskNameInput" type="text" />
                <input value="Сохранить" type="submit" />
            </form>
        </div>
    </div>
</template>

<style>
.task-card {
    border: 1px solid black;
}
</style>