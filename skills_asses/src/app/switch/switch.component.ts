import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent implements OnInit {
  currentLang: string;
  constructor(private translate: TranslateService) {
  this.currentLang = this.translate.currentLang;
  document.body.dir = 'rtl';
   }
   
  ngOnInit(): void {
    this.translate.setDefaultLang('ar');
  }
  switchLanguage(): void {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    const direction = this.currentLang === 'en' ? 'ltr' : 'rtl';
    this.translate.use(this.currentLang).subscribe(() => {
      document.documentElement.lang = this.currentLang;
      document.body.dir = direction;
    });
  }
  }