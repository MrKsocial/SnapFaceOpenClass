import { element } from 'protractor';
import { FaceSnapService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, Observable } from 'rxjs';
import { takeUntil, tap, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>; //Un Subject est un Observable que vous pouvez faire émettre à la demande. 
  monInterval$ : Observable<number>;

  constructor(private faceSnapsService: FaceSnapService) { }

  
  ngOnInit(): void { //on initialise au début lorsque la page s'ouvre/le component s'ouvre

    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    
    interval(1000).pipe(tap(console.log), takeUntil(this.destroy$)).subscribe();

    // l'interval de chiffre continue jusqu'a ce qu'on atteigne le destroy$, ce destroy$ est atteignable grace au takeUntil, donc
    // on continue à obtenir les données de l'interval jusqu'a la destruction du component, 
    // car destroy$ est atteignable que lors du ngOnDestroy


    //ON PEUT AUSSI FAIRE UN ASYNC CAR 
    //Tout Observable souscrit avec le pipe  async  est automatiquement unsubscribe lors de la destruction du component qui le consomme !
    // donc si on affiche notre interval sur le DOM avec le pipe async ex: <h1>{{}}</h1>

    // this.monInterval$ = interval(1000).pipe
    // (delay(3000),map(value=>value));

  }
  
  ngOnDestroy(): void {// ici on indique ce qu'il faut faire lors de la "destruction/changement/fermeture de la page/component"
    this.destroy$.next(true);
  }
}
