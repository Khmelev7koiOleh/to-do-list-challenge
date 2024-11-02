import { ref, reactive } from "vue";
import { defineStore } from "pinia";

// Define the Pinia store using the Composition API
export const useListStore = defineStore("list", () => {
  // Define reactive state
  const addList = ref(false);
  const tasks = reactive([
    { name: "Task 1", id: 1, status: "true" },
    { name: "Task 2", id: 2, status: "false" },
  ]);

  // Define an action
  const addNewList = () => {
    addList.value = addList.value = true;
    if (addList.value) {
      tasks.push({ name: "Task 3", id: 3, status: "false" });
      console.log("Add");
    } else {
      console.log("Cancel");
    }
  };

  // Return the state and actions
  return {
    addList,
    addNewList,
    tasks,
  };
});
