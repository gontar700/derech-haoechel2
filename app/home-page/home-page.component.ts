import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'rb-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
      trigger('pic11',
        [state(('show'),
            style({'opacity':1,
              transform: 'translateX(0)'
            })),
          state(('hide'),
              style({'opacity':0,
                transform: 'translateX(0)'})),
          transition('show => hide' , animate(800))
        ]
      ),
      trigger('pic12',
        [state(('show'),
            style({'opacity':1,
              transform: 'translateX(0)'
            })),
          state(('hide'),
              style({'opacity':0,
                transform: 'translateX(0)'})),
          transition('show => hide' , animate(800))
        ]
        ),
      trigger('pic13',
        [state(('show'),
            style({'opacity':1,
              transform: 'translateX(0)'
            })),
          state(('hide'),
              style({'opacity':0,
                transform: 'translateX(0)'})),
          transition('show => hide' , animate(800))
        ]
        ),
      trigger('pic14',
        [state(('show'),
            style({'opacity':1,
              transform: 'translateX(0)'
            })),
          state(('hide'),
              style({'opacity':1,
                transform: 'translateX(0)'})),
          transition('show => hide' , animate(800))
        ]),
      trigger('arState',
          [state(('up'),
              style({'opacity':1,
                  transform: 'translateY(0)'
              })),
              state(('down'),
                  style({'opacity':0,
                      transform: 'translateY(150px)'})),
              transition('up => down' , animate(2000))
          ])]
})
export class HomePageComponent implements OnInit {
  pic11 = 'show';
  pic12 = 'show';
  pic13 =  'show';
  pic14 = 'show';
  arState = 'up';

  myFunc = function (mod){setInterval(() => {
    /* cycle of 4 situation as number of the pictures, every 3 sec changing state iside the cycle*/
    switch (mod%4) {
      case 0:
        this.pic11 =='show' ? this.pic11 = 'hide':this.pic11='show'; //flop state of choc1
        break;
      case 1:
        this.pic12 =='show' ? this.pic12 = 'hide':this.pic12='show'; //flop state desert3
        break;
      case 2:
        this.pic13 =='show' ? this.pic13 = 'hide':this.pic13 = 'show'; //flop state maafe1
        break;
      case 3:
        this.pic14 =='show' ? this.pic14 = 'hide':this.pic14 = 'show'; //flop state meat1
        break;
        case 4:
    }
    // check if mobile screen
    if (screen.width<401)
    {
      // if so check if mod <5
      if (mod<5)
      {
        // keep running the loop
        mod++;
      }
      // else activate mobile menu
      else
      {
        this.mobmenu();
      }
    }
    // else it is not a mobile screen, keep running and ignore menu activation
    else
    {
      mod++;
    }
  },1300)};

    myFunc2 = function (mod){setInterval(() => {
        if (mod<10)
        {
            this.arState =='down' ? this.arState = 'up':this.arState='down';
        }
        mod++;

    },300)};

    constructor() { }

  ngOnInit() {
    this.myFunc(0); // activate slider + menu
  }

  goTo(location: string): void
  {
      window.location.hash = location;
  }
  arrAnimate():void
  {
      this.myFunc2(0);
  }
}
