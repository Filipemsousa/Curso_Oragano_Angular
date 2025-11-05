import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro = {
    titulo: "As ondas",
    autoria: "Virginia Woolf",
    imagem: "https://images.dlivros.org/Virginia-Woolf/ondas-virginia-woolf_large.webp"
  }
}
