import { Component, OnInit } from '@angular/core';
import { ProspectusService } from 'src/app/services/prospectus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prospectus-testimonials',
  templateUrl: './prospectus-testimonials.page.html',
  styleUrls: ['./prospectus-testimonials.page.scss'],
})
export class ProspectusTestimonialsPage implements OnInit {
  
  public testimonialImgs = ["/assets/imgs/Testimonial1.png", "/assets/imgs/Testimonial2.png","/assets/imgs/Testimonial3.png", "/assets/imgs/Testimonial4.png", "/assets/imgs/Testimonial5.png", "/assets/imgs/Testimonial6.png"];
  currentTestimonialImg = this.testimonialImgs[-1];

  public institute: any = null;
  public instituteTestNames: any = new Array;
  public instituteTestRoles: any = new Array;
  public instituteTestContent: any = new Array;


  constructor(
    public route: ActivatedRoute,
    public prospectusService: ProspectusService
  ) { }

  ngOnInit() {
    this.institute = this.prospectusService.getInstitutes();
    
    for(var i = 0; i < this.institute.length; i++){ //testimonials fields for some institutes were empty, therefore used this
      if(this.institute[i].testimonial_name == ""){
        this.instituteTestNames.push(this.institute[6].testimonial_name);
        this.instituteTestRoles.push(this.institute[6].testimonial_role);
        this.instituteTestContent.push(this.institute[6].testimonial_content);
      }else{
      this.instituteTestNames.push(this.institute[i].testimonial_name);
      this.instituteTestRoles.push(this.institute[i].testimonial_role);
      this.instituteTestContent.push(this.institute[i].testimonial_content);
      }
    }
    
  }

}
