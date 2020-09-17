import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor() { }

  getLocale(): string {
    return 'pt-BR';
  }

}
