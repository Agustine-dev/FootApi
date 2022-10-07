import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Agustine';

  term: string;
  

  submitHandler(evt: { preventDefault: () => void }) {
    this.router.navigate(['/home'], { queryParams: { q: this.term } });
  }

  ngonInit () {

  }

  submitDetails() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c6b1760691msh3fd00140bb8715fp1c9172jsn1de1c9e00d40',
        'X-RapidAPI-Host': 'footapi7.p.rapidapi.com',
      },
    };

    fetch(`https://footapi7.p.rapidapi.com/api/search/${this.term}`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  constructor(private router: Router ) { }

}
