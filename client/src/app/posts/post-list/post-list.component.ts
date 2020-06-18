import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { PostsService} from '../posts.service';

import { Post } from '../post.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit ,OnDestroy {
  posts:Post [] =[];

  userId: string;
  private postSub:Subscription;
  constructor(public postsService:PostsService ,public authService:AuthService) { }

  ngOnInit(): void {
    this.postsService.getPosts();
    this.userId = this.authService.getUserId();
    this.postSub =  this.postsService.getPostUpdateListener().subscribe((posts:Post[])=>{
      this.posts = posts;
    });

  }
  ngOnDestroy( ) {
    this.postSub.unsubscribe();
  }

}
