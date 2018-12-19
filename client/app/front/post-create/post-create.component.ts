import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
},

)

export class PostCreateComponent {
  commentTitle = '';
  commentPosted = '';
  postCreated =  new EventEmitter();

  onAddPost() {
    const post = {
      title: this.commentTitle,
      description: this.commentPosted,
    };
    this.postCreated.emit(post);
  }
}
