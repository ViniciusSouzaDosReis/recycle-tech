import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recycle-card',
  templateUrl: './recycle-card.component.html',
  styleUrls: ['./recycle-card.component.css'],
})
export class RecycleCardComponent {
  @Input() imageUrl =
    'https://s3-alpha-sig.figma.com/img/e2bb/a108/6a004963731da0b977162cddae2c250c?Expires=1701648000&Signature=jGP~YS4jud1cKdtHJcLbmxQr2UQhhhKHkE4SInbX6D4rLYG0yEiCB-HGfi5W1L0b4sNxSAxWRmMY~rarVYnaGrb0xDUVihAq8yDIYH0LpWgRqi0F20CNKrYO1MtH32Qo-cWECp3XtsZe5G~WkvgjX8MMrPq6ljv6SD1inloixZd-Vaw5V9OA4fiMXZouLEn6CyOh1Wg60-XiVdu0UvRsWZhGVfzuxh-8KRmFvcRgN3Sfl3gI6qQ5OaZ5xytvbi8sl312JFbngWQbTOqsP5T-huzk46Oq2uM3iovELs~SJFI~8LulQ~Yw0iW0uXpEeNuz2huipEdu93MWBA0UY~JLOw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  @Input() name = 'Descartadora Eletro';
  @Input() distance = '1.2';
}
