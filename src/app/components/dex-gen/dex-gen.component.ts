import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute to access route parameters
import { HelperService } from '../../services/helper.service';  // Adjust import path if necessary
import { CardLayoutComponent } from "../card-layout/card-layout.component";

@Component({
  selector: 'app-dex-gen',
  standalone: true,
  imports: [CardLayoutComponent],
  templateUrl: './dex-gen.component.html',
  styleUrls: ['./dex-gen.component.css']
})
export class DexGenComponent implements OnInit {

  renderedIndex: number[] = [];
  generation: number = 1;  // Default generation

  // Inject ActivatedRoute and HelperService
  constructor(private route: ActivatedRoute, private helperService: HelperService) {}

  ngOnInit(): void {
    // Get the 'gen' parameter from the route and set the generation
    this.route.params.subscribe(params => {
      this.generation = +params['gen'];  // Convert the string to a number
      this.renderedIndex = this.helperService.getGenerationIndices(this.generation);  // Fetch indices for the generation
    });
  }
}
