import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  listOfToDos: any[] = [];

  constructor(private _todos: TodosService) { }

  ngOnInit(): void {

  }

  getTodos() {
    this.listOfToDos = this._todos.fetchTodoList();
  }

}
