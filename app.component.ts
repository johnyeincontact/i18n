import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SkillsService} from './skills.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'translation-app';
  description = '';

  skills= {}; 
  
   constructor(private translate: TranslateService, private skill: SkillsService) {
    translate.setDefaultLang('en');
  }

  ngOnInit () {
      this.skill.getSkills()
      .subscribe(data=> this.skills = data);    
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
