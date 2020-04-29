import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes:any[] = [] 
  termino:string;

  constructor( private activedRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router ) {

   }

  ngOnInit(): void {
    this.activedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx])
  }
}
