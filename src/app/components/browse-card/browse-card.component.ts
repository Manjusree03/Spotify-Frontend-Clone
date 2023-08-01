import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-browse-card',
  templateUrl: './browse-card.component.html',
  styleUrls: ['./browse-card.component.css']
})
export class BrowseCardComponent implements OnInit {
  
  @Input() public playlistThumbnail !: string;
  @Input() public bgColor1 !: string;
  @Input() public color1 !: string;
  @Input() public title1 !:string;
  @Input() public image1 !: string;


  constructor(private router:Router){}
  ngOnInit(): void {
  }

}
