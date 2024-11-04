import { ref, reactive, watch, computed } from "vue";
import { defineStore } from "pinia";

// Define the Pinia store using the Composition API
export const useListStore = defineStore("list", () => {
  // Define reactive state
  const addList = ref(false);
  const nextId = ref(0);
  const tasks = ref([]);

  const refStatus = ref(false);
  const toggleTasksView = reactive({
    all: true,
    completed: false,
    uncompleted: false,
  });
  // const completedTasks = ref([]);
  const listName = ref("");

  // // const removeValue = ref(false);
  // const loadTasks = () => {
  //   const savedTasks = localStorage.getItem("tasks");
  //   if (savedTasks) {
  //     tasks.value = JSON.parse(savedTasks);
  //   }
  // };

  // // Watch for changes and save to localStorage
  // watch(
  //   tasks,
  //   (newTasks) => {
  //     localStorage.setItem("tasks", JSON.stringify(newTasks));
  //   },
  //   { deep: true }
  // );

  // // Call loadTasks when the store is used
  // loadTasks();

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
      status: refStatus.value,
    };

    tasks.value.push(taskData);
    listName.value = "";
    nextId.value++;
    addList.value = false;
  };

  //Show Compeleted tasks
  const showCompletedTasks = () => {
    toggleTasksView.completed = true;
    toggleTasksView.all = false;
    toggleTasksView.uncompleted = false;
  };
  const showUncompletedTasks = () => {
    toggleTasksView.completed = false;
    toggleTasksView.all = false;
    toggleTasksView.uncompleted = true;
  };

  const showAlldTasks = () => {
    toggleTasksView.completed = false;
    toggleTasksView.all = true;
    toggleTasksView.uncompleted = false;
  };

  // functions

  const getCompletedTasks = computed(() => {
    return tasks.value.filter((task) => task.status === true);
  });
  const getUncompletedTasks = computed(() => {
    return tasks.value.filter((task) => task.status === false);
  });

  // if (status) {
  // }
  // completedTasks.value.push(completed);
  // console.log(completed);
  // };
  // Return the state and actions
  return {
    addList,
    addNewList,
    tasks,
    listName,
    nameList,
    removeTask,
    showAlldTasks,
    showCompletedTasks,
    showUncompletedTasks,
    getCompletedTasks,
    getUncompletedTasks,
    toggleTasksView,
  };
});
