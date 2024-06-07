import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe1';
}
