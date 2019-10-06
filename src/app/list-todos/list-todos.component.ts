import { Router } from '@angular/router';
import { TodoService } from './../service/todo.service';
import { Component, OnInit } from '@angular/core';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { VirtualTimeScheduler, observable,Observable } from 'rxjs';
import { interval } from 'rxjs';



export class Todo{
  constructor(
    public id:number,
    public username:string,
    public description:string,
    public targetDate:Date,
    public completed:boolean
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
 
  todos: Todo[];
  successMessage: string 
  successMesg:boolean =false

  constructor(private todoService : TodoService, private router: Router) { }


deleteTodos(id){
  this.todoService.deleteTodos(id).subscribe(response =>{
    console.log(response);
    this.successMessage="Deleted Successfully";
    this.successMesg=true;
  }, error =>{
   alert("Not Deleted");
  
  })
}

updateTodos(id){
  this.router.navigate(['todo',id]);
  console.log('updated-'+id)
}
addTodos(){
  this.router.navigate(['todo',-1]);
}


  ngOnInit() {
    // this.todoService.getTodos(3).subscribe(response =>{
    //   this.todos = response;
     interval(1000).subscribe(()=>{
      this.todoService.getTodos(1).subscribe(to=>{ this.todos = to})
    })
    // this.todoService.deleteTodos(2).subscribe();
    
  }

}
