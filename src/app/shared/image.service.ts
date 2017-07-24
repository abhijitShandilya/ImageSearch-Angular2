import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from "../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  private query : string;
  private API_KEY = environment.PIXABAY_API_KEY;
  private API_URL = environment.PIXABAY_API_URL;
  private URL : string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = '&per_page=50';

  constructor(private _http: Http) { }

  getImage(query) {
    return this._http.get(this.URL + query + this.perPage)
    .map(res => res.json());
  }

}
