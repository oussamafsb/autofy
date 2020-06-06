import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  doneTasks : any[];
  size: number;
  constructor(private service : TaskService) { }

  ngOnInit() {
    this.service.getDone().subscribe(data => this.doneTasks= data );
    this.size= this.doneTasks.length;
  }

}
