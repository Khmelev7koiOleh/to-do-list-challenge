<script setup lang="ts">
import { onMounted } from "vue";
import Edit from "vue-material-design-icons/PencilOutline.vue";
import Delete from "vue-material-design-icons/DeleteOutline.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import listData from "./component/ListData.vue";
import List from "./component/AllTasks.vue";
import CompletedList from "./component/CompletedTasks.vue";
import AddList from "./component/addList.vue"; // Fixed capitalization to match component name

import { ref, computed, reactive } from "vue";

import { useListStore } from "./stores/list";
import { storeToRefs } from "pinia";
import UncompletedTasks from "./component/uncompletedTasks.vue";
import AllTasks from "./component/AllTasks.vue";

// Initialize the Pinia store
const listStore = useListStore();
const { tasks, addList } = storeToRefs(listStore);

// onMounted(() => {
//   loadTasksFromLocalStorage();
// });
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
        <button class="btn-custom" @click="listStore.showAlldTasks">All</button>
        <button class="btn-custom" @click="listStore.showCompletedTasks">
          Completed
        </button>
        <button class="btn-custom" @click="listStore.showUncompletedTasks">
          Uncompleted
        </button>
      </div>
    </section>

    <!-- TO-DO-List Preview -->
    <section class="container w-full">
      <h1 class="text-2xl font-semibold p-8">Tasks</h1>
      <div class="flex flex-col gap-1">
        <div v-if="listStore.toggleTasksView.all">
          <AllTasks v-for="task in tasks" :key="task.id" :task="task" />
        </div>

        <div v-if="listStore.toggleTasksView.completed">
          <CompletedList
            v-for="task in listStore.getCompletedTasks"
            :key="task.id"
            :task="task"
          />
        </div>
        <div v-if="listStore.toggleTasksView.uncompleted">
          <UncompletedTasks
            v-for="task in listStore.getUncompletedTasks"
            :key="task.id"
            :task="task"
          />
        </div>
      </div>
    </section>

    <!-- Fixed bottom container -->
    <section>
      <AddList />
    </section>
    <div
      v-if="addList"
      class="absolute inset-0 flex items-center justify-center"
    >
      <div
        class="bg-gradient-to-r from-[#181826] to-[black] w-[70%] h-[70%] md:h-[90%] md:w-[60%] flex flex-col justify-center opacity-90"
      >
        <listData />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
