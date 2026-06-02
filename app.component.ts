import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText: string = 'Hello World';
  inputMessage: string = '';

  displayMessage(): void {
    if (this.inputMessage.trim()) {
      this.displayText = this.inputMessage;
    }
  }
}