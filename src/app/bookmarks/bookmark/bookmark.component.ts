import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import {
  Bookmark,
  BookmarkGQL,
  Link,
  LinksGQL,
} from '../../../generated-types';
import { AddLinkComponent } from './add-link/add-link.component';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  bookmark: Bookmark;
  links: Link[];
  isLoading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookmarkGql: BookmarkGQL,
    private readonly dialog: MatDialog,
    private readonly linksGql: LinksGQL
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.bookmarkGql.watch({ _id: params['id'] }).valueChanges;
        }),
        switchMap((result) => {
          this.bookmark = result.data.bookmark;
          return this.linksGql.watch({ urls: result.data.bookmark.links })
            .valueChanges;
        })
      )
      .subscribe((result) => {
        this.isLoading = result.loading;
        this.links = result.data.links;
      });
  }

  onAdd() {
    this.dialog.open(AddLinkComponent, {
      data: { bookmark: this.bookmark },
    });
  }

  onLinkClick(url: string) {
    window.open(url, '_blank');
  }
}
