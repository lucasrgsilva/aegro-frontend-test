import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AngularFirestore } from '@angular/fire/firestore';
import { FarmsService, IFarm } from '../farms/farms.service';
import { Subscription, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IArea } from '../areas/areas.service';
import { ICrop } from '../crops/crops.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedArea: IArea;
  areas: IArea[] = [];
  crops: ICrop[] = [];
  farm: IFarm;
  loaded: boolean;

  lineChartData: ChartDataSets[] = [
    { data: [45, 53, 65, 59, 70, 65, 56, 55, 44, 44, 55], label: 'Café' },
  ];

  lineChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];

  lineChartLegend = true;
  lineChartType = 'line';
  lineChartPlugins = [];

  constructor(
    private db: AngularFirestore,
    private farmService: FarmsService,
  ) { }

  ngOnInit() {
    this.getAllCrops();
  }

  getAllCrops() {
    this.subscription = this.farmService.getLocalFarm().pipe(
      switchMap(farm => this.db.collectionGroup<ICrop>('crops', ref => ref.where('farmID', '==', farm.id)).valueChanges()),
    ).subscribe(crops => {
      this.crops = crops
      this.loaded = true;
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
