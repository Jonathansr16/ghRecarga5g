import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';

import { Autoplay, Swiper} from 'swiper';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

// @ts-ignore
import { counterUp } from 'counterup2';
import { DOCUMENT } from '@angular/common';
import { SlideDataService, dataServices } from '@services/slide-data.service';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  @ViewChild('menuAbout') menuAbout?: ElementRef;
 

  constructor(@Inject(DOCUMENT) private document: Document, private slideData: SlideDataService) { }

  ngOnInit(): void {
   
    new Swiper('.servicios-swiper, .negocio__swiper', {
      grabCursor: true,
      loop: true,
      
      autoplay: {
        delay: 2500,
       
      },
      pagination: {
        el: '.swiper-pagination, .negocio-swiper-pagination',
        dynamicBullets: true
      },
    });

    this.counter();
  }

  aboutAnimate() {
    const menu = this.menuAbout?.nativeElement;

    menu.classList.toggle("menuActive");

  }

  counter() {
    const record = this.document.querySelectorAll('.record-item__span');

    const observer = new IntersectionObserver((entries, obj) => {

      entries.forEach((entry: any) => {

        const el = entry.target;
        if (entry.isIntersecting) {
          counterUp(el, {
            duration: 2000,
            delay: 16
          });
        }

      });

    }, {
      threshold: 0.75,

    });

    record.forEach(count => {
      observer.observe(count);
    });

  }


 
    btnMetodo(): void {
    const metodoModal = this.document.querySelectorAll(".metodos-modal");
    const learMoreBtns = this.document.querySelectorAll(".metodos-card-btn");
    const productsCloseBtn = this.document.querySelectorAll(".modal-close-btn");

    var productModal:any = function (modalclick:any) {
        metodoModal[modalclick].classList.add('activeModal');
    }

    learMoreBtns.forEach((learMoreBtn, i) => {
        learMoreBtn.addEventListener("click", () => {
          productModal(i);
        });
    });

    productsCloseBtn.forEach((modalCloseBtn) => {
      modalCloseBtn.addEventListener("click", () =>{
        metodoModal.forEach((ModelView) => {
          ModelView.classList.remove("activeModal");
        });
      });
    });
  }

}
