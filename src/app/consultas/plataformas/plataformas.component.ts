import { Component, OnInit } from '@angular/core';


import { Autoplay, Swiper} from 'swiper';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);



@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    new Swiper('.mobile-swiper', {
      grabCursor: true,
      loop: true,
      
      autoplay: {
        delay: 2500,
       
      },
      pagination: {
        el: '.mobile-pagination',
        dynamicBullets: true
      },
    });
  }

}
