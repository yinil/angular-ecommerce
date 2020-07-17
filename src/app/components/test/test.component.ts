import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'Demo';
  greeting = {};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // var url = 'http://localhost:8080/resource';
    // this.http.get(url).subscribe(data => this.greeting = data);
  }

}
