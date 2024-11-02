<script setup lang="ts">
import { ref } from "vue";
import Plus from "vue-material-design-icons/Plus.vue";

import { useListStore } from "../stores/list";
import { storeToRefs } from "pinia";

// Initialize the Pinia store
const useList = useListStore();

const { addList } = storeToRefs(useList);

// const toggleAddList = () => {
//   addList.value = !addList.value; // Toggle the value of `addList`

//   if (addList.value) {
//     console.log("Add new list");
//   }
// };
</script>

<template>
  <div class="fixed bottom-0 bg-black w-full p-4 flex justify-center gap-8">
    <!-- Flexbox container for button and icon -->
    <div
      @click="useList.addNewList()"
      class="bg-[#38a169] rounded-full flex items-center justify-center p-2 w-[50%]"
    >
      <button class="p-2 text-black font-medium">Add new list</button>

      <Plus
        fillColor="#fff"
        :size="25"
        class="cursor-pointer ml-2 p-1 bg-gray-800 rounded-full"
      />
    </div>

    <div
      @click="useList.addNewList()"
      class="bg-[#ffff] rounded-full flex items-center justify-center p-2 w-[50%]"
    >
      <button class="p-2 text-black font-medium">Add new task</button>

      <Plus
        fillColor="#fff"
        :size="25"
        class="cursor-pointer ml-2 p-1 bg-gray-800 rounded-full"
      />
    </div>
  </div>
</template>

<style scoped></style>
