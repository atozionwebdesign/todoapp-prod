/* eslint-disable @typescript-eslint/no-explicit-any */

export async function getTasks(){
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/todos', {method: 'GET'});
    const tasks = await res.json();
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'};
      tasks.map((task:any) => {
          task.start_date = new Date(task.start_date).toLocaleDateString('en-US', options);
          task.end_date = new Date(task.end_date).toLocaleDateString('en-US', options);
      })
    return tasks;
}

export async function getTaskById(id:number){
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/todos?id=' + id, {method: 'GET'});
    const task = await res.json();
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'};
      task.map((task:any) => {
          task.start_date = new Date(task.start_date).toLocaleDateString('en-US', options);
          task.end_date = new Date(task.end_date).toLocaleDateString('en-US', options);
      })
    return task;
}

  export async function updateTask(id:number, data:any){
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/todos?id=' + id, {
      method: 'PUT',
      headers : { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
       },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      console.error('Failed to update item', res);
      return;
    }

  }

  export async function createTask(data:any){
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/todos?', {
      method: 'POST',
      headers : { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
       },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      console.error('Failed to create item', res);
      return;
    }

  }

  export async function deleteTask(id:number){
    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/todos?id=' + id, {method: 'DELETE'});
    
    if (!res.ok) {
      console.error('Failed to delete item', res);
      return;
    }
}