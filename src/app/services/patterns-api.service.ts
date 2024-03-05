import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pattern } from '../models/pattern';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

///Cookies which contains access token are not attachet to API requests on Chromium (only on mozzila), that's why access token is copied also to headers
@Injectable({
  providedIn: 'root'
})
export class PatternsApiService {

  constructor(private cookieService: CookieService, private http: HttpClient) { }

  public getPattern(id: string): Observable<Pattern | undefined> {
    return this.http.get<Pattern>(environment.baseUrl + "/api/patterns/" + id);
  }


  public getPatterns(): Observable<Pattern[] | undefined> {
    return this.http.get<Pattern[]>(environment.baseUrl + "/api/patterns/");
  }

  public updatePattern(id: number, pattern: Pattern) {
    return this.http.put<any>(environment.baseUrl + "/api/patterns/" + id, pattern);
  }

  public addPattern(pattern: Pattern) {
    return this.http.post<any>(environment.baseUrl + "/api/patterns/", pattern);
  }

  public deletePattern(id: number) {
    return this.http.delete<any>(environment.baseUrl + "/api/patterns/" + id);
  }


}
