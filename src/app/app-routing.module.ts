import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgModule, Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

const routes : Routes=[
    {path:'facesnaps', component:FaceSnapListComponent},
    {path:'', component:LandingPageComponentComponent},
    {path:'facesnaps/:id', component:SingleFaceSnapComponent},
    {path:'create', component:NewFaceSnapComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}