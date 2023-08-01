import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/serachbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isSearchFieldVisible : boolean =false;
 
     constructor(private router: Router,private sb :SearchBarService,private sk : SearchBarService) { }
    


  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe(status => {
      this.isSearchFieldVisible =status;

    });
    
  }

  onNavigateToLogin() {
    this.router.navigate(['/', 'login']);
   

  }
  onNaviagteToSignup(){
    this.router.navigate(['/signup']);
  }
}
