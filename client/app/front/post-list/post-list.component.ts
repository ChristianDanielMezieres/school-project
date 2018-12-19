import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})

export class PostListComponent {
//   posts = [
//     { title: 'first post', content: 'this is my first content from my post' },
//     { title: 'second post', content: 'this is my second content from my post' },
//     { title: 'third post', content: 'this is my thrid content from my post' },
//   ];

  @Input() posts: Post[] = [];
}
