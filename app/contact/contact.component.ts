import {Component, OnInit, trigger, transition, style, state, animate} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Route, Router, Routes, RouterLink} from "@angular/router";

@Component({
    selector: 'rb-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    animations: [
        trigger('formState',
            [state(('show'),
                style({'opacity':1,
                    transform: 'translateX(0)'
                })),
                state(('hide'),
                    style({'opacity':0,
                        transform: 'translateX(0)'})),
                transition('show => hide' , animate(3000))
            ]),
        trigger('thankYouState',
            [state(('hide'),
                style({'opacity':0,
                    transform: 'translateX(0)'
                })),
                state(('show'),
                    style({'opacity':1,
                        transform: 'translateX(40)'})),
                transition('hide => show' , animate(2000))
            ]),

    ]
})
export class ContactComponent implements OnInit
{
    private name:string;
    private email:string;
    private mobile:string;
    private formState = 'show';
    private thankYouState = 'hide';



    mapOptions = {                                          // Start of , displaying centered map without markers
        center: new google.maps.LatLng(32.099,34.797),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map:any;
    coordinates = new google.maps.LatLng(32.109,34.839);
    title='״דרך האוכל״ - רחוב הברזל 23 רמת החייל';
    marker:any;

    constructor(private authService:AuthService, private router:Router) {

    }

    ngOnInit()
    {
        this.map = new google.maps.Map(document.getElementById("mymap"),this.mapOptions);
        this.marker = new google.maps.Marker({position:this.coordinates,title:this.title});
        this.marker.setMap(this.map);
    }
    onSubmit(form:any)
    {
        this.name = form.value.name;
        this.email = form.value.email;
        this.mobile = form.value.mobile;
        /* ajax call*/
        this.authService.send_lead_information(this.name,this.email,this.mobile);
        /*call show and hide function*/
        this.formAnimate();
    }
    formAnimate()
    {
        this.formState = 'hide';
        this.myFunc();
    }
    myFunc()
    {
        let timesRun = 0;
        let interval = setInterval(()=>{
            timesRun += 1;
            if(timesRun == 1){
                clearInterval(interval);
            }
            this.thankYouState = 'show';
        }, 3000);
        this.myFunc2()
    }
    myFunc2()
    {
        let timesRun = 0;
        let interval = setInterval(()=>{
            timesRun += 1;
            if(timesRun == 1){
                clearInterval(interval);
            }
            this.router.navigate(['/home']);
        }, 7000);
    }
}
