import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private  http: HttpClient ) { 

  }
  
  //Project

  getAllProjects(){
   return this.http.get('http://localhost:8000/project')
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