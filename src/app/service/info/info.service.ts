import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
  getAllInfo(userId:String){
    console.log("userId:")
   console.log(userId)
  }
}
