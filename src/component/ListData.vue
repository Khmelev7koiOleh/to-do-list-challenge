<template>
  <div class="flex flex-col items-center justify-center p-5 gap-14">
    <div class="text-3xl font-bold text-gray-400">
      Create your new To do list
    </div>
    <input
      placeholder="Create your tasks name"
      class="p-2 rounded-md"
      v-model="listName"
      type="text"
    />

    <div class="flex gap-4">
      <button @click="addList = false" class="bg-[#ffff] px-4 py-2 rounded-lg">
        Back
      </button>

      <button
        @click="useList.nameList()"
        class="bg-[#38a169] px-4 py-2 rounded-lg"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useListStore } from "../stores/list";
import { storeToRefs } from "pinia";

// Initialize the Pinia store
const useList = useListStore();

const { listName, addList } = storeToRefs(useList);
</script>

<style scoped></style>
