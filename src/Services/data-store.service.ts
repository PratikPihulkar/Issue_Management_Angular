import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private  http: HttpClient,  @Inject(PLATFORM_ID) private platformId: Object) { 

  }
  
  //Login
  login(data:any){
    return this.http.post('http://localhost:8000/login', data);
   }

   logout(refresh_token:any):Observable<any>{ 
    return this.http.post('http://localhost:8000/logout', {"refresh_token":refresh_token});
    }

    refreshToken() {

      if(!isPlatformBrowser(this.platformId)) {
        return throwError(() => new Error('Token refresh not supported in SSR environment.'));
      }
      
      // if(isPlatformBrowser(this.platformId)) {
        const refreshToken = localStorage.getItem('refreshToken');
  
        if (!refreshToken) {
          console.error('No refresh token found in storage!');
          // return throwError('No refresh token found.');
        }
    
        return this.http.post<{ new_access_token: any }>('http://localhost:8000/refresh', { refreshToken })
        .pipe(
          map(response => {
            console.log('Refresh Response:', response);
            return response.new_access_token;
          }),
          catchError(err => {
            console.error('Refresh Token Error:', err);
            return throwError(err);
          })
        ); 
  
    }

  //Register
  registerAdmin(data:any){
    console.log("FROM DATA STORE")
    console.log(data)
    return this.http.post('http://localhost:8000/company', data)
  }

  //Project

  getAllProjects(){
   return this.http.get('http://localhost:8000/project')
  }

  getSingleProjectDetails(project_id:any){
    return this.http.get('http://localhost:8000/project/'+project_id)
  }

  assignEmpOnProject(project_id:any ,role:any ){
    return this.http.put('http://localhost:8000/project/'+project_id, role)
  }

  addNewProject(project:any){
    return this.http.post('http://localhost:8000/project', project)
   }

  removeSingleProject(){
    return this.http.delete('http://localhost:8000/project')
   }

   updateProject(project:any){
    return this.http.patch('http://localhost:8000/project', project)
   }

   //Issue
   getAllIssue(projectId:any){
    return this.http.get('http://localhost:8000/issue',projectId )
   }
 
   addNewIssue(projectId:any,issue:any){
     return this.http.post('http://localhost:8000/issue',projectId, issue)
    }
 
   removeSingleIssue(projectId:any, issueId:any ){
     return this.http.delete('http://localhost:8000/issue/'+issueId, projectId)
    }
 
    updateIssue(project:any){
     return this.http.patch('http://localhost:8000/issue', project)
    }
 

   //member

   getAllMember(){
    return this.http.get('http://localhost:8000/', )
   }
 
   addNewMember(member:any){
     return this.http.post('http://localhost:8000/member', member)
    }
  
   removeSingleMember(projectId:any,){
     return this.http.delete('http://localhost:8000/')
    }
 
    updateMember(project:any){
     return this.http.patch('http://localhost:8000/', project)
    }


}
