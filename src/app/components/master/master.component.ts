import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { ChoicesComponent } from '../choices/choices.component';
import { CommonModule } from '@angular/common';
import { PositionComponent } from "../position/position.component";

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, ChoicesComponent, CommonModule, PositionComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentTab : string = "";


  showPage(message : string){
    this.currentTab = message;
  }

}
