import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
  
})
export class ProductCardComponent {


    product = {
      image: 'https://imgs.search.brave.com/spYsrb48BrkR2e2-SmU6qvPtAIsOUTSgW41VCfBku3E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc1/NTk3Nzc5L2VzL2Zv/dG8vb2xkLWZvdG9n/cmFmJUMzJUFEYXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTJJSFU4RmxCYWdL/QXFsSTBwVjhsOHdt/eGI3eF9PZF95Wnhw/MS1MeUhLSWc9',
      name: 'Piedra de granito',
      description: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      uniAviable: 20,
    }


    productImageStyle = {
      border: '3px solid red',
      filter: 'sepia(0%)'
    }

    formState = false

    address = ''
    postalCode = 0



    buyProduct() {
      console.log('Compraremos un producto')
      this.formState = true
    }

    addToCart() {
      console.log('agregamos un producto a la cesta')
    }


    orderProduct(){
      console.log(`Direccion: ${this.address}`)
      console.log(`Codigo postal: ${this.postalCode}`)
    }







    OnMouseEnter() {
      console.log('On mouse enter');
      this.formState = false
      this.productImageStyle = {...this.productImageStyle, filter: 'sepia(100%)'};
    }

    OnMouseLeave() {
      console.log('On mouse leave')
      this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0%)'};

    }
}

