import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * function to fetch all type objects from the api
   * @param type the object type
   */
  fetchAll(type: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.api + type)
        .toPromise()
        .then((res: any) => {
          console.log('Fetched:', res.length, 'records of', type);
          resolve(res);
        })
        .catch(err => {
          console.log('Error: fetching', type);
          reject(err);
        });
    });
  }

  /**
   * function to save records to the database
   * @param type type of record to add
   * @param record the actual object to save
   */
  addRecord(type: string, record): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.api + type, record, {})
        .toPromise()
        .then(res => {
          console.log('Success: Adding', record);
          resolve(res);
        })
        .catch(err => {
          console.log('Error: adding', type);
          reject(err);
        });
    })
  }
}
