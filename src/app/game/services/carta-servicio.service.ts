import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartaPokemon, Pokemon } from 'src/app/interfaces/card.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartaServicioService {
  cartasPokemon:Pokemon []=[];
  url:string='https://api.pokemontcg.io/v2/cards?pageSize=5';
  links:string []= [];
  constructor(private http:HttpClient) {
  }
  obtenerCartas(): Pokemon[]{
    this.http.get<Pokemon>(this.url).subscribe(datos=>{
      for (let index = 0; index < datos.data.length; index++) {
        this.cartasPokemon.push(datos);
        this.links.push(datos.data[index].images.large);
      }
    });
    return this.cartasPokemon;
  }
}
