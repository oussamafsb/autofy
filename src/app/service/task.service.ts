import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  email = "oussamaa.sahli@gmail.com";
  urladd = "https://autofy-tasky.herokuapp.com/api/task";
  urltasks = "https://autofy-tasky.herokuapp.com/api/tasks";
  urlcheck = "https://autofy-tasky.herokuapp.com/api/check_task/";
  
  constructor(private http:HttpClient) { }

  addTask(task):Observable<any>{
   return  this.http.post(this.urladd,task,{
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    })
  }

  getTasks():Observable<any>{
    let param = new HttpParams().set('candidate_email',this.email).set('checked','false');
    return this.http.get(this.urltasks, {params:param});
  }

  getDone():Observable<any>{
    let param = new HttpParams().set('candidate_email',this.email).set('checked','true');
    return this.http.get(this.urltasks);
  }

  check(id , task):Observable<any>{
    return this.http.patch(this.urlcheck+id ,task);
  }

}
