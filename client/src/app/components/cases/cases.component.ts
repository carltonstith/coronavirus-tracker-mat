import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CasesDataSource, CasesItem } from './cases-datasource';
import { CaseApiService } from '../../services/case-api.service';
import { Cases } from '../../cases';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['_id', 'first_name', 'last_name', 'gender', 'age', 'email', 'country', 'status', 'actions'];
  data: Cases[] = [];
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<CasesItem>;
  //dataSource: CasesDataSource;
  @ViewChild(MatTable) table: MatTable<Cases>;
  //dataSource: CaseApiService;
  // isLoadingResults = true;

  constructor(private route: ActivatedRoute, private router: Router, private api: CaseApiService,private httpClient:HttpClient) { }

  ngOnInit() {
    this.api.getCases()
    .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
    //this.dataSource = new CasesDataSource();
    //this.dataSource = new CaseApiService();
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

  ngAfterViewInit() {
    console.log('paginator')
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}
