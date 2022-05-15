import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';
import { UserEntries } from './model/UserEntries';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  createAPI = "http://localhost:8080/createEntries";
  //createAPIForFiles = "http://localhost:8080/createEntriesForFiles";
  createAPIForFiles = "http://localhost:8080/storeFileData";
  updateAPIForFiles = "http://localhost:8080/updateStoreFileData";
  getAllEntries = "http://localhost:8080/getEntriesList";
  getEntriesByUserId ="http://localhost:8080/secured/getEntriesList";
  approveAPI = "http://localhost:8080/isApproveEntry";
  updateAPI = "http://localhost:8080/open/updateEntries";;
  deleteAPI = "http://localhost:8080/deleteEntries";
  downLoadfile = "http://localhost:8080/downLoadfile";
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

  getEntriesList(usr:User):Observable<any>{
     const body = new HttpParams()
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Accept': '*/*' 
       })
     };
    if(usr.userRole==='admin'){
    return this.http.get(this.getEntriesByUserId+"?id="+0);
    }else{
    return this.http.get(this.getEntriesByUserId+"?id="+usr.id);
    }
 
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

updateEntriesForFiles(file : File , useruserId :any,id: any):Observable<any>{
  console.log("useruserId "+useruserId);
  const formdata: FormData = new FormData();  
  formdata.append('file', file);
  formdata.append('userId', useruserId);
  formdata.append('Id', id);
   const body = new HttpParams()
   const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json',
       'Accept': '*/*' 
     })
   };
  return this.http.put(this.updateAPIForFiles,formdata);

 }
  saveEntriesForFiles(file : File , useruserId :any):Observable<any>{
    
    console.log("useruserId "+useruserId);
    const formdata: FormData = new FormData();  
    formdata.append('file', file);
    formdata.append('userId', useruserId);
     const body = new HttpParams()
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Accept': '*/*' 
       })
     };
    return this.http.post(this.createAPIForFiles,formdata);
 
   }

   downloadfile(valId):Observable<Blob>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': '*/*',
        }),
        
        responseType : 'blob' as 'json',
    };
  console.log('gettin response');
  return this.http.post<Blob>(this.downLoadfile,valId,httpOptions);
 }

}