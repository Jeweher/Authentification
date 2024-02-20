import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  apiurl='http://localhost:3000/user';

  Getall(){
    return this.http.get(this.apiurl);
  }

  
  GetbyCode(code:any){
    return this.http.get(this.apiurl+'/'+ code);
  }

  ProceedRegister(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
 
  updateuser(code:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+code,inputdata);
  }
}
