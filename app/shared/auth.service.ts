/**
 * Created by danielgontar on 5/6/17.
 */
import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AuthService {
    constructor(private http:Http) {}

    send_lead_information(name,email,mobile)
    {
        this.http.get('http://backend.delikates.co.il/receive_data.php?name='+name+'&email='+email+'&mobile='+mobile)
            .subscribe(
                (data:Response)=>console.log(data))
    }
    send_order_information(data)
    {
        const body = JSON.stringify(data);
        console.log(body);
        const headers = new Headers();
        this.http.post('http://backend.delikates.co.il/receive_data2.php',
            body,{headers:headers}).subscribe(
            (data:Response)=>console.log(data))
    }
}