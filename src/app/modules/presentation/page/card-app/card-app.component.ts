import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card-app',
  standalone: true,
  imports: [],
  templateUrl: './card-app.component.html',
  styleUrl: './card-app.component.css'
})
export class CardAppComponent implements OnInit{
 @Input("urlProject") meUrlApp!:SafeResourceUrl;
// @Input("urlProject") meUrlApp!:String;
 ngOnInit():void{
  console.log("this.meUrlApp: ")
  console.log(this.meUrlApp)
 }
}
