import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IPosition } from '../../model/interface/IPosition';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-position',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './position.component.html',
  styleUrl: './position.component.css'
})
export class PositionComponent implements OnInit{

  positionList : IPosition [] =[];
  say:string = "GOOD";


// New way of injection
http = inject(HttpClient)
// Old way of injection
// constructor(private http :HttpClient){}


  ngOnInit(): void {

    this.gelAllPositions()
  }

  gelAllPositions(){
    // this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{


      this.http.get("https://f14b1d95-7e79-40f5-b1f5-9465d32e041e.mock.pstmn.io/NetCont/Nokia/2G").subscribe((res:any)=>{

      this.positionList = res.data })
  }

}
