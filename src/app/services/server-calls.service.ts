import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerCallsService {

  url = environment.url;

  constructor(private http: HttpClient) { }

  getAllMenuItems() {
    return this.http.get<any>(`${this.url}/menuList`)
      .toPromise()
      .then(data => { return data; });
  }

  getfavorite() {
    return this.http.get<any>(`${this.url}/favorites`)
      .toPromise()
      .then(data => { return data; });
  }

  addViewCount(dishData: object) {
    return this.http.post<any>(`${this.url}/favorites`, dishData)
      .toPromise()
      .then(data => { return data; });
  }

  updateFavCountById(id: number, dishData: object) {
    return this.http.put<any>(`${this.url}/favorites/${id}`, dishData)
      .toPromise()
      .then(data => { return data; });
  }

}
