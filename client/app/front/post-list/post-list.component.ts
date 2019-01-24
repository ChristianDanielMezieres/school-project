import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})

export class PostListComponent implements OnInit, OnDestroy {
//   posts = [
//     { title: 'first post', content: 'this is my first content from my post' },
//     { title: 'second post', content: 'this is my second content from my post' },
//       { title: 'second post', content: 'this is my second content from my post' },
//   ];

  posts: Post[] = [];
  isLoading = false;
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    // loading appears at the beginning loading at the page
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdatedListener().subscribe((posts: Post[]) => {
      // finished loading after updating comments
      this.isLoading = false;
      this.posts = posts;
    });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
