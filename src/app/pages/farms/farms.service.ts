import { Injectable } from '@angular/core';
import { AngularFirestore, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { map, skipWhile, take, tap, startWith } from 'rxjs/operators';
import { interval, Observable, throwError } from 'rxjs';

export interface IFarm {
  id?: string;
  name: string;
  path?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FarmsService {
  farms: IFarm[];

  constructor(private db: AngularFirestore) { }

  getAll() {
    return this.db
      .collection('farms')
      .snapshotChanges().pipe(
        map(items => items.map<IFarm>(resp => {
          const fireDoc: QueryDocumentSnapshot<any> = resp.payload.doc;
          return {
            id: fireDoc.id,
            name: fireDoc.data().name,
            path: fireDoc.ref.path
          }
        }))
      );
  }

  setLocalFarm(farm: IFarm) {
    localStorage.setItem('selectedFarm', JSON.stringify(farm));
  }

  getLocalFarm(): Observable<IFarm> {
    return interval(300).pipe(
      startWith(0),
      tap(v => v > 60000 && throwError('Timeout!')),
      skipWhile(v => !this.hasLocalFarm()),
      take(1),
      map(v => localStorage.getItem('selectedFarm')),
      map(v => JSON.parse(v) as IFarm)
    );
  }

  hasLocalFarm(): boolean {
    return !!localStorage.getItem('selectedFarm');
  }
}
