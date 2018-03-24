import { Component, OnInit } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Router} from '@angular/router'

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  User:user[];

  constructor
  (
    private http:Http,
    private router:Router,
  ) { }

  Login(userName,password)
  {
    console.log(userName,password);
    
    let loginObj={"userName":userName,"password":password}

    console.log(loginObj);
    this.http.post('http://localhost:8080/UserLogin/ligin',loginObj)
    .subscribe
    (
      (res:Response)=>
      {
          this.User=res.json();
          console.log(this.User[0]);
          if(this.User[0].customerID>0)
          {
              this.router.navigate(['userHome']);
              location.reload();
          }
          
      }
    )
  }

  ngOnInit() {
  }

}

interface user
{
  customerID: number,
  userName: String,
  password: String,
  address: String,
  email: String,
  phoneNumber: String;
}

