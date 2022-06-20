import { FaceSnapService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!:string;

  constructor(private faceSnapService : FaceSnapService, private route:ActivatedRoute, private router:Router){

  }
  currentRoute = this.router.url;
  
  ngOnInit() {
    
    // this.hasSnap = false;
    this.buttonText = "Oh Snap!"
    const snapId = +this.route.snapshot.params['id']; //ici le + permet de changer le type (cast) de la variable.
    console.log('url',snapId);    

    if(!isNaN(snapId)){

      this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);  
    }
    else{
      this.faceSnap = this.faceSnapService.showOneFaceSnap();
    }

  }
  
  // onAddSnap() {
  //   if(this.hasSnap == false){
  //     this.snaps++;
  //     this.buttonText="Oops, un Snap!"
  //     this.hasSnap = true;                                

  //   }else{
  //     this.snaps--;
  //     this.buttonText="Oh Snap!";
  //     this.hasSnap = false;
  //   }
  // }



  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}


