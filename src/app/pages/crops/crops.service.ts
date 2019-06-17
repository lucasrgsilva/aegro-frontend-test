import { Injectable } from '@angular/core';
import { AngularFirestore, QueryDocumentSnapshot, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface ICrop {
  id?: string;
  name: string;
  areaID: string;
  date: string;
  farmID: string;
}

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  constructor(private db: AngularFirestore) { }

  add(crop: ICrop, farmID: string, areaID: string): Observable<Promise<DocumentReference>> {
    return of(this.db
      .collection(`farms/${farmID}/areas/${areaID}/crops`)
      .add(crop)
    );
  }

  getAll(farmID: string, areaID: string): Observable<ICrop[]> {
    return this.db.collection(`farms/${farmID}/areas/${areaID}/crops`)
      .snapshotChanges().pipe(
        map(items => items.map<ICrop>(resp => {
          const fireDoc: QueryDocumentSnapshot<any> = resp.payload.doc;
          const { name, areaID, date, farmID } = fireDoc.data();
          return { id: fireDoc.id, name, areaID, date, farmID }
        }))
      );
  }

  update(crop: ICrop, farmID: string, areaID: string): Observable<Promise<void>> {
    return of(this.db.collection(`farms/${farmID}/areas/${areaID}/crops`).doc(crop.id).update(crop));
  }

  delete(cropID: string, farmID: string, areaID: string): Observable<Promise<void>> {
    return of(this.db.collection(`farms/${farmID}/areas/${areaID}/crops`).doc(cropID).delete());
  }
}
