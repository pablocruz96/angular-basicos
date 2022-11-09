import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor', 'Capitán América'];
  heroeEliminado: string = "";

  borrarHeroe(){
    console.log('Borrando...');

    this.heroeEliminado = this.heroes.shift()||'';
  }
}
