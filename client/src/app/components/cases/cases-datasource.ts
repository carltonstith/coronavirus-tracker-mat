import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface CasesItem {
  _id: number;
  first_name: string;
  last_name: string;
  gender: string;
  age: number;
  email: string;
  country: string;
  status: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CasesItem[] = [
  {_id: 1, first_name: 'Hydrogen', last_name: 'Last', gender: 'Male', age: 1, email: 'last@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 2, first_name: 'Helium', last_name: 'East', gender: 'Male', age: 5, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 3, first_name: 'Lithium', last_name: 'Rast', gender: 'Male', age: 11, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 4, first_name: 'Beryllium', last_name: 'Tast', gender: 'Female', age: 21, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 5, first_name: 'Boron', last_name: 'Dast', gender: 'Male', age: 45, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 6, first_name: 'Carbon', last_name: 'Dast', gender: 'Female', age: 90, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 7, first_name: 'Nitrogen', last_name: 'Fast', gender: 'Male', age: 73, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 8, first_name: 'Oxygen', last_name: 'Jast', gender: 'Female', age: 55, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 9, first_name: 'Fluorine', last_name: 'Vast', gender: 'Male', age: 29, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 10, first_name: 'Neon', last_name: 'Uast', gender: 'Male', age: 30, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 11, first_name: 'Sodium', last_name: 'Past', gender: 'Female', age: 47, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 12, first_name: 'Magnesium', last_name: 'Bast', gender: 'Male', age: 19, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 13, first_name: 'Aluminum', last_name: 'Nast', gender: 'Female', age: 31, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 14, first_name: 'Silicon', last_name: 'Mast', gender: 'Male', age: 61, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 15, first_name: 'Phosphorus', last_name: 'Bast', gender: 'Female', age: 102, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 16, first_name: 'Sulfur', last_name: 'Tast', gender: 'Female', age: 51, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 17, first_name: 'Chlorine', last_name: 'Vast', gender: 'Male', age: 85, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 18, first_name: 'Argon', last_name: 'Cast', gender: 'Female', age: 28, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 19, first_name: 'Potassium', last_name: 'Cast', gender: 'Male', age: 91, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 20, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 21, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 22, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 23, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 24, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 25, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 26, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 27, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 28, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 29, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
  {_id: 30, first_name: 'Calcium', last_name: 'Aast', gender: 'Male', age: 70, email: 'east@gmail.com', country: 'USA', status: 'Recovered'},
];

/**
 * Data source for the Cases view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CasesDataSource extends DataSource<CasesItem> {
  data: CasesItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<CasesItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: CasesItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: CasesItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'first_name': return compare(a.first_name, b.first_name, isAsc);
        case 'last_name': return compare(a.last_name, b.last_name, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
