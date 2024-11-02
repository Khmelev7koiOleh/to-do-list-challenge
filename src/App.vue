<script setup lang="ts">
import Edit from "vue-material-design-icons/PencilOutline.vue";
import Delete from "vue-material-design-icons/DeleteOutline.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import List from "./component/List.vue";
import AddList from "./component/addList.vue"; // Fixed capitalization to match component name

import { ref, computed, reactive } from "vue";

import { useListStore } from "./stores/list";
import { storeToRefs } from "pinia";

// Initialize the Pinia store
const listStore = useListStore();
const { tasks } = storeToRefs(listStore);
</script>

<template>
  <div class="w-full h-[100vh]">
    <!-- TO-DO-List Overview -->
    <section class="w-full py-5 container">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold">TO-DO List</h1>
        <p>Your to do options</p>
      </div>
      <div class="flex items-center gap-10 m-2 justify-center">
        <button class="btn-custom">All</button>
        <button class="btn-custom">Deleted</button>
      </div>
    </section>

    <!-- TO-DO-List Preview -->
    <section class="container w-full">
      <h1 class="text-2xl font-semibold p-8">Tasks</h1>
      <div class="flex flex-col gap-1">
        <List v-for="task in tasks" :key="task.id" :task="task" />
      </div>
    </section>

    <!-- Fixed bottom container -->
    <section>
      <AddList />
    </section>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
