import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../pages/navbar/navbar';
import { Footer } from '../../pages/footer/footer';

@Component({
  selector: 'app-landing',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
