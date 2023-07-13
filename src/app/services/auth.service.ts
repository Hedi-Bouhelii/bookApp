import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'hedi-bouheli', password: 'password' },
    { username: 'foulen ben foulen', password: 'motdepasse' },
   
  ];
  authenticate(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    return !!user; // Return true if user is found, false otherwise
  }
  constructor() { }
}
