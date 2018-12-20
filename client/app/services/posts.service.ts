import { Post } from '../front/post.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, description: string) {
    const post: Post = { title, description };
    this.posts.push(post);
  }
}
