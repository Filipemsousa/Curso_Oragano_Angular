import { Component, input } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';
import { Input } from '@angular/core';
import { GeneroLiterario } from '../livro/livro';
import { livros } from '../../mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [LivroComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {

  genero = input.required<GeneroLiterario>();
  
}
