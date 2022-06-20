import { FaceSnap } from './../models/face-snap.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' //on renregistre ce service à la racine de l'application
})

export class FaceSnapService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 160
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 6,
      location: "Paris"
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: "Bruxelles"
    }
  ];

//   getAllFaceSnaps(): FaceSnap[] {
//     return this.faceSnaps;
//   }

//   getFaceSnapById(faceSnapId: number): FaceSnap {
//     const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
//     if (!faceSnap) {
//       throw new Error('FaceSnap not found!');
//     } else {
//       return faceSnap;
//     }
//   }

//   snapFaceSnapById(faceSnapId: number, snapType: 'snap'| 'unsnap'): void {
//     const faceSnap = this.getFaceSnapById(faceSnapId);
//     snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
// }



getAllFaceSnaps(){
  return this.faceSnaps;
}

getFaceSnapById(faceSnapId: number){
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id===faceSnapId)
  if(!faceSnap){
    throw new console.error('do not find id');   
  }
  else{
    return faceSnap;
  }
}

showOneFaceSnap(){
  const randomSnap = Math.floor(Math.random()*this.faceSnaps.length);
  return this.faceSnaps[randomSnap]; 
}

snapFaceSnapById(faceSnapId: number, snapType: string){
  const faceSnap = this.getFaceSnapById(faceSnapId);
  snapType === 'snap'? faceSnap.snaps++ : faceSnap.snaps --;
}


addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
  const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
//on cherche le dernier id de faceSnaps Puis on fait + 1 ex: si longueur tableau faceSnaps = 3 (objets) on fait moins 1
// ça nous donne faceSnaps[2] qui correspond au 3eme element du tableau avec ici son id=3 et on fait + 1
  };
  this.faceSnaps.push(faceSnap);
}











}