import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  ngOnInit(): void {

    alert("Good Morning")
    throw new   Error('Method not implemented.');

  }






firstName : string = "Mohsen";

lastName : string = "Omran";

age = 22;

man : boolean = true;

date : Date = new Date();

inputType = "checkbox";

selectedState: string = "AA";


showAlert(){
  alert("Welcome to your first time with event binding")
}

showMessageAlert(message:string){
  alert("Welcome ya "+ message +" to your first time with event binding")
}

}
