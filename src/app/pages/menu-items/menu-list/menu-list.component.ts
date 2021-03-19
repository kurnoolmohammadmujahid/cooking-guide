import { Component, OnInit } from '@angular/core';
import { ServerCallsService } from 'src/app/services/server-calls.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menuLst: any = []
  dish: any;
  img: any;
  description: any;
  datamatch: any = 0;
  getFavCount: any = 0;
  getFavId: any;

  constructor(private apiCall: ServerCallsService) { }

  ngOnInit(): void {
    this.apiCall.getAllMenuItems().then(data => {
      this.menuLst = data;
    });
  }

  displayModal: boolean = false;

  showModalDialog(product: any) {
    this.displayModal = true;
    this.datamatch = 0;
    this.dish = product.dish;
    this.img = "assets/img/chicken-noodles.jpg";
    this.description = product.description;
    let dishData = {
      "dish": product.dish,
      "img": "",
      "description": product.description,
      "refId": product.refId,
      "count": 1
    }
    this.apiCall.getfavorite().then(fav => {
      for (let i = 0; i < fav.length; i++) {
        if (product.refId == fav[i].refId) {
          this.getFavCount = fav[i].count;
          this.getFavId = fav[i].id;
        } else {
          this.datamatch++;
        }
      }
      if (this.datamatch == fav.length) {
        // let dishData = {
        //   "dish": product.dish,
        //   "img": "",
        //   "description": product.description,
        //   "id": product.id,
        //   "count": 0
        // }
        this.addfavlist(dishData)
      } else {
        this.datamatch = 0;
        if (this.getFavCount > 4) {
          dishData.count = this.getFavCount;
          this.updatefavlist(this.getFavId, dishData)
        } else {
          dishData.count = this.getFavCount + 1;
          this.updatefavlist(this.getFavId, dishData)
        }
      }
    });
  }
  addfavlist(dishData) {
    this.apiCall.addViewCount(dishData).then(data => {
      this.getFavCount = 0;
    });
  }
  updatefavlist(getFavId, dishData) {
    this.apiCall.updateFavCountById(getFavId, dishData).then(data => {
      this.getFavCount = 0;
    });
  }



}
