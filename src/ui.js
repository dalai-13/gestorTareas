import { getTasks } from "./task";

// Función para mostrarle al usuario las tareas
export const renderTasks = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
    const tasks = getTasks();

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        // Añadir clase solo si la tarea esta completada
        if(task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            ${task.text}
            <button class="delete"> Eliminar </button>
            <button class="toggle"> ${ task.completed === false ? "Completar" : "Deshacer" }  </button>
        `;

        taskList.appendChild(li);
    });
};

/*
Lista de tareas:

[
    {
        id: 05/08/24 23,
        text: "Lavar",
        completed: false
    },

/*
? ---> SI = IF | : ----> Entonces= ELSE 

? task.completed === false  Completar , : hecho
si la tarea no esta completa , completar , si no , ya esta echo 
Lista de tareas:
[
    {
        id:05/08/2024 23,
        text: "Lavar",
        completed: false
    },
    {
        id:05/08/2024 22,
        text: "Comer",
        completed: true
    },
    {
        id:05/08/2024 21,
        text: "Hacer tarea",
        completed: false
    }


]

*/