import { Component, OnInit } from '@angular/core';
import {TaskService} from './task.service'
import {Task} from './task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers : [TaskService]
})
export class TasksComponent implements OnInit {

  tasks  : Task[];

  constructor(private taskService : TaskService) {
    // this.taskService.getTasks()
    //   .subscribe(tasks =>{
    //     console.log(tasks);
    //   })
  }

  ngOnInit() {

    console.log(this.tasks);

   this.taskService.getTasks()
     .subscribe(tasks =>
     {
       this.tasks = tasks;
       console.log(this.tasks);
     })
  }

}
