import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ApiResponseModel, IPosition } from '../../model/interface/IPosition';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.development';

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

      this.http
      .get<ApiResponseModel>(environment.API_URL +  "GetRoles")
      .subscribe((res:ApiResponseModel)=>{this.positionList = res.data })
  }

}
