import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, pipe, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService implements OnInit {

  toDos: any[] = [];

  constructor(
      private _httpClient: HttpClient
    ) { 
      this.getTodos();
      this.mapTest();
  }

  ngOnInit() {
  }  

  getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    this._httpClient.get<any[]>(url)
      .subscribe((data: any[]) => {
        debugger;
        this.toDos = data;
      }, error => {
        throwError(error);
      });
  }

  mapTest() {
    debugger
    let arr = [];

    const res = from([1,2,3,4,5]);
    (res.pipe(map(v => v * 10))).subscribe(result => {
      console.log(result);
      arr.push(result);
    });
  }

  fetchTodoList() {
    return this.toDos;
  }
}
