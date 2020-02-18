import { Component, OnInit } from '@angular/core';
import { LinkUtilsService } from 'src/app/Services/LinkUtils/link-utils.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-link-router',
  templateUrl: './link-router.component.html',
  styleUrls: ['./link-router.component.css']
})
export class LinkRouterComponent implements OnInit {

    code: string = '';
    errorMsg: string = '';

    constructor(private linkUtils: LinkUtilsService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.code = params.get('code');
            this.linkUtils.getLinkForCode(this.code).subscribe(data => {
                window.location.href = data['longLink'];
            }, error => {
                this.errorMsg = 'The link you provided does not exist';
            })
        });
    }

}
