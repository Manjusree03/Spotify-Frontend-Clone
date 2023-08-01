import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');

}
}
