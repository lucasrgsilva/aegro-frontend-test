import { Injectable } from '@angular/core';
import { AngularFirestore, QueryDocumentSnapshot, DocumentReference } from '@angular/fire/firestore';
import { IFarm } from '../farms/farms.service';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface IArea {
  id?: string;
  name: string;
  hectares: number;
}

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(private db: AngularFirestore) { }

  add(area: IArea, farm: IFarm): Observable<Promise<DocumentReference>> {
    return of(this.db
      .collection(`${farm.path}/areas`)
      .add(area)
    );
  }

  getAll(farm: IFarm): Observable<IArea[]> {
    return this.db.collection(`${farm.path}/areas`).snapshotChanges().pipe(
      map(items => items.map<IArea>(resp => {
        const fireDoc: QueryDocumentSnapshot<any> = resp.payload.doc;
        const { name, hectares } = fireDoc.data();
        return {
          id: fireDoc.id,
          name,
          hectares
        }
      }))
    );
  }

  update(area: IArea, farm: IFarm): Observable<Promise<void>> {
    return of(this.db.collection(`${farm.path}/areas`).doc(area.id).set(area));
  }
  
  delete(area: IArea, farm: IFarm): Observable<Promise<void>>{
    return of(this.db.collection(`${farm.path}/areas`).doc(area.id).delete());
  }
}
