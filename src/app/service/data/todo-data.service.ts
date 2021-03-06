import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retriveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
    //console.log("Execute hello world bean service")
  }

  deleteTodo(username,id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retriveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)
  }

  createTodo(username, todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo)
  }

}
