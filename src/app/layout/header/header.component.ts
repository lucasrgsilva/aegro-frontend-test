import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FarmsService, IFarm } from 'src/app/pages/farms/farms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  farms: IFarm[];
  selectedFarm: IFarm;
  subscription: Subscription;

  constructor(private farmService: FarmsService) {
  }

  ngOnInit() {
    this.subscription = this.farmService.getAll()
      .subscribe(farms => {
        this.farms = farms;

        if (!this.farmService.hasLocalFarm()) {
          this.farmService.setLocalFarm(this.farms[0]);
        }

        this.farmService.getLocalFarm().subscribe(localFarm => {
          this.selectedFarm = this.farms.find(item => item.id === localFarm.id);
        });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
