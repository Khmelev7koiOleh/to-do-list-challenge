<script setup lang="ts">
import Edit from "vue-material-design-icons/PencilOutline.vue";
import Delete from "vue-material-design-icons/DeleteOutline.vue";
import Duplicate from "vue-material-design-icons/ContentDuplicate.vue";
import { defineProps } from "vue";

// Define the shape of the task prop for better TypeScript support
interface Task {
  name: string;
  status: boolean; // Assuming status is a boolean for checkbox
}

const props = defineProps<{
  task: Task;
}>();
</script>

<template>
  <div class="bg-gray-300 rounded-full">
    <div class="flex justify-between gap-4 w-full px-2 py-2">
      <div class="flex gap-4 items-center px-2">
        <input v-model="props.task.status" type="checkbox" class="w-5 h-5" />
        <div>{{ props.task.name }}</div>
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
          fillColor="#000"
          :size="25"
          class="cursor-pointer bg-white rounded-full p-1"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
