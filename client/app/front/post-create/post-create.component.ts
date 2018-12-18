import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
},

)

export class PostCreateComponent {
  commentValue = '';
  newPost = 'No Comment';

  onAddPost() {
    this.newPost = this.commentValue;
  }
}