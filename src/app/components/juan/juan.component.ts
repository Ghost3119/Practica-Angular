import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juan',
  templateUrl: './juan.component.html',
  styleUrls: ['./juan.component.scss']  // notaste que era styleUrl, debe ser styleUrls
})
export class JuanComponent implements OnInit {
  saludo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.saludo = this.obtenerSaludo();
  }

  obtenerSaludo(): string {
    const hora = new Date().getHours();
    if (hora < 12) return "☀️ Buenos días!";
    if (hora < 18) return "🌤️ Buenas tardes!";
    return "🌙 Buenas noches!";
  }
}
