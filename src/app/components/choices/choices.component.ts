import { Component, inject, OnInit } from '@angular/core';
import {ApiResponseModel, IChoices } from '../../model/interface/IPosition';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasterServiceService } from '../../services/Master-service.service';

@Component({
  selector: 'app-choices',
  standalone: true,
  imports: [],
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.css'
})
export class ChoicesComponent implements OnInit{


  choicesList: IChoices[]= [];
  isLoaded = true;




  masterService = inject(MasterServiceService)


  ngOnInit(): void {

    this.masterService.getChoices().subscribe(

      //--------------------------->
      (result : ApiResponseModel) => {

      this.choicesList = result.data;
      this.isLoaded = false;

    },

    //----->
    error => {

      alert("API Error ----- !! ")

    }

    )
  }


}
