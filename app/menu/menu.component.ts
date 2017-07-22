import {Component, OnInit, animate, transition, style, state, trigger} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'rb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('general',
        [state(('hide'),
            style({'opacity':0,
              'z-index':-100,
              transform: 'translateX(0)'
            })),
          state(('show'),
              style({'opacity':1,
                'z-index':9999,
                transform: 'translateX(0)'})),
          transition('hide => show' , animate(1000))
        ]
    ),
      trigger('general2',
          [state(('hide'),
              style({'opacity':0,
                  'z-index':-100,
                  transform: 'translateX(0)'
              })),
              state(('show'),
                  style({'opacity':1,
                      'z-index':9999,
                      transform: 'translateX(0)'})),
              transition('hide => show' , animate(1000))
          ]
      ),
    trigger('mana1',
        [state(('hide'),
            style({'opacity':0,
                    'z-index':-100,
              transform: 'translateX(0)'
            })),
          state(('show'),
              style({'opacity':1,
                      'z-index':9999,
                transform: 'translateX(0)'})),
          transition('hide => show' , animate(1000))
        ]
    ),
    trigger('mana2',
        [state(('hide'),
            style({'opacity':0,
              'z-index':-200,
              transform: 'translateX(0)'
            })),
          state(('show'),
              style({'opacity':1,
                'z-index':9999,
                transform: 'translateX(0)'})),
          transition('hide => show' , animate(1000))
        ]
    ),
    trigger('mana3',
        [state(('hide'),
            style({'opacity':0,
              'z-index':-300,
              transform: 'translateX(0)'
            })),
          state(('show'),
              style({'opacity':1,
                'z-index':9999,
                transform: 'translateX(0)'})),
          transition('hide => show' , animate(1000))
        ]
    ),
    trigger('details1',
        [state(('hide'),
            style({'opacity':0,
                    'z-index':-400,
                     transform: 'translateX(0)'})),
            state(('show'),
                style({'opacity':1,
                    'z-index':9999,
                    transform: 'translateX(0)'})),
            transition('hide => show', animate(1000))
        ]
    ),
      trigger('details2',
          [state(('hide'),
              style({'opacity':0,
                  'z-index':-400,
                  transform: 'translateX(0)'})),
              state(('show'),
                  style({'opacity':1,
                      'z-index':9999,
                      transform: 'translateX(0)'})),
              transition('hide => show', animate(1000))
          ]
      ),
    trigger('dropdown1',
        [state(('hide'),
            style({'opacity':0,
                'z-index':-500,
                transform: 'translateX(0)'})),
            state(('show'),
                style({'opacity':1,
                    'z-index':9999,
                    transform: 'translateX(0)'})),
            transition('hide => show', animate(600))
        ]
    ),
    trigger('dropdown2',
            [state(('hide'),
                style({'opacity':0,
                    'z-index':-600,
                    transform: 'translateX(0)'})),
                state(('show'),
                    style({'opacity':1,
                        'z-index':9999,
                        transform: 'translateX(0)'})),
                transition('hide => show', animate(600))
            ]
    ),
    trigger('dropdown3',
        [state(('hide'),
            style({'opacity':0,
                'z-index':-600,
                 transform: 'translateX(0)'})),
                     state(('show'),
                         style({'opacity':1,
                             'z-index':9999,
                             transform: 'translateX(0)'})),
                transition('hide => show', animate(600))
        ]
    ),
      trigger('dropdown4',
          [state(('hide'),
              style({'opacity':0,
                  'z-index':-600,
                  transform: 'translateX(0)'})),
              state(('show'),
                  style({'opacity':1,
                      'z-index':9999,
                      transform: 'translateX(0)'})),
              transition('hide => show', animate(600))
          ]
      ),
      trigger('creditExmp',
          [state(('hide'),
              style({'opacity':0,
                  'z-index':-600,
                  transform: 'translateX(0)'})),
              state(('show'),
                  style({'opacity':1,
                      'z-index':9999,
                      transform: 'translateX(0)'})),
              transition('hide => show', animate(600))
          ]
      ),
      trigger('summary',
          [state(('hide'),
              style({'opacity':0,
                  'z-index':-600,
                  transform: 'translateX(0)'})),
              state(('show'),
                  style({'opacity':1,
                      'z-index':9999,
                      transform: 'translateX(0)'})),
              transition('hide => show', animate(600))
          ]
      ),
      trigger('thankyou',
          [state(('hide'),
              style({'opacity':0,
                  'z-index':-600,
                  transform: 'translateX(0)'})),
              state(('show'),
                  style({'opacity':1,
                      'z-index':9999,
                      transform: 'translateX(0)'})),
              transition('hide => show', animate(600))
          ]
      )
  ]
})
export class MenuComponent implements OnInit {
    private number;
    private values=[]; // the final values of the div elements
    private prices=[45,42,38];
    private totalExpense;
    private div_total_price;
    private div_total_price2;
    private currentMana;
    private general = 'hide';
    private general2 = 'hide';
    private mana1 = 'hide';
    private mana2 = 'hide';
    private mana3 = 'hide';
    private details1 = 'hide';
    private details2 = 'hide';
    private dropdown1 = 'hide';
    private dropdown2 = 'hide';
    private dropdown3 = 'hide';
    private dropdown4 = 'hide';
    private creditExmp = 'hide';
    private summary = 'hide';
    private thankyou = 'hide';
    private user =
      {
          name: 'שם מלא',
          email: 'מייל',
          phone: 'טלפון',
          address: 'כתובת למשלוח',
          city: 'עיר'
      };
    private card =
        {
            type: 'סוג כרטיס',
            payments: 'תשלומים',
            number: 'מספר כרטיס',
            cvv: '3 ספרות בגב הכרטיס',
            month: 'חודש',
            year: 'שנה'
        };
    private data; // json send to serve with all data
  constructor(private authService:AuthService, private router:Router) {}
  ngOnInit()
  {
      this.totalExpense = 0;
      this.div_total_price = document.getElementById("price_val");
      this.div_total_price2 = document.getElementById("price_val2");
      this.div_total_price.innerText = this.totalExpense;
      this.number = {
            number1:document.getElementById('number1'),
            number2:document.getElementById('number2'),
            number3:document.getElementById('number3'),
        }
  }
  fmana1()
  {
    this.mana1 = 'show';
    this.general = 'show';
    this.general2 = 'show';
    this.currentMana = 1;
  }
  fmana2()
  {
    this.mana2 = 'show';
    this.general = 'show';
    this.general2 = 'show';
    this.currentMana = 2;
  }
  fmana3()
  {
    this.mana3 = 'show';
    this.general = 'show';
    this.general2 = 'show';
    this.currentMana = 3;
  }
  up(param)
  {
      switch (param)
      {
          case 'number1':
              let count1 = parseInt(this.number.number1.innerText);
              if (count1<6)
              {
                  count1++;
                  this.number.number1.innerText = count1;
              }
              else
              {
                  alert('לא ניתן להזמין יותר מ- 6 מנות');
              }
              break;
          case 'number2':
              let count2 = parseInt(this.number.number2.innerText);
              if (count2<6)
              {
                  count2++;
                  this.number.number2.innerText = count2;
              }
              else
              {
                  alert('לא ניתן להזמין יותר מ- 6 מנות');
              }
              break;
          case 'number3':
              let count3 = parseInt(this.number.number3.innerText);
              if (count3<6)
              {
                  count3++;
                  this.number.number3.innerText = count3;
              }
              else
              {
                  alert('לא ניתן להזמין יותר מ- 6 מנות');
              }
              break;
      }
  }
  down(param)
  {
      switch (param)
      {
          case 'number1':
              let count1 = parseInt(this.number.number1.innerText);
              if (count1>0)
              {
                  count1--;
                  this.number.number1.innerText = count1;
              }
              else
              {
                  alert('לא ניתן לרדת מ-0');
              }
              break;
          case 'number2':
              let count2 = parseInt(this.number.number2.innerText);
              if (count2>0)
              {
                  count2--;
                  this.number.number2.innerText = count2;
              }
              else
              {
                  alert('לא ניתן לרדת מ-0');
              }
              break;
          case 'number3':
              let count3 = parseInt(this.number.number3.innerText);
              if (count3>0)
              {
                  count3--;
                  this.number.number3.innerText = count3;
              }
              else
              {
                  alert('לא ניתן לרדת מ-0');
              }
              break;
      }
  }
  abort()
  {
    this.mana1 = 'hide';
    this.mana2 = 'hide';
    this.mana3 = 'hide';
    this.details1 = 'hide';
    this.details2 = 'hide';
    this.summary = 'hide';
    this.general = 'hide';
    this.general2 = 'hide';
    this.totalExpense = 0;
  }
  arrowMove(direction)
  {
    if (direction == -1) // move left
    {
      switch (this.currentMana)
      {
        case 1:
          this.mana1 = 'hide';
          this.mana3 = 'show';
          this.currentMana = 3;
          break;
        case 2:
          this.mana2 = 'hide';
          this.mana1 = 'show';
          this.currentMana = 1;
          break;
        case 3:
          this.mana3 = 'hide';
          this.mana2 = 'show';
          this.currentMana = 2;
          break;
      }
    }
    else // move right
    {
      switch (this.currentMana)
      {
        case 1:
          this.mana1 = 'hide';
          this.mana2 = 'show';
          this.currentMana = 2;
          break;
        case 2:
          this.mana2 = 'hide';
          this.mana3 = 'show';
          this.currentMana = 3;
          break;
        case 3:
          this.mana3 = 'hide';
          this.mana1 = 'show';
          this.currentMana = 1;
          break;
      }
    }
  }
  hazmen()
  {
        this.values[0]=parseInt(this.number.number1.innerText);
        this.values[1]=parseInt(this.number.number2.innerText);
        this.values[2]=parseInt(this.number.number3.innerText);

        for (let j =0; j<3; j++)
        {
            this.totalExpense+=this.values[j]*this.prices[j];
        }
        this.div_total_price.innerText = this.totalExpense;
        this.mana1 = 'hide';
        this.mana2 = 'hide';
        this.mana3 = 'hide';
        this.general = 'hide';
        this.details1 = 'show';
  }
  hazmen2()
  {
      this.div_total_price2.innerText = this.totalExpense;
      this.details1 = 'hide';
      this.details2 = 'show';
  }
  hazmen3()
  {
      let kamut1 = document.getElementById('kamut1');
      let kamut2 = document.getElementById('kamut2');
      let kamut3 = document.getElementById('kamut3');

      let sahakol2 = document.getElementById('sahakol2');
      let sahakol4 = document.getElementById('sahakol4');
      let sahakol6 = document.getElementById('sahakol6');

      let final = document.getElementById('final');
      let credit4 = document.getElementById('credit4');

      kamut1.innerText = this.values[0];
      kamut2.innerText = this.values[1];
      kamut3.innerText = this.values[2];

      sahakol2.innerText = this.values[0]*this.prices[0];
      sahakol4.innerText = this.values[1]*this.prices[1];
      sahakol6.innerText = this.values[2]*this.prices[2];


      final.innerText = this.values[0]*this.prices[0] + this.values[1]*this.prices[1] +
          this.values[2]*this.prices[2];
      credit4.innerHTML = this.card.number.slice(this.card.number.length-4,
          this.card.number.length);

      this.details2 = 'hide';
      this.summary = 'show';
  }

  hazmen4()
  {
      this.summary = 'hide';
      this.thankyou = 'show';
      this.data = {
                    productAmount1: this.values[0],
                    productAmount2: this.values[1],
                    productAmount3: this.values[2],
                    totalExpance: this.totalExpense,
                    userName: this.user.name,
                    useEmail: this.user.email,
                    userPhone: this.user.phone,
                    userAddress: this.user.address,
                    userCity: this.user.city,
                    cardType: this.card.type,
                    cardPayments: this.card.payments,
                    cardNumber: this.card.number,
                    cardCvv: this.card.cvv,
                    cardMonth: this.card.month,
                    cardYear: this.card.year
                  }
      this.authService.send_order_information(this.data);
      this.hazmen5();
  }
  hazmen5()
  {
      let timesRun = 0;
      let interval = setInterval(()=>{
          timesRun += 1;
          if(timesRun == 1){
              clearInterval(interval);
          }
          this.thankyou = 'hide';
          this.general2 = 'hide';
          this.router.navigate(['/home']);
      }, 5000);
  }
  dropDownShowHide (dropdown)
  {

      switch (dropdown)
      {
          case 'dropdown1':
              this.dropdown1 =='hide'?this.dropdown1='show':this.dropdown1='hide';
              break;
          case 'dropdown2':
              this.dropdown2 =='hide'?this.dropdown2='show':this.dropdown2='hide';
              break;
          case 'dropdown3':
              this.dropdown3 =='hide'?this.dropdown3='show':this.dropdown3='hide';
              break;
          case 'dropdown4':
              this.dropdown4 =='hide'?this.dropdown4='show':this.dropdown4='hide';
              break;
      }
  }
  dropDownChange(ddType , value)
  {
      switch (ddType)
      {
          case 'cardtype':
              this.card.type = value;
              this.dropDownShowHide('dropdown1');
              break;
          case 'payments':
              this.card.payments = value;
              this.dropDownShowHide('dropdown2');
              break;
          case 'month':
              this.card.month = value;
              this.dropDownShowHide('dropdown3');
              break;
          case 'year':
              this.card.year = value;
              this.dropDownShowHide('dropdown4');
              break;
      }
  }
  showCreditExamp()
  {
      this.creditExmp =='hide'?this.creditExmp='show':this.creditExmp='hide';
  }
}


