import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Post } from '../post.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})

export class PostCreateComponent implements OnInit {
  commentTitle = '';
  commentPosted = '';
  post: Post;
  isLoading = false;
  private mode = 'create';
  private postId: string;

  constructor(public postsService: PostsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        // starting spinnerloading when getting data at the page.
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe((postData) => {
          // when finished to get data.
          this.isLoading = false;
          this.post = { id: postData._id, title: postData.title, description: postData.description };
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // start loading
    this.isLoading = true;
    if (this.mode === 'create') {
      this.postsService.addPost(form.value.title, form.value.description);
    } else {
      console.log(form.value.title, form.value.description); // verified update sent!
      this.postsService.updatePost(
        this.postId,
        form.value.title,
        form.value.description,
      );
    }
    form.resetForm();
  }
}
