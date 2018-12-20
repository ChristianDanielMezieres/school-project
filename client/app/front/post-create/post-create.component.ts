import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})

export class PostCreateComponent {
  commentTitle = '';
  commentPosted = '';

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(this.commentTitle, this.commentPosted);
    form.reset();
  }
}
