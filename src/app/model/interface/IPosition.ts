export interface IPosition{

roleId :number;
role :string;

}

export interface IChoices{

  designationId : number;
  designation: string;


}

export interface ApiResponseModel{

  message: string,
  result: boolean,
  data: any

}
