import { ref, reactive, watch } from "vue";
import { defineStore } from "pinia";

// Define the Pinia store using the Composition API
export const useListStore = defineStore("list", () => {
  // Define reactive state
  const addList = ref(false);
  const nextId = ref(0);
  const tasks = ref([]);
  const listName = ref("");

  // const removeValue = ref(false);
  const loadTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      tasks.value = JSON.parse(savedTasks);
    }
  };

  // Watch for changes and save to localStorage
  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    { deep: true }
  );

  // Call loadTasks when the store is used
  loadTasks();

  const addTask = (newTask) => {
    tasks.value.push(newTask);
  };

  const removeTask = (id) => {
    const index = tasks.value.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.value.splice(index, 1);
    }
  };

  // Define an action
  const addNewList = () => {
    addList.value = addList.value = true;
    if (addList.value) {
      console.log("Add");
    }
  };
  const nameList = () => {
    const taskData = {
      id: nextId.value,
      name: listName.value,
      status: "false",
    };

    tasks.push(taskData);
    listName.value = "";
    nextId.value++;
    addList.value = false;
  };

  // Return the state and actions
  return {
    addList,
    addNewList,
    tasks,
    listName,
    nameList,
    removeTask,
  };
});
