import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'rb-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
              style({'opacity':0,
                transform: 'translateX(0)'})),
          transition('show => hide' , animate(800))
        ])]
})
export class AboutComponent implements OnInit {
  pic11 = 'show';
  pic12 = 'show';
  pic13 = 'show';
  pic14 = 'show';

  myFunc = function (mod) {
    setInterval(() => {
      /* cycle of 4 situation as number of the pictures, every 3 sec changing state iside the cycle*/
      switch (mod % 4) {
        case 0:
          this.pic11 == 'show' ? this.pic11 = 'hide' : this.pic11 = 'show'; //flop state of choc1
          break;
        case 1:
          this.pic12 == 'show' ? this.pic12 = 'hide' : this.pic12 = 'show'; //flop state desert3
          break;
        case 2:
          this.pic13 == 'show' ? this.pic13 = 'hide' : this.pic13 = 'show'; //flop state maafe1
          break;
        case 3:
          this.pic14 == 'show' ? this.pic14 = 'hide' : this.pic14 = 'show'; //flop state meat1
          break;
      }
      // check if mobile screen
      if (screen.width < 401) {
        // if so check if mod <5
        if (mod < 5) {
          // keep running the loop
          mod++;
        }
        // else activate mobile menu
        else {
          this.mobmenu();
        }
      }
      // else it is not a mobile screen, keep running and ignore menu activation
      else {
        mod++;
      }
    }, 2300)
  };

  constructor() {
  }

  ngOnInit() {
    this.myFunc(0); // activate slider + menu
  }

  goTo(location: string): void {
    window.location.hash = location;
  }
}
