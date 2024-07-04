import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  open = false;
  dropdown_open = false

  emailPrefix: string = 'bonnie';
    emailDomain: string = 'gmail.com';

    getEmail(): string {
        return `${this.emailPrefix}@${this.emailDomain}`;
    }

  ngOnInit(): void {
  }

  toggleDropdown(): void {
    this.dropdown_open = !this.dropdown_open;
  }
}
