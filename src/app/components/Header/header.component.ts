import {Component, OnInit} from '@angular/core'
import { MyDataService } from 'src/app/services/currencies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  myData: any;
  constructor(private myDataServise: MyDataService) {}

  ngOnInit(): void {
    this.myDataServise.getData().subscribe((data) => {
      this.myData = data;
    })
  }
}

