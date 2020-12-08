import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(public id: number,public description: string, public done: boolean, public targetDate: Date){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message:string
  todos: Todo[]
  //=[
  //  new Todo(1,'dance',false,new Date()),
  //  new Todo(2,'eat',false,new Date()),
  //  new Todo(3,'sleep',false,new Date()),
 // ]
  constructor(
    private todoService:TodoDataService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('abc').subscribe(
      response =>{
        console.log(response)
        this.todos=response
      }
    )
  }

  deleteTodo(id){
    console.log(`deleteeeee ${id}`)
    this.todoService.deleteTodo('abc',id).subscribe(
      response=>{
        console.log(response);
        this.message='Todo Deleted!!'
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}
