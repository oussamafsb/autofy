import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  task: string;
  message: string;
  data: any ;
  constructor(private service: TaskService) { }

  ngOnInit() {
   
  }

  submit(){
    this.data = {
      candidate_email:'oussamaa.sahli@gmail.com',
      label: this.task
     }
    this.service.addTask(this.data).subscribe(data => this.message=data);
     console.log(this.message);
  }
}
