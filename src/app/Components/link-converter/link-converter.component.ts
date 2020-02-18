import { Component, OnInit } from '@angular/core';
import { LinkUtilsService } from 'src/app/Services/LinkUtils/link-utils.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-link-converter',
  templateUrl: './link-converter.component.html',
  styleUrls: ['./link-converter.component.css']
})
export class LinkConverterComponent implements OnInit {

    linkVal: string = '';
    errorMsg: string = '';
    shortValue: string = '';

    constructor(private linkUtils: LinkUtilsService
        ) { }

    ngOnInit() {
    }

    sendValue() {
        if (_.isUndefined(this.linkVal) || _.isNull(this.linkVal) || this.linkVal.length === 0) {
            this.errorMsg = 'You must provide value for the link';
        } else {
            this.linkUtils.convertLink(this.linkVal).subscribe(data => {
                this.shortValue = data['shortLink'];
            }, error => {
                this.errorMsg = 'Something went wrong. Please try again';
            })
        }
    }

}
