import { Component, OnInit } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Router} from '@angular/router'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit 
{
  Events:Event[];
    constructor
  (
    private http:Http,
    private router:Router,
  ) { }

  AllEvents()
  {
      this.http.get('http://localhost:8080/ViewEvents/Events')
      .subscribe
      (
        (res:Response)=>
        {
          this.Events=res.json();
          console.log(this.Events);
        }
      )
  }

  ngOnInit() 
  {
    this.AllEvents();
  }

}

interface AllEvents
{
  eventId : Number,
  eventName : String,
  eventDate : Date,
  description : String,
  eventAmount : Number
}
