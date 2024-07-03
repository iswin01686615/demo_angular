import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserInfo} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getData (): Observable<IUserInfo[]>{
    return this.http.get<IUserInfo[]>('https://server-deployment-yvii.onrender.com/todo')
  }
  addData (data: IUserInfo) : Observable<IUserInfo> {
    return this.http.post<IUserInfo>('https://server-deployment-yvii.onrender.com/todo',data)
  }
  updateData (data: IUserInfo) : Observable<IUserInfo> {
    return this.http.put<IUserInfo>('https://server-deployment-yvii.onrender.com/todo/'+ data.id,data)
  }
  deleteData (data: IUserInfo) : Observable<IUserInfo> {
    return this.http.delete<IUserInfo>('https://server-deployment-yvii.onrender.com/todo/'+ data.id)
  }
}
