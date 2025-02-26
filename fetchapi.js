function getAllTodos(){
   
    const requestOptions = {
        method: "POST"
    };
      
    fetch("http://localhost:3000/api/todos", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}



var createTodo1 = createTodo2 = async (id, task) => { 

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const requestOptions = {
        method: "POST",
        headers:myHeaders,
        body:JSON.stringify({ id, task  })
    };

    const response = await fetch("http://localhost:3000/api/todo", requestOptions)

    const jsonResponse = await response.json()
    console.log(jsonResponse)
}


async function modifyTodo(id, task) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const requestOptions = {
        method: "PUT",
        headers:myHeaders,
        body:JSON.stringify({ task  })
    };

    const response = await fetch("http://localhost:3000/api/todo/"+id, requestOptions)

    const jsonResponse = await response.json()
    console.log(jsonResponse)
}

async function deleteTodo(id){
 
    const requestOptions = {
        method: "DELETE",
    };

    const response = await fetch("http://localhost:3000/api/todo/"+id, requestOptions)
}