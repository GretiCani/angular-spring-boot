import { Todo } from './../list-todos/list-todos.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/api/users/${username}/todos`);
  }

  deleteTodos(id){
    return this.http.delete(`http://localhost:8080/api/users/delete/todos/${id}`);
  } 

  retriveTodos(id){
    return this.http.get<Todo>(`http://localhost:8080/api/users/greti/todos/${id}`);
  }

  updateTodo(id,todo:Todo){
    return this.http.put(`http://localhost:8080/api/users/greti/todos/${id}`,todo);
  }

  addTodo(todo:Todo){
    return this.http.post(`http://localhost:8080/api/users/greti/todos`,todo);

  }


}
