import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product.interace';

@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.css'],
  standalone:false,
})
export class AutomationComponent implements OnChanges {
  
   @Input() automations: Product[] = [];
  
    /** índice de la imagen actual para cada mock */
    imagesIndex: number[] = [];
  
    ngOnChanges(changes: SimpleChanges): void {
      if (changes['automations']) {
        this.imagesIndex = (this.automations || []).map(() => 0);
      }
    }
  
    openResource(url: string) {
      if (!url) return;
      window.open(url, '_blank');
    }
  
    /** Devuelve la URL de imagen actual para un mock */
    getMockImage(mock: Product, mockIndex: number): string {
      const img: any = (mock as any)?.image;
      if (Array.isArray(img)) {
        const idx = this.imagesIndex[mockIndex] ?? 0;
        return img[idx] || '';
      }
      return img || '';
    }
  
    /** Mover a la siguiente imagen del mock */
    nextImage(mockIndex: number): void {
      const mock = this.automations?.[mockIndex];
      if (!mock) return;
      const imgs: any = (mock as any).image;
      if (!Array.isArray(imgs) || imgs.length <= 1) return;
      this.imagesIndex[mockIndex] = (this.imagesIndex[mockIndex] + 1) % imgs.length;
    }
  
    /** Mover a la imagen anterior del mock */
    prevImage(mockIndex: number): void {
      const mock = this.automations?.[mockIndex];
      if (!mock) return;
      const imgs: any = (mock as any).image;
      if (!Array.isArray(imgs) || imgs.length <= 1) return;
      this.imagesIndex[mockIndex] = (this.imagesIndex[mockIndex] - 1 + imgs.length) % imgs.length;
    }
     
}
