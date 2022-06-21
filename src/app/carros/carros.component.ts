import { Component, OnInit } from '@angular/core';
import { carro } from '../carros';
import { carros } from '../mock-carros';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  constructor() { }

  carros = carros;

  ngOnInit(): void {
  }

  selectedCarro?: carro;
  onSelect(carro: carro): void {
    this.selectedCarro = carro;
  }

}

