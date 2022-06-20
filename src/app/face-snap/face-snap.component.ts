import { Router } from '@angular/router';
import { FaceSnapService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  
  @Input() faceSnap!: FaceSnap;// Une propriété personnalisée est rendue injectable depuis l'extérieur grâce au décorateur  @Input()
  
  // hasSnap!:boolean;
  buttonText!:string;

  constructor(private router:Router){

  }

  onViewFaceSnap(){
    const id = this.faceSnap.id;
    this.router.navigateByUrl(`/facesnaps/${id}`);
  }
}
