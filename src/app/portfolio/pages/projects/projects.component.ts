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
                  +"imágenes atractivas, buscador, carrito de compras para pedidos rápidos y fáciles",
      image:"/assets/images/mockups/Nutriment-mockup-home.webp",
      video:"url video",
      tech:["Figma"],
      resource:"https://www.figma.com/design/nsBJC49wMzKer8pAKynh4w/Nutriment-app?t=bd7clkYk2WD8waIS-1",
      website:""
    },
    {
      title:"Bodyguard Landing page",
      description:"Landing Page de Contratación de Guardaespaldas: Presenta servicios de protección "+
      "personal altamente calificados, destacando la experiencia, discreción y seguridad. Incluye "+
      "testimonios de clientes satisfechos y una sección de contacto fácil de usar ",
      image:"/assets/images/mockups/bodyguard-mockup-home.webp",
      video:"url video",
      tech:["Figma"],
      resource:"https://www.figma.com/design/OBzL5fboRfFh2wMmkhDm9m/Landing-page-bodyguard?node-id=0-1&t=bd7clkYk2WD8waIS-1",
      website:"url de la pagina"
    },
    {
      title:"Sitio web para el servicio de protección",
      description:"Esta permite a los clientes contratar guardaespaldas de manera eficiente y "+
      "segura. Además, ofrece funcionalidades avanzadas para la gestión de clientes y guardaespaldas por "+
      "parte de los administradores, así como la valoración de los servicios prestados y la generación de "+
      "datos estadísticos para mejorar la calidad del servicio.",
      image:"/assets/images/mockups/bodyguard-mockup-web.png",
      video:"url video",
      tech:["Figma"],
      resource:"https://www.figma.com/design/9GS8v9AtW0DRp5og1sSyyl/ARQUI-WEB---Bodyguard?node-id=0-1",
      website:"url de la pagina"
    }  
   
  ]
  public products:Product[] = [
    {
      id:1,
      title:"HomeDecor",
      description:"Es una pagina web que simula la compra de un mueble e "+
      "incluye las validacion de los datos ingresados por el usuario."+
      "Además se muestra una notificación temporal para mostrar mensajes de estado sobre alguna acción.",
      image:"/assets/images/products/homedecor-web.webp",
      video:"url video",
      tecnology:["Javascript","CSS","HTML"],
      resource:"https://github.com/cesarch23/HomeDecor",
      website:"https://cesarch23.github.io/HomeDecor/"
    },
    {
      id:2,
      title:"Bodyguard Landing page",
      description:"Landing Page de Contratación de Guardaespaldas: Presenta servicios de protección "+
      "personal altamente calificados, destacando la experiencia, discreción y seguridad. Incluye "+
      "testimonios de clientes satisfechos y una sección de contacto fácil de usar. ",
      image:"/assets/images/mockups/bodyguard-mockup-home.png",
      video:"url video",
      tecnology:["HTML", "CSS"],
      resource:"https://github.com/cesarch23/landing-page-bodyguard",
      website:"https://cesarch23.github.io/landing-page-bodyguard/"
    },
    {
      id:3,
      title:"Aplicación de búsqueda de países",
      description:"Este sitio web permite buscar países por su nombre, capital y filtrarlos por región. ",
      image:"/assets/images/products/country-app.png",
      video:"url video",
      tecnology:["HTML", "CSS", "TypeScript","angular"],
      resource:"https://github.com/cesarch23/country-search-app",
      website:"https://cesarch23.github.io/country-search-app"
    }
    
   
  ]
}
