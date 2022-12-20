const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            todolist: 
            [
                {
                    text: "comprare Albicocche",
                    done: false,
                },
                {
                    text: "fare esercizio fisico",
                    done: true,
                },
                {
                    text: "fare gli esercizi",
                    done: false,
                },
                {
                    text: "fare niente",
                    done: true,
                },
                {
                    text: "salto con l'asta olimpionico",
                    done: false,
                },
                {
                    text: "dormire",
                    done: false,
                }
            ]
        }
    },
    methods: {
        addTask()
        {
            let object = {
                text: this.newTask,
                done: false
            }
            this.todolist.push(object);
            this.newTask = '';
        },
        checkTask(index)
        {
            let task = this.todolist[index];
            if(task.done == true) {
                task.done = false;
            }
            else{
                task.done = true;
            }
        },
        deleteTask(index)
        {
            this.todolist.splice(index, 1)
        }
    },
}).mount('#app')