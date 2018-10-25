import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MenuItem } from "./app.menu.model";
import { Observable } from "rxjs";

const json_server_api =  'http://localhost:3000';

@Injectable()
export class MenuService {


    
    constructor(private http: HttpClient) {

    }

    getMenuItems() : Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(json_server_api + '/menus');
    }
}