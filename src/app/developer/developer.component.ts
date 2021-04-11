import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  public developer: Developer;
  constructor() { }

  ngOnInit(): void {
    this.developer = new Developer("Paillard","Pierre",38, "Homme", "Formateur & developpeur web");
    this.developer.addSkill(new Skill("Super Heros", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Superman_S_symbol.svg/1853px-Superman_S_symbol.svg.png", "Wikipedia"));
    this.developer.addSkill(new Skill("Formateur", "https://federation-octopus.org/wp-content/uploads/formation.jpg", "Wild Code School"));
  }

}
