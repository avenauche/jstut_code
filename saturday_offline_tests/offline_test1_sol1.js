function* fetchTodos(url){
    try {
        yield fetch(url,{method:"get"}).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });

    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function* getTodo(todos){
    for(let todo of todos){
        yield todo;
    }
}

function printTodo(generator){
    for(let todo of generator){
        console.log(todo);
    }
}

function main(){
    
    const todosGenerator = fetchTodos("https://jsonplaceholder.typicode.com/todos");
    const todosPromise = todosGenerator.next().value;

    todosPromise.then((todos) => {
        const getTodoGenerator = getTodo(todos)
        printTodo(getTodoGenerator)
    })
    .catch(error => console.error('error in printing todos:', error));
} 

main()
