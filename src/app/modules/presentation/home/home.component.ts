import { Component, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core'
import { InfoService } from '../../../service/info/info.service'
import { CardAppComponent } from '../page/card-app/card-app.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TstthreejsComponent } from '../page/tstthreejs/tstthreejs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardAppComponent, CommonModule, TstthreejsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 isMobile:Boolean=false; 
 @ViewChild("op", {static: true}) opacit!:ElementRef<HTMLElement>;
 @Input("listUrlApp") listUrlApp!:SafeResourceUrl[]
 @Input("listUrlApp") listUrlAppA!:SafeResourceUrl[]
// @Input("listUrlApp") listUrlApp!:String[]
 private infoService= inject(InfoService)
 private sanitizer= inject(DomSanitizer)
 isDevice!:String
 slider!:any
 defaultTransform!:any
 ngOnInit(): void {
    //this.listUrlApp= [this.sanitizer.bypassSecurityTrustResourceUrl("https://yoproducer.netlify.app/app"),this.sanitizer.bypassSecurityTrustResourceUrl("https://reactproductss.netlify.app/"),this.sanitizer.bypassSecurityTrustResourceUrl("https://yoproducer.netlify.app/app"),this.sanitizer.bypassSecurityTrustResourceUrl("https://reactproductss.netlify.app/"),this.sanitizer.bypassSecurityTrustResourceUrl("https://yoproducer.netlify.app/app")]
    this.listUrlApp= [this.sanitizer.bypassSecurityTrustResourceUrl("https://yoproducer.netlify.app/app"),this.sanitizer.bypassSecurityTrustResourceUrl("https://reactproductss.netlify.app/"),this.sanitizer.bypassSecurityTrustResourceUrl("https://threetst.netlify.app/methree/meviewthree"),this.sanitizer.bypassSecurityTrustResourceUrl(""),this.sanitizer.bypassSecurityTrustResourceUrl("")]
    this.listUrlApp= [this.sanitizer.bypassSecurityTrustResourceUrl(""),this.sanitizer.bypassSecurityTrustResourceUrl(""),this.sanitizer.bypassSecurityTrustResourceUrl(""),this.sanitizer.bypassSecurityTrustResourceUrl(""),this.sanitizer.bypassSecurityTrustResourceUrl("")]
    //this.listUrlApp= ["","","","",""]
    this.listUrlAppA= ["https://yoproducer.netlify.app/app","https://reactproductss.netlify.app/","https://threetst.netlify.app/","",""]
    console.log("this.infoService: ")
    this.infoService.getAllInfo("2l34are302123-12121-323dss-re3223")
    this.slider = document.getElementById("slider");
    this.defaultTransform=0
    console.log("window.navigator.userAgent: ")
    console.log(window.navigator.userAgent)
    window.navigator.userAgent.match("Mobile")==null?this.isMobile=false:this.isMobile=true;
    console.log("this.isMobile: ")
    console.log(this.isMobile)
    console.log("this.listUrlApp.length / this.slider.scrollWidth: principal")
  console.log(this.listUrlApp.length / this.slider.scrollWidth)
  console.log(this.slider.scrollWidth / this.listUrlApp.length)
  console.log(this.listUrlApp.length/this.slider.scrollWidth)
  console.log(this.slider.scrollWidth / this.listUrlApp.length + this.defaultTransform)
  this.analizarDevice()
  const elem= this.opacit.nativeElement
  setTimeout(() => {
    elem.classList.remove("opacity-0")
  }, 887);
 }
 analizarDevice(){
  this.isDevice= "computer"
  const mewidth= window.innerWidth;
  const meheight= window.innerHeight;
  if(meheight <= 968 && mewidth <= 557){
   this.isDevice="mobile"
   console.log("isMobile")
  }else if(meheight <= 1379 && mewidth <= 1024){
   this.isDevice="tablet"
   console.log("isTablet")
  }else if(meheight <= 1000 && mewidth <= 1460){
   this.isDevice="computP"
  }
 }
//    goNext() {
//     //this.defaultTransform = this.defaultTransform - 398;
//     // this.defaultTransform = this.defaultTransform - 298;
//     console.log(this.defaultTransform)
//     console.log(Math.abs(this.defaultTransform))
//     if (Math.abs(this.defaultTransform) < 0) this.defaultTransform = 0;
//     this.defaultTransform = !this.isMobile?this.defaultTransform - 812:this.defaultTransform - 398;
//     //if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
//     if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 0.7) this.defaultTransform = 0;
//     this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
// }
//  goPrev() {
//     console.log(this.defaultTransform)
//     if (Math.abs(this.defaultTransform) === 0 || Math.abs(this.defaultTransform) < 0) this.defaultTransform = 0;
//     //else this.defaultTransform = this.defaultTransform + 398;
//     //else this.defaultTransform = this.defaultTransform + 298;
//     else this.defaultTransform = this.defaultTransform + 798;
//     //else this.defaultTransform = !this.isMobile?this.defaultTransform + 891:this.defaultTransform + 398;
//     this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
// }
goNext() {
  //this.defaultTransform = this.defaultTransform - 398;
  this.defaultTransform = this.isMobile?this.defaultTransform - 325:this.defaultTransform - 398;
  console.log("this.defaultTransform1: ")
  console.log(this.defaultTransform)
  console.log(this.slider.scrollWidth)
  console.log(this.slider.scrollWidth / 1.7) //808
  //if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
  //if (Math.abs(this.defaultTransform) >= (this.isMobile?this.slider.scrollWidth / 1.2 :this.slider.scrollWidth / 1.7)) this.defaultTransform = 0;
  console.log("this.listUrlApp.length / this.slider.scrollWidth: ")
  console.log(this.listUrlApp.length / this.slider.scrollWidth)
  console.log(this.slider.scrollWidth / this.listUrlApp.length + this.defaultTransform)
  console.log(this.slider.scrollWidth / this.listUrlApp.length)
  console.log(this.listUrlApp.length/this.slider.scrollWidth)
  console.log("this.device:")
  switch(this.isDevice){
    case "tablet": 
    console.log("isTablet")
    if (Math.abs(this.defaultTransform) >= (this.isMobile?this.slider.scrollWidth / 1.1 :this.slider.scrollWidth / 1.3587)) this.defaultTransform = 0   
    break
    case "computP":
      console.log("isComputeP")
      if (Math.abs(this.defaultTransform) >= (this.isMobile?this.slider.scrollWidth / 1.1 :this.slider.scrollWidth / 1.7999)) this.defaultTransform = 0   
      break
    default: if (Math.abs(this.defaultTransform) >= (this.isMobile?this.slider.scrollWidth / 1.02339 :this.slider.scrollWidth / 2)) this.defaultTransform = 0
  }
  this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  console.log("this.defaultTransform2: ")
  console.log(this.defaultTransform)
}
goPrev() {
  console.log("this.defaultTransform3: ")
  console.log(this.defaultTransform)
  if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
  //else this.defaultTransform = this.defaultTransform + 398;
  else this.defaultTransform = this.isMobile?this.defaultTransform + 325:this.defaultTransform + 398;
  this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  console.log("this.defaultTransform4: ")
  console.log(this.defaultTransform)
}
}
