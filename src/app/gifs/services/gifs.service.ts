import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifList: Gif[] = [];
  private _historial: string[] = [];
  private apiKey: string = 'djHo0Uh7X8si3S1W6W9LcmngkAhbmxQ8';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private httpClient: HttpClient) {
    this.loadLocalStorage();

  }

  get historial() {
    return [...this._historial];
  }
  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._historial));
  }

  private loadLocalStorage():void {
    if(!localStorage.getItem('history')) return;

    this._historial = JSON.parse(localStorage.getItem('history')!);
    if(this._historial.length===0) return;
    this.buscarGifs(this._historial[0]);

  }

  buscarGifs(query: string): void {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    this.saveLocalStorage();
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);
    console.log(this._historial);

    this.httpClient
      .get<SearchResponse>(`${this.serviceUrl}/search?`, { params: params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        console.log({gifs: this.gifList});
      });

    /* fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=djHo0Uh7X8si3S1W6W9LcmngkAhbmxQ8&q=${query}&limit=10`
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data)); */
  }
}
