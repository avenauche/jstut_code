
(async function(){
    await getData()
})()



async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts/'; 
    const method = 'POST'


    try {
      const response = await fetch(url, {
        method: method
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("todo count: ", json.length);
      console.log(json);

    } catch (error) {
      console.error(error.message);
    }
  }
