import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseApiService } from '../../services/case-api.service';
import { Cases } from '../../cases';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.scss']
})
export class CasesDetailsComponent implements OnInit {
  cases: Cases = { _id: '', first_name: '', last_name: '', gender: '', age: null, email:'', country: '', status: '', updated: null };
  isLoadingResults = false;

  constructor(private route: ActivatedRoute, private router: Router, private api: CaseApiService) { }

  ngOnInit(): void {
    this.getCasesDetails(this.route.snapshot.params.id);
  }

  getCasesDetails(id: string) {
    this.api.getCase(id)
      .subscribe((data: any) => {
        this.cases = data;
        console.log(this.cases);
        this.isLoadingResults = false;
      });
  }

  deleteCases(id: any) {
    this.isLoadingResults = true;
    this.api.deleteCase(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/cases']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }

}
