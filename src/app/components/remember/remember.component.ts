import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { BookComponent } from "../../BookSection/book/book.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remember',
  standalone: true,
  imports: [FormsModule, CommonModule, RolesComponent, BookComponent],
  templateUrl: './remember.component.html',
  styleUrl: './remember.component.css'
})
export class RememberComponent {

  // step 1 >> data binding || one way and two way binding


  firstName : string = "Good User"
password = 123456
description = "Do your best please"



// Step 2 >> directive ||
 preview : string = "";

setPreview(page: string){
  this.preview = page;
}





}
