import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit {
  size: number;
  tasks: any [];
  task : any;
  constructor(private service : TaskService) {
   }
   
  ngOnInit() {

    this.size = this.tasks.length;
    this.service.getTasks().subscribe(  
      data=>{
      this.tasks=data;
    })
  }
  remove(id){
       this.task = this.tasks.find(x => x.task_id == id);
       this.task.checked = 'true';
       this.service.check(id , this.task ).subscribe();
  }


}
