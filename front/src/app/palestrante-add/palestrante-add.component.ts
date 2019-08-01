import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-palestrante-add',
  templateUrl: './palestrante-add.component.html',
  styleUrls: ['./palestrante-add.component.css']
})
export class PalestranteAddComponent implements OnInit {

  palestranteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.palestranteForm = this.formBuilder.group({
      nomePalestrante: ['', Validators.required],
      tituloPalestra: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
}
