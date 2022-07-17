import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  type:string | null = '';
  name:string | null = '';
  key:string | null = '';
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //下列寫法改網址不會重新載入頁面
    //this.type = this.route.snapshot.paramMap.get('type');

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type');
    });

    this.route.queryParamMap.subscribe(param => {
      this.name = param.get('name');
    });

    this.route.data.subscribe(data => {
      this.key = data['key'];
    });
  }

  inc(num: number) {
    this.router.navigate(['../', (+(this.type||0)) + num], {
      queryParamsHandling: 'preserve',
      relativeTo: this.route
    })
  }

}
