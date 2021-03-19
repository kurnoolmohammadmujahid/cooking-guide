import { Component, OnInit } from '@angular/core';
import { ServerCallsService } from 'src/app/services/server-calls.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favLst: any = [];
  dish: any;
  img: string;
  description: any;
  enableMsg: boolean = true;
  constructor(private apiCall: ServerCallsService) { }

  ngOnInit(): void {
    this.apiCall.getfavorite().then(data => {
      // this.favLst = data;
      for (let mainFav of data) {
        if (mainFav.count > 4) {
          this.favLst.push(mainFav);
        }
      }
      if (this.favLst.length == 0) {
        this.enableMsg = true;
      } else {
        this.enableMsg = false;
      }
    });
  }

  displayModal: boolean = false;

  showModalDialog(product: any) {
    this.displayModal = true;
    this.dish = product.dish;
    this.img = "assets/img/chicken-noodles.jpg";
    this.description = product.description;
  }


}
