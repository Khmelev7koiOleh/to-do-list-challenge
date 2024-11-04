<script setup lang="ts">
// import Close from "vue-material-design-icons/Close.vue";
import Edit from "vue-material-design-icons/PencilOutline.vue";
import Delete from "vue-material-design-icons/DeleteOutline.vue";
import Duplicate from "vue-material-design-icons/ContentDuplicate.vue";

import { ref, computed } from "vue";

import { useListStore } from "../stores/list";
import { storeToRefs } from "pinia";

// Initialize the Pinia store
const listStore = useListStore();

const { tasks, addList } = storeToRefs(listStore);

const props = defineProps({
  task: Object,
});
</script>

<template>
  <!-- Completed -->

  <div class="bg-gray-300 rounded-full">
    <div class="flex justify-between gap-4 w-full px-2 py-2">
      <div class="flex gap-4 items-center px-2">
        <input v-model="task.status" type="checkbox" class="w-5 h-5" />
        <div class="flex gap-2">
          <div>{{ task.id }}</div>
          <div>{{ task.name }}</div>
        </div>
      </div>

      <div class="flex gap-4">
        <Duplicate
          fillColor="#000"
          :size="25"
          class="cursor-pointer bg-white rounded-full p-1"
        />
        <Edit
          fillColor="#000"
          :size="25"
          class="cursor-pointer bg-white rounded-full p-1"
        />
        <Delete
          @click="listStore.removeTask(task.id)"
          fillColor="#000"
          :size="25"
          class="cursor-pointer bg-white rounded-full p-1"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
