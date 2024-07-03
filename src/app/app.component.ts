import {Component} from '@angular/core';
import {StudentService} from "./services/student.service";
import {IUserInfo} from "./interfaces/user.interface";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    listData: IUserInfo[] = [];

    constructor(
        private studentService: StudentService
    ) {}
    ngOnInit(){
        this.handleGetListData()
    }
    handleGetListData():void{
        this.studentService.getData().subscribe((res:IUserInfo[])=>{
            this.listData = res
        })
    }
    handleAddUser(data:IUserInfo){
        this.studentService.addData(data).subscribe(()=>{
           this.handleGetListData()
        })
    }
    handleUpdateUser(data:IUserInfo){
        this.studentService.updateData(data).subscribe(()=>{
            this.handleGetListData()
        })
    }

    handleDeleteUser(data:IUserInfo){
        this.studentService.deleteData(data).subscribe(()=>{
            this.handleGetListData()
        })
    }
}
