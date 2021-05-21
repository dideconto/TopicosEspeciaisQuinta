import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  //Criar uma váriavel global
  constructor() { }

  ngOnInit(): void {
  }

  mostrarMensagem(): void{
    alert("Não utilizar o alerta em nenhum caso!");
    console.log("Teste do evento de clique de botão");
  }

}
