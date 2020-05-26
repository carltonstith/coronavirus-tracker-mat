import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseApiService } from '../../services/case-api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-cases-add',
  templateUrl: './cases-add.component.html',
  styleUrls: ['./cases-add.component.scss']
})
export class CasesAddComponent implements OnInit {

  casesForm: FormGroup;
  first_name: '';
  last_name: '';
  age: number = null;
  gender: '';
  genderList = ['Male', 'Female'];
  countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Aland Islands',
    'American Samoa',
    'Anguilla',
    'Andorra',
    'Angola',
    'Antilles - Netherlands ',
    'Antigua and Barbuda',
    'Antarctica',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Aruba',
    'Azerbaijan',
    'Bosnia and Herzegovina',
    'Barbados',
    'Bangladesh',
    'Belgium',
    'Burkina Faso',
    'Bulgaria',
    'Bahrain',
    'Burundi',
    'Benin',
    'Bermuda',
    'Brunei Darussalam',
    'Bolivia',
    'Brazil',
    'Bahamas',
    'Bhutan',
    'Bouvet Island',
    'Botswana',
    'Belarus',
    'Belize',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Congo',
    'Cote D\'Ivoire (Ivory Coast)',
    'Cook Islands',
    'Costa Rica',
    'Croatia (Hrvatska)',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Democratic Republic of the Congo',
    'Djibouti',
    'Denmark',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'East Timor',
    'Estonia',
    'Equatorial Guinea',
    'Eritrea',
    'Ethiopia',
    'Finland',
    'Fiji',
    'Falkland Islands (Malvinas)',
    'Federated States of Micronesia',
    'Faroe Islands',
    'France',
    'France, Metropolitan',
    'French Guiana',
    'French Polynesia',
    'Gabon',
    'Gambia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Great Britain (UK)',
    'Grenada',
    'Georgia',
    'Greece',
    'Greenland',
    'Guinea',
    'Guadeloupe',
    'S. Georgia and S. Sandwich Islands',
    'Guatemala',
    'Guam',
    'Guinea-Bissau',
    'Guyana',
    'Hong Kong',
    'Heard Island and McDonald Islands',
    'Honduras',
    'Haiti',
    'Hungary',
    'Indonesia',
    'Ireland',
    'Israel',
    'India',
    'British Indian Ocean Territory',
    'Iraq',
    'Iran',
    'Italy',
    'Jamaica',
    'Jordan',
    'Japan',
    'Kenya',
    'Kyrgyzstan',
    'Kiribati',
    'Comoros',
    'Saint Kitts and Nevis',
    'Korea (North)',
    'Korea (South)',
    'Kuwait',
    'Cayman Islands',
    'Kazakhstan',
    'Laos',
    'Lebanon',
    'Saint Lucia',
    'Liechtenstein',
    'Sri Lanka',
    'Liberia',
    'Lesotho',
    'Lithuania',
    'Luxembourg',
    'Latvia',
    'Libya',
    'Macedonia',
    'Macao',
    'Madagascar',
    'Malaysia',
    'Mali',
    'Malawi',
    'Mauritania',
    'Marshall Islands',
    'Martinique',
    'Mauritius',
    'Mayotte',
    'Malta',
    'Mexico',
    'Morocco',
    'Monaco',
    'Moldova',
    'Mongolia',
    'Myanmar',
    'Northern Mariana Islands',
    'Montserrat',
    'Maldives',
    'Mozambique',
    'Namibia',
    'New Caledonia',
    'Niger',
    'Norfolk Island',
    'Nigeria',
    'Nicaragua',
    'Netherlands',
    'Norway',
    'Nepal',
    'Nauru',
    'Niue',
    'New Zealand (Aotearoa)',
    'Oman',
    'Panama',
    'Peru',
    'Papua New Guinea',
    'Philippines',
    'Pakistan',
    'Poland',
    'Saint Pierre and Miquelon',
    'Serbia and Montenegro',
    'Pitcairn',
    'Puerto Rico',
    'Palestinian Territory',
    'Portugal',
    'Palau',
    'Paraguay',
    'Qatar',
    'Reunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saudi Arabia',
    'Samoa',
    'Saint Helena',
    'Saint Vincent and the Grenadines',
    'San Marino',
    'Sao Tome and Principe',
    'Senegal',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syria',
    'USSR (former)',
    'Swaziland',
    'Taiwan',
    'Tanzania',
    'Tajikistan',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Ukraine',
    'Uganda',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City State',
    'Venezuela',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Viet Nam',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Yugoslavia (former)',
    'Zambia',
    'Zaire (former)',
    'Zimbabwe'
  ];
  statusList = ['Positive', 'Dead', 'Recovered'];
  email: '';
  //country: '';
  status: '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  data = [];

  constructor(private router: Router, private api: CaseApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.api.getCases()
    // .subscribe((res: any) => {
    //   this.data = res;
    //   console.log(this.data);
    //   this.isLoadingResults = false;
    // }, err => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    // });

    this.casesForm = this.formBuilder.group({
      first_name : [null, Validators.required],
      last_name : [null, Validators.required],
      age : [null, Validators.required],
      gender : [null, Validators.required],
      email : [null, Validators.required],
      country : [null, Validators.required],
      status : [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addCase(this.casesForm.value)
      .subscribe((res: any) => {
        const id = res._id;
        this.isLoadingResults = false;
        this.router.navigate(['/cases-details', id])
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      })
  }

}
