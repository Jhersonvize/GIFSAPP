import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
   private apiKey :string = 'djHo0Uh7X8si3S1W6W9LcmngkAhbmxQ8';
  private _historial: string[] = [];

  get historial(){

    return [...this._historial];
  }

  buscarGifs (query:string){
  query = query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }


    console.log(this._historial);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=djHo0Uh7X8si3S1W6W9LcmngkAhbmxQ8&q=dragon ball z&limit=10')
    .then(resp =>{
      console.log(resp)
    })
  }

}
