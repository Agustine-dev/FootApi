import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

const baseUrl: string = 'https://footapi7.p.rapidapi.com/api/search';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  players: [];

  searchPlayer(term: string): Observable<any> {
    return this.http.get(baseUrl, { params: { q: term } });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (qparams: { [x: string]: any }) => {
        let q = qparams['q'];
        this.searchPlayer(q).subscribe((resp) => resp.Search);
      }
    );
  }
}
