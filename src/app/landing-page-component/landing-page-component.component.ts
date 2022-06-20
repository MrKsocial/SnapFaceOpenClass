import { Router } from '@angular/router';
import { FaceSnap } from './../models/face-snap.model';
import { FaceSnapService } from './../services/face-snaps.service';
import { Component, Input, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})

export class LandingPageComponentComponent implements OnInit {

  faceSnap!: FaceSnap;
  userEmail: string;

  constructor(private FaceSnapService: FaceSnapService, private router: Router) { }

  ngOnInit(): void {
    // this.faceSnap = this.FaceSnapService.showOneFaceSnap(); // je l'ai mis dans single face snap pour plus de clareté
    console.log(this.faceSnap);
  }

  onContinue() {
    this.router.navigateByUrl('/facesnaps');
  }

  onSubmitForm(form: NgForm){
    console.log(form.value);
  }

}
