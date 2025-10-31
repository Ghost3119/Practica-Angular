import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-kari',
  templateUrl: './kari.component.html',
  styleUrls: ['./kari.component.scss'],
  imports: [RouterOutlet]
})
export class KariComponent {
  title = 'Kari'; // propiedad para usar en el template
}
