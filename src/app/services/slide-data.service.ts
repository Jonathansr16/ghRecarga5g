import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideDataService {

  servicios: dataServices[] = [

    { 
      title: "Recargas",
      description: "Vende recarga de cualquier compañia a todos tus clientes",
      img: "assets/img/icon-companies/banner_recargas.png"    
    }, 

    {
      title: "Servicios",
      description: "contamos con mas de 100 servicios disponibles, paga todos los recibos de tus clientes uz, agua teléfono, televisión de paga, venta por catálogo y mucho más, de forma fácil, rápida y segura.",
      img: "assets/img/icon-companies/banner__servicios.png",
    }, 


    {
      title: "Pines",
      description: "Vende pines electrónicos a tus clientes Google Play, Netflix, Spotify y muchas mas!!",
      img: "assets/img/icon-companies/banner__gift.png"
    }


  ]


  getServicios() : dataServices[] {
    return this.servicios;
  }

}

export interface  dataServices {
    idx?: number;
    title: string;
    description: string;
    img: string;
}