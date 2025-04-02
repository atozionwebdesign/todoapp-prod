/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatDate } from "../utils/helper";

let baseURL: string | undefined = '';

if(process.env.NODE_ENV == "development") {
  baseURL = process.env.NEXT_PUBLIC_URL;
}

export async function getTasks(){
  const res = await fetch(baseURL + '/api/todos', {method: 'GET'});
  const tasks = await res.json();
  tasks.map((task:any) => {
    task.start_date = formatDate(task.start_date);
    task.end_date = formatDate(task.end_date);
  })
  return tasks;
}

export async function getTaskById(id:number){
  const res = await fetch(baseURL + '/api/todos?id=' + id, {method: 'GET'});
  const task = await res.json();
  task.map((task:any) => {
    task.start_date = formatDate(task.start_date);
    task.end_date = formatDate(task.end_date);
  })
  return task;
}

  export async function updateTask(id:number, data:any){
    const res = await fetch(baseURL + '/api/todos?id=' + id, {
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
   
    const res = await fetch(baseURL + '/api/todos?', {
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
    const res = await fetch(baseURL + '/api/todos?id=' + id, {method: 'DELETE'});
    if (!res.ok) {
      console.error('Failed to delete item', res);
      return;
    }
}