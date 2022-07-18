import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('header') header?: ElementRef;
  @ViewChild('navAn') navAn?: ElementRef;
  @ViewChild('nav') nav?: ElementRef;
  @ViewChild('registro') registro?: ElementRef; 
  public navActive:boolean= false;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.themeBtns();
  }


   /* =========== CUSTOM BACKGROUND =========== */
   themeBtns():void {
    const btn = this.document.querySelectorAll('.theme__btn');

    for(let i =0; i< btn.length; i++)

    btn[i].addEventListener("click", () => {

      document.body.classList.toggle('light-theme');
      document.body.classList.toggle('dark-theme');
      btn[i].classList.toggle('light');
      btn[i].classList.toggle('dark');
    });
}


 /* =========== CUSTOMNAV =========== */
 @HostListener('window:scroll', ['$event']) 
 customNav():void {

  const scrollNav = this.header?.nativeElement;
  const nav= this.nav?.nativeElement; 
  const registro= this.registro?.nativeElement;
  if (this.document.body.scrollTop > 20 || this.document.documentElement.scrollTop > 20) {
    this.renderer2.addClass(scrollNav,'header-custom');
   this.renderer2.addClass(nav, "nav-custom");
   this.renderer2.addClass(registro, "nav__a--custom");
  } else {

    this.renderer2.removeClass(scrollNav, 'header-custom');
    this.renderer2.removeClass(nav, "nav-custom");
    this.renderer2.removeClass(registro, "nav__a--custom");
  }
  
 }

    /* =========== BTN MENU NAV=========== */
  @HostListener("click", ['$event'])
  animateNav():void {
   
    const navBtn= this.navAn?.nativeElement;
      navBtn.classList.toggle("animateNav");
      this.navActive= !this.navActive;
  
  }

}
