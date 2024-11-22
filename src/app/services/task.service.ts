import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTasks() {
    let url = `${this.apiUrl}/tasks`;
    return this.http.get(url);
  }

  addTask(task: any) {
    let url = `${this.apiUrl}/tasks`;
    return this.http.post(url, task);
  }

  updateTask(id: string, task: any) {
    let url = `${this.apiUrl}/tasks/${id}`;
    return this.http.patch(url, task);
  }

  deleteTask(id: string) {
    let url = `${this.apiUrl}/tasks/${id}`;
    return this.http.delete(url);
  }

  getTask(id: string) {
    let url = `${this.apiUrl}/tasks/${id}`;
    return this.http.get(url);
  }
}
