import { TodoService } from './../service/todo.service';
import { Todo } from './../list-todos/list-todos.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number;
  todo:Todo;
  constructor(private todoService:TodoService,private routerActive:ActivatedRoute,private router:Router) { }

  updateTodo(id,todo){
    this.todoService.updateTodo(id,todo).subscribe(response=>{
      console.log(response);
      this.router.navigate(['todos']);
    });
  }

  addTodo(todo){
    this.todoService.addTodo(todo).subscribe(data=>{
      console.log(data);
      this.router.navigate(['todos']);
    });
  }

    saveTodo(){
      if(this.id!=-1)
        this.updateTodo(this.id,this.todo);
      else 
        this.addTodo(this.todo);  
    }

  ngOnInit() {
    this.id=this.routerActive.snapshot.params['id'];
    this.todo= new Todo(this.id,'','',new Date,false);

    if(this.id!=-1)
     this.todoService.retriveTodos(this.id).subscribe(response =>{
       this.todo = response;
     })
  }

}
