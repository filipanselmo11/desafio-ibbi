import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { InputNumberComponent } from '../../components/input-number/input-number.component';
import { SelectComponent } from '../../components/select/select.component';
import { CategoryResponse } from '../../types/category';
import { ProgressComponent } from '../../components/progress/progress.component';
import { CommonModule } from '@angular/common';
import { ProductResponse } from '../../types/product';
import { ProdCardComponent } from '../../components/prod-card/prod-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      CommonModule,
      MenuComponent,
      ButtonComponent,
      DialogComponent,
      ReactiveFormsModule,
      InputComponent,
      InputNumberComponent,
      SelectComponent,
      ProgressComponent,
      ProdCardComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  categoryForm: FormGroup;
  produtcForm: FormGroup;
  searchForm: FormGroup;
  prodVisible!: boolean;
  categVisible!: boolean;

  options: CategoryResponse[] = [];
  products: ProductResponse[] = [];
  filteredProducts!: ProductResponse[];

  loading!: boolean;

  constructor(private categoryService: CategoryService, private productService: ProductService) {
    this.categoryForm = new FormGroup({
      description: new FormControl('', [Validators.required])
    });

    this.produtcForm = new FormGroup({
      description: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      amount: new FormControl(0, [Validators.required]),
      image: new FormControl('', [Validators.required]),
      category_id: new FormControl(0, [Validators.required])
    });

    this.searchForm = new FormGroup({
      query: new FormControl('', [Validators.required])
    });

    // this.categoryService.getCategories().subscribe((res) => (this.options.push(res)));
  }

  ngOnInit(): void {
      console.log('Olá home page');
      this.getCategories();
      this.getProducts();
  }

  openProdModal():void {
    this.prodVisible = true;
  }

  closeProdModal():void {
    this.prodVisible = false;
  }

  createProduct(): void {
    this.productService.createProduct(
      this.produtcForm.value.description,
      this.produtcForm.value.price,
      this.produtcForm.value.amount,
      this.produtcForm.value.image,
      this.produtcForm.value.category_id
    ).subscribe((res) => {
      console.log('REs ', res);
      this.closeProdModal();
    }, (error) => console.error(error));
  }

  getProducts(): void {
    this.productService.getproducts().subscribe((res) => {
      this.loading = true;
      console.log('RES ', res);
      this.products = res;
      this.filteredProducts = [...this.products];
      this.loading= false;
    }, (error) => console.error(error));
  }

  searchProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.description.toLowerCase().includes(this.searchForm.value.query.toLowerCase())
    );
  }

  openCategModal():void {
    this.categVisible = true;
  }

  createCategory(): void {
    this.categoryService.createCategory(
      this.categoryForm.value.description
    ).subscribe((res) => {
      console.log('Res ', res);
      this.closeCategModal();
    }, (error) => { console.log('Error ', error)});
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((res) => {
      console.log('REs ', res);
      this.options =  res;
    }, (error) => console.error(error));
  }

  closeCategModal(): void {
    this.categVisible = false;
  }

  purchase(): void {
    console.log('Compra realizada com sucesso');
  }

}
