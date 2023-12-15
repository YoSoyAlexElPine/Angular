import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Lo que sea</h3>
    <img src="https://imgs.search.brave.com/3dIqzSBwI-B3ZJlDmOHm3Nr9WwxFwxs-E964_7wue3A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc2L2Mz/L2NlLzc2YzNjZTY3/YmZmMzJlZjRjNTVh/MGQyZDZiZGE3ZTUx/LmpwZw" alt="">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, exercitationem quo voluptas dolores eius error dolore vero voluptate est soluta cupiditate recusandae quas maiores eveniet eum quis sit ipsum nostrum!</p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }
  `
})
export class CommentsComponent {

}
