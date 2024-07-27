import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Comment } from '../Comment';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUpiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUpiUrl}api/moments`

  constructor(
    private http: HttpClient,
    
  ) { };

  creatComment(data: Comment):Observable<Response<Comment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Response<Comment>>(url, data)
  };
  
}
