<script setup>
import { ref } from 'vue'

const props = defineProps({
    id: Number,
    desc: String,
    completed: Boolean
});

const emits = defineEmits(['toggle-completness', 'delete', 'rename']);


const isEditing = ref(false);
const renamingString = ref(props.desc);

function OnCardSave() {
    isEditing.value = false;
    emits('rename', props.id, renamingString.value);
}
</script>

<template>
    <div class="task-card">
        <div class="completed-checkbox" @click="$emit('toggle-completness', props.id)">
            <div v-if="props.completed" class="check-mark"></div>
        </div>

        <div v-if="!isEditing">
            <p class="card-text">{{ props.desc }}</p>
            <div class="buttons-container">
                <button class="btn btn-warning" @click="isEditing = true">Изменить</button>
                <button class="btn btn-outline-danger" @click="$emit('delete', props.id)">Удалить</button>
            </div>
        </div>

        <div class="card-content" v-else>
            <form @submit.prevent="OnCardSave">
                <div class="buttons-container">
                    <textarea class="text-editor" v-model="renamingString" name="taskNameInput" type="text" />
                    <input class="btn btn-outline-success" value="Сохранить" type="submit" />
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
.task-card {
    background-color: var(--appBackgroundColor3);
    padding: 20px;
}

.completed-checkbox {
    $size: 30px;
    $checkMarkURL: "../assets/images/check_mark.svg";

    position: relative;
    top: -10px;
    left: -10px;
    height: $size;
    width: $size;
    border: 2px solid rgb(167, 167, 167);

    .check-mark {
        height: 100%;
        width: 100%;
        background-color: var(--appMainColor);
        -webkit-mask: url($checkMarkURL) no-repeat center;
        mask: url($checkMarkURL) no-repeat center;
    }
}

.card-text {
    font-size: 23px;
    font-weight: bold;
    margin: 10px;
}

.buttons-container {
    display: flex;
    flex-flow: row wrap;

    button,
    input {
        font-size: 20px;
        margin: 5px;
        height: 46px;
        flex: 1 0 200px;
    }
}

.text-editor {
    display: flex;
    flex: none;
    width: 100%;
}
</style>