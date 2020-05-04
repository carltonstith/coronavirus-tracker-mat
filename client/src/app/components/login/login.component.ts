import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // addressForm = this.fb.group({
  //   company: null,
  //   username: [null, Validators.required],
  //   password: [null, Validators.required],
  //   address: [null, Validators.required],
  //   address2: null,
  //   city: [null, Validators.required],
  //   state: [null, Validators.required],
  //   postalCode: [null, Validators.compose([
  //     Validators.required, Validators.minLength(5), Validators.maxLength(5)])
  //   ],
  //   shipping: ['free', Validators.required]
  // });
  addressForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router, private flashMessageService: FlashMessagesService, private authService: AuthService) {}

  ngOnInit(): void {

  }

  onLoginSubmit() {
    //console.log(this.addressForm.value.password);
    const user = {
      username: this.addressForm.value.username,
      password: this.addressForm.value.password
    }

    // Login User
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        // this.flashMessageService.show(`Welcome back ${this.addressForm.value.username}. You are now logged in.`, {
        //   cssClass: 'alert-success',
        //   timeout: 5000
        // });
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessageService.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        //this.router.navigate(['login']);
      }
    });
  }

  // hasUnitNumber = false;

  // states = [
  //   {name: 'Alabama', abbreviation: 'AL'},
  //   {name: 'Alaska', abbreviation: 'AK'},
  //   {name: 'American Samoa', abbreviation: 'AS'},
  //   {name: 'Arizona', abbreviation: 'AZ'},
  //   {name: 'Arkansas', abbreviation: 'AR'},
  //   {name: 'California', abbreviation: 'CA'},
  //   {name: 'Colorado', abbreviation: 'CO'},
  //   {name: 'Connecticut', abbreviation: 'CT'},
  //   {name: 'Delaware', abbreviation: 'DE'},
  //   {name: 'District Of Columbia', abbreviation: 'DC'},
  //   {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
  //   {name: 'Florida', abbreviation: 'FL'},
  //   {name: 'Georgia', abbreviation: 'GA'},
  //   {name: 'Guam', abbreviation: 'GU'},
  //   {name: 'Hawaii', abbreviation: 'HI'},
  //   {name: 'Idaho', abbreviation: 'ID'},
  //   {name: 'Illinois', abbreviation: 'IL'},
  //   {name: 'Indiana', abbreviation: 'IN'},
  //   {name: 'Iowa', abbreviation: 'IA'},
  //   {name: 'Kansas', abbreviation: 'KS'},
  //   {name: 'Kentucky', abbreviation: 'KY'},
  //   {name: 'Louisiana', abbreviation: 'LA'},
  //   {name: 'Maine', abbreviation: 'ME'},
  //   {name: 'Marshall Islands', abbreviation: 'MH'},
  //   {name: 'Maryland', abbreviation: 'MD'},
  //   {name: 'Massachusetts', abbreviation: 'MA'},
  //   {name: 'Michigan', abbreviation: 'MI'},
  //   {name: 'Minnesota', abbreviation: 'MN'},
  //   {name: 'Mississippi', abbreviation: 'MS'},
  //   {name: 'Missouri', abbreviation: 'MO'},
  //   {name: 'Montana', abbreviation: 'MT'},
  //   {name: 'Nebraska', abbreviation: 'NE'},
  //   {name: 'Nevada', abbreviation: 'NV'},
  //   {name: 'New Hampshire', abbreviation: 'NH'},
  //   {name: 'New Jersey', abbreviation: 'NJ'},
  //   {name: 'New Mexico', abbreviation: 'NM'},
  //   {name: 'New York', abbreviation: 'NY'},
  //   {name: 'North Carolina', abbreviation: 'NC'},
  //   {name: 'North Dakota', abbreviation: 'ND'},
  //   {name: 'Northern Mariana Islands', abbreviation: 'MP'},
  //   {name: 'Ohio', abbreviation: 'OH'},
  //   {name: 'Oklahoma', abbreviation: 'OK'},
  //   {name: 'Oregon', abbreviation: 'OR'},
  //   {name: 'Palau', abbreviation: 'PW'},
  //   {name: 'Pennsylvania', abbreviation: 'PA'},
  //   {name: 'Puerto Rico', abbreviation: 'PR'},
  //   {name: 'Rhode Island', abbreviation: 'RI'},
  //   {name: 'South Carolina', abbreviation: 'SC'},
  //   {name: 'South Dakota', abbreviation: 'SD'},
  //   {name: 'Tennessee', abbreviation: 'TN'},
  //   {name: 'Texas', abbreviation: 'TX'},
  //   {name: 'Utah', abbreviation: 'UT'},
  //   {name: 'Vermont', abbreviation: 'VT'},
  //   {name: 'Virgin Islands', abbreviation: 'VI'},
  //   {name: 'Virginia', abbreviation: 'VA'},
  //   {name: 'Washington', abbreviation: 'WA'},
  //   {name: 'West Virginia', abbreviation: 'WV'},
  //   {name: 'Wisconsin', abbreviation: 'WI'},
  //   {name: 'Wyoming', abbreviation: 'WY'}
  // ];
}