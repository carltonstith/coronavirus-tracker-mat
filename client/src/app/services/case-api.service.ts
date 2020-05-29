import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cases } from '../cases';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

// const apiUrl = 'http://localhost:3200/cases'
const apiUrl = 'cases'

@Injectable({
  providedIn: 'root'
})
export class CaseApiService {
  data: Cases[] = [];

  constructor(private httpClient:HttpClient) { }

  // Error Handling
  private handleError<T> (operation = 'operation', result?:T) {
    return (error:any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }

  // Get All Cases
  // getCases(_id:string, filter = '', sortOrder = 'asc', pageNumber = 0, pageSize = 3): Observable<Cases[]> {
  //   return this.httpClient.get<Cases[]>(`${apiUrl}`, {
  //     params: new HttpParams()
  //       .set('_id', _id.toString())
  //       .set('filter', filter)
  //       .set('sortOrder', sortOrder)
  //       .set('pageNumber', pageNumber.toString())
  //       .set('pageSize', pageSize.toString())
  //   }).pipe(
  //     map(res => res['payload'])
  //   );
  // }

  getCases(): Observable<Cases[]> {
    return this.httpClient.get<Cases[]>(`${apiUrl}`)
      .pipe(
        tap(cases => console.log('fetched cases')),
        catchError(this.handleError('getCases', []))
      )
  }

  // Get a Single Case
  getCase(id): Observable<Cases> {
    const url = `${apiUrl}/${id}`;
    return this.httpClient.get<Cases>(url);
  }

  // Add a Case
  addCase(cases: Cases): Observable<Cases> {
    return this.httpClient.post<Cases>(`${apiUrl}`, cases, httpOptions);
  }

  // Update a Case
  updateCase(id: string,cases: Cases): Observable<any> {
    const url = `${apiUrl}/${id}`
    return this.httpClient.put<Cases>(url, cases, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete a Case
  deleteCase(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.httpClient.delete<Cases>(url,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
