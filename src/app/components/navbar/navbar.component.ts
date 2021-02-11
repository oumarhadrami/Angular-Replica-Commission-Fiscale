import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public toggleIcon = ['fas', 'bars'];
  public isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
    
    console.log(this.toggleIcon);

  }

  toggleIconAndIsMenuCollapsed(){
    this.isMenuCollapsed = !this.isMenuCollapsed
    this.toggleIcon = this.isMenuCollapsed ?  ['fas', 'bars'] : ['far', 'times-circle'];
  }

  

}
