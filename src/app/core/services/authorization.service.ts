import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private readonly demoAccessToken: string;

  constructor() {
    this.demoAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlZpa3RvciIsImlhdCI6MTUxNjIzOTAyMn0.TDO_qjMmuRtUJDIqB-XlViCfm8lqKSZJslg0gFhN8I8';
  }

  get accessToken(): string {
    return this.demoAccessToken;
  }
}
