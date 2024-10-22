import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';

@Component({
  selector: 'app-tstthreejs',
  standalone: true,
  imports: [],
  templateUrl: './tstthreejs.component.html',
  styleUrl: './tstthreejs.component.css'
})
export class TstthreejsComponent implements OnInit{
 @ViewChild("merenderer", { static: true }) meRendererCanvas!:ElementRef<HTMLCanvasElement>;
 private renderer!:THREE.WebGLRenderer;
 private scene!:THREE.Scene;
 private camera!:THREE.PerspectiveCamera;
 private orbitControls!:OrbitControls;
 private dragControls!:DragControls;
 private objects:THREE.Object3D[]=[];
 ngOnInit():void{
  this.initThree();
  this.meCreateScene();
  this.meAnimateThree();
 }
 initThree(){
  this.scene= new THREE.Scene();
  //this.scene.background= new THREE.Color("white")
  //this.camera= new THREE.PerspectiveCamera(108, (window.innerHeight)/(window.innerWidth), 0.1, 1000)
  this.camera= new THREE.PerspectiveCamera(53, (window.innerWidth/2)/(window.innerHeight/2), 1, 1000)
  this.camera.position.z= 7
  this.renderer= new THREE.WebGLRenderer({ canvas: this.meRendererCanvas.nativeElement, alpha: true })
  this.renderer.setSize(window.innerWidth/2, window.innerHeight/2)
  //this.renderer.setSize((window.innerWidth/1.5), (window.innerHeight/1.5))
  // this.orbitControls= new OrbitControls(this.camera, this.renderer.domElement);
  // this.orbitControls.enableDamping= true;
  // this.orbitControls.dampingFactor= 0.25
  // this.orbitControls.enableZoom= true;
  //this.orbitControls.maxDistance= 20
  window.addEventListener("resize", () => this.resizescreen(), false)
 }
 meCreateScene(){
  const meCube= this.createCube()
  meCube.position.set(0.1, 1.4, 0);
  this.scene.add(meCube)
  this.objects.push(meCube)
  const pointLigth= new THREE.PointLight(0xffffff, 11, 103)
  pointLigth.position.set(1, 0, 1)
  const pointLigth1= new THREE.PointLight(0xffffff, 20, 103)
  pointLigth1.position.set(22, -10, 10)
  this.scene.add(pointLigth1)
  const ambientLight= new THREE.AmbientLight(0x404040, 11)
  //ambientLight.position.set(3, 5, 1)
  this.scene.add(ambientLight)
  const ambientLight1= new THREE.AmbientLight(0x404040, 21)
  ambientLight1.position.set(22, 10, 10)
  this.scene.add(ambientLight1)
  const directionalLight= new THREE.DirectionalLight(0xffffff, 22)
  //directionalLight.position.set(1, 7, 1)
  directionalLight.position.set(1, 1, 1)
  this.scene.add(directionalLight)
  const directionalLight1= new THREE.DirectionalLight(0xffffff, 11)
  directionalLight1.position.set(1, -14, 4)
  //directionalLight1.position.set(1, -23, 1)
  this.scene.add(directionalLight1)
  const directionalLight2= new THREE.DirectionalLight(0xffffff, 22)
  directionalLight2.position.set(0, 0, 0)
  this.scene.add(directionalLight2)
  // this.dragControls= new DragControls(this.objects, this.camera, this.renderer.domElement)
  // this.dragControls.addEventListener("dragstart", () => this.dragControls.enabled= false)
  // this.dragControls.addEventListener("dragend", () => this.dragControls.enabled= true)
 }
 meAnimateThree(){
  requestAnimationFrame(() => this.meAnimateThree())
  //this.orbitControls.update()
  this.scene.children.find((c) => {
   if(c instanceof THREE.Mesh){
    // c.rotation.x+=0.02
    // c.rotation.y+=0.01
    // c.rotation.z+=0.0019
    c.rotation.x += 0.02
    c.rotation.y += 0.0189
    c.rotation.z += 0.0001
   }
  })
  this.renderer.render(this.scene, this.camera)
 }
 createCube(){
  const cubeGeometry= new THREE.BoxGeometry(2.1, 2.2, 2.1)
  const materials= [
    // new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: "orange", opacity: 1, transparent: true, metalness: 0.5, roughness:0.2}),
    // new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: "orange", opacity: 1, transparent: true, metalness: 0.5, roughness:0.2}),
    // new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: "orange", opacity: 1, transparent: true, metalness: 0.5, roughness:0.2}),
    // new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: "orange", opacity: 1, transparent: true, metalness: 0.5, roughness:0.2}),
    // new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: "orange", opacity: 1, transparent: true, metalness: 0.5, roughness:0.2}),
    // new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: "orange", opacity: 1, transparent: true, metalness: 0.5, roughness:0.2})
    new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: new THREE.Color(0x000000), opacity: 1, metalness: 0.1, envMapIntensity: 0.1, flatShading: true, roughness:0.3}),
    new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: new THREE.Color(0x000000), opacity: 1, metalness: 0.1, envMapIntensity: 0.1, flatShading: true, roughness:0.3}),
    new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: new THREE.Color(0x000000), opacity: 1, metalness: 0.1, envMapIntensity: 0.1, flatShading: true, roughness:0.3}),
    new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: new THREE.Color(0x000000), opacity: 1, metalness: 0.1, envMapIntensity: 0.1, flatShading: true, roughness:0.3}),
    new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: new THREE.Color(0x000000), opacity: 1, metalness: 0.1, envMapIntensity: 0.1, flatShading: true, roughness:0.3}),
    new THREE.MeshStandardMaterial({ color: 0x00dd00, emissive: new THREE.Color(0x000000), opacity: 1, metalness: 0.1, envMapIntensity: 0.1, flatShading: true, roughness:0.3})
  ]
  const meCube= new THREE.Mesh(cubeGeometry, materials)
  for(var i=0; i <materials.length; i++){
   const texture= this.getTexture((i + 1).toString(), 256, 256) 
   materials[i].map= texture
  }
  return meCube;
 }
 getTexture(text:string, width:number, height:number){
  const meCanvas= document.createElement("canvas")
  meCanvas.height= height;
  meCanvas.width= width;
  const context= meCanvas.getContext("2d")
  if(context){
   context.fillStyle= "red"
   context.font= "Bold 80px Arial";
   context.textAlign= "center";
   context.textBaseline= "middle";
   //context.fillText(text, width/2, height/2)
   context.fillText(text, width/2, height/2)
  }
  return new THREE.CanvasTexture(meCanvas);
 }
 resizescreen(){
  //this.camera.aspect= window.innerHeight / window.innerWidth
  this.camera.aspect= (window.innerWidth/2)/(window.innerHeight/2)
  this.camera.updateProjectionMatrix()
  //this.renderer.setSize(window.innerWidth, window.innerHeight)
  this.renderer.setSize((window.innerWidth/2),(window.innerHeight/2))
 }
}
