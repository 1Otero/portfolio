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
 @Input("w") widthTst:String="420px"
 //@Input("urlProject") meUrlApp!:String;
 ngOnInit():void{
  this.reSizeWindow()
  window.addEventListener("resize", () => this.reSizeWindow())
 }
 reSizeWindow(){
  const meDevice= window.navigator.userAgent
  this.widthTst= meDevice.match("Mobile")!=null?"270px":"433px"
 }
}
