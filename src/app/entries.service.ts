import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntries } from './model/UserEntries';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  createAPI = "http://localhost:8080/createEntries";
  createAPIForFiles = "http://localhost:8080/createEntriesForFiles";
  getAPI = "http://localhost:8080/getEntriesList";
  approveAPI = "http://localhost:8080/isApproveEntry";
  updateAPI = "http://localhost:8080/updateEntries";;
  deleteAPI = "http://localhost:8080/deleteEntries";
  selectedPageAPI = "http://localhost:8080/getSelectedEntry";
  constructor(private http: HttpClient) { }
  editVar="0"; 
  isApprove(valId):Observable<any>{
    const body = new HttpParams()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*' 
      })
    };
   return this.http.get(this.approveAPI+"?id="+valId);

  }
  update(userEntries):Observable<any>{
    const body = new HttpParams()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*' 
      })
    };
   return this.http.put(this.updateAPI,userEntries);

  }

  
  edit(valId):Observable<any>{
    const body = new HttpParams()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*' 
      })
    };
   return this.http.get(this.selectedPageAPI+"?id="+valId);
  }
  delete(valId):Observable<any>{
    const body = new HttpParams()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*' 
      })
    };
   return this.http.get(this.deleteAPI+"?id="+valId);

  }

  getEntriesList():Observable<any>{
     const body = new HttpParams()
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Accept': '*/*' 
       })
     };
    return this.http.get(this.getAPI);
 
   }
  saveEntries(userEntries:UserEntries):Observable<any>{
    const body = new HttpParams()
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*' 
      })
    };
   return this.http.post(this.createAPI,userEntries);
}

  saveEntriesForFiles(file : File):Observable<any>{
    const formdata: FormData = new FormData();  
    formdata.append('file', file);
     const body = new HttpParams()
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Accept': '*/*' 
       })
     };
    return this.http.post(this.createAPIForFiles,formdata);
 
   }
 }

