<script setup>
import TaskList from './components/TaskList.vue';
</script>


<template>
  <header>
  </header>

  <main>
    <div class="task-list-container">
      <h1 class="header-text">Todo-list</h1>
      <TaskList></TaskList>
    </div>
  </main>
</template>

<style lang="scss">
@import "./assets/coloros.scss";
@import "./styles/base.scss";
@import "./styles/custom.scss";

body {
  background-color: var(--appBackgroundColor1);
}

header {
  margin-bottom: 50px;
}

.task-list-container {
  background-color: var(--appBackgroundColor2);
  margin: 0px auto 0px auto;
  padding: 1px 50px 50px 50px;
  max-width: 750px;
}

.header-text {
  text-align: center;
}
</style>