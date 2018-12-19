import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
},

)

export class PostCreateComponent {
  @Ouput() postCreated = new EventEmitter();
  commentTitle = '';
  commentPosted = '';

  onAddPost() {
    const post = {
      title: this.commentTitle,
      description: this.commentPosted,
    };
    this.postCreated.emit(post);
  }
}
