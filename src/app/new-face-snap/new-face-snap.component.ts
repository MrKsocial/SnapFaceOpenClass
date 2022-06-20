import { Router } from '@angular/router';
import { FaceSnapService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// FormBuilder simplifie largement la génération des formulaires réactifs
@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(private formBuilder:FormBuilder,private faceSnapsService: FaceSnapService, private router: Router) { }

  ngOnInit(): void {

    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;


    this.snapForm = this.formBuilder.group({ //on crée un formulaire avec object clé : valeur
      title: [null,Validators.required],
      description: [null, Validators.required],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
  }, {
    updateOn: 'blur'// ici la verification de validation se fera que lorsque l'on change de champs
    //ça epeche ainsi d'avoir une liste d'erreur sur un même champs alors que la validation ne correspond pas encore
    //comme pour les url, le temps de taper l'url validant le regex 
});

  this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    //on observe les changements de valeur du formulaire avec son ObservablevalueChanges  .
    map(formValue => ({
        ...formValue,// le spread permet de récuperer l'ensemble des champs et valeurs du snapForm (title, description etc)
        createdDate: new Date(),
        snaps: 0,
        id: 0
    }))
);
  }

  onSubmitForm() {
    console.log(this.snapForm.value);

    this.faceSnapsService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
}

}
