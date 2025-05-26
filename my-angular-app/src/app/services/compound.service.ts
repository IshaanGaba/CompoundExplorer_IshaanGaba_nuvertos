import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Compound {
  id: number;
  name: string;
  image: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class CompoundService {
  private baseUrl = 'http://localhost:5000/compounds';

  constructor(private http: HttpClient) {}

  getCompounds(page: number): Observable<{ data: Compound[]; total: number }> {
    return this.http.get<{ data: Compound[]; total: number }>(
      `${this.baseUrl}?page=${page}`
    );
  }

  getCompound(id: number): Observable<Compound> {
    return this.http.get<Compound>(`${this.baseUrl}/${id}`);
  }

  updateCompound(id: number, compound: Partial<Compound>): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, compound);
  }
}
