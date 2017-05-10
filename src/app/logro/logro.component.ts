import { Component, OnInit } from '@angular/core';
import { LogrosService } from '../services/logros.service'
import { ILogro } from '../home/home.component';

import { ActivatedRoute,Params } from '@angular/router';



@Component({
  selector: 'app-logro',
  templateUrl: './logro.component.html',
  styleUrls: ['./logro.component.css']
})
export class LogroComponent implements OnInit {

  logro : ILogro;

  constructor( private logrosService : LogrosService, private route : ActivatedRoute ) { }

  ngOnInit() {

    this.route.params.forEach((params : Params)=>{
      console.log(params);

      let id = params["id"];

      this.logro = this.logrosService.find(parseInt(id))
    })
  }

}
