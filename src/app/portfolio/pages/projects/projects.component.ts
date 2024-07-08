import { Component } from '@angular/core';
import { Product } from './interfaces/product.interace';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  public chips;
  public seleectedValue:string;

  constructor(){
    this.chips = ["Mockups", "Productos"]
    this.seleectedValue='Mockups';
  }
  
  getElements(value:string){
     this.seleectedValue=value;
  }
  public mockups:Product[] = [
    {
      title:"Nutriment Web",
      description: "Mockup de ventas de comida online: Interfaz intuitiva con menú de platos, "
                  +"imágenes atractivas, buscador, y carrito de compras para pedidos rápidos y fáciles",
      image:"/assets/images/mockups/Nutriment-mockup-home-2.png",
      video:"url video",
      tech:["Figma"],
      resource:"https://www.figma.com/design/nsBJC49wMzKer8pAKynh4w/Nutriment-app?t=bd7clkYk2WD8waIS-1",
      website:""
    },
    {
      title:"Bodyguard Landing page",
      description:"Landing Page de Contratación de Guardaespaldas: Presenta servicios de protección "+
      "personal altamente calificados, destacando la experiencia, discreción y seguridad. Incluye "+
      "testimonios de clientes satisfechos, una sección de contacto fácil de usar ",
      image:"/assets/images/mockups/bodyguard-mockup-home.png",
      video:"url video",
      tech:["Figma"],
      resource:"https://www.figma.com/design/OBzL5fboRfFh2wMmkhDm9m/Landing-page-bodyguard?node-id=0-1&t=bd7clkYk2WD8waIS-1",
      website:"url de la pagina si tiene"
    },
    {
      title:"Sitio web para el servicio de protección",
      description:"Web de Contratación de Guardaespaldas: Esta permite la  "+
      "contratacion de guardaespaldas de parte del cliente, gestión de los clientes y los guardaespaldas por parte del "+
      "administrador, valoración de los servicios y datos estadistcos. ",
      image:"/assets/images/mockups/bodyguard-mockup-web.png",
      video:"url video",
      tech:["Figma"],
      resource:"https://www.figma.com/design/9GS8v9AtW0DRp5og1sSyyl/ARQUI-WEB---Bodyguard?node-id=0-1",
      website:"url de la pagina si tiene"
    }
    // {
    //   title:"Bodyguard",
    //   description:"Landing page para una empresa de guardaespaldas",
    //   image:"/assets/images/mockups/bodyguard-mockup-home.png",
    //   video:"url video",
    //   tech:["JS","CSS","HTML","Anugular 16"],
    //   resource:"url del github o de figma",
    //   website:"url de la pagina si tiene"
    // }
    
   
  ]
  public products:Product[] = [
    {
      title:"Ecomercer",
      description:"descricption of the mockup pued ser mucho mas que desde una perspectiva que nose se puede rodat",
      image:"/assets/images/mockups/Nutriment-mockup-home-2.png",
      video:"url video",
      tech:[""],
      resource:"https://www.figma.com/design/nsBJC49wMzKer8pAKynh4w/Nutriment-app?t=bd7clkYk2WD8waIS-1",
      website:"url de la pagina si tiene"
    },
    {
      title:"Bodyguard",
      description:"Landing page para una empresa de guardaespaldas",
      image:"/assets/images/mockups/bodyguard-mockup-home.png",
      video:"url video",
      tech:["JS","CSS","HTML","Anugular 16"],
      resource:"https://www.figma.com/design/OBzL5fboRfFh2wMmkhDm9m/Landing-page-bodyguard?node-id=0-1&t=bd7clkYk2WD8waIS-1",
      website:"url de la pagina si tiene"
    },
    {
      title:"Bodyguard",
      description:"Landing page para una empresa de guardaespaldas",
      image:"/assets/images/mockups/bodyguard-mockup-home.png",
      video:"url video",
      tech:["JS","CSS","HTML","Anugular 16"],
      resource:"url del github o de figma",
      website:"url de la pagina si tiene"
    }
    
   
  ]
}
