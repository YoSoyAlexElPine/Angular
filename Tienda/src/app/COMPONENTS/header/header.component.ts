import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <div class="container">

      <img id="imagen" src="./assets/amazon-logo.png" height="50" />
      
      <div class="search-container">
        <form action="/buscar" method="GET">
          <select name="category" id="category">
            <option value="all">Todos los departamentos</option>
            <option value="electronics">Electrónicos</option>
            <option value="clothing">Ropa</option>
          </select>
          <input
            type="text"
            id="search"
            name="q"
            placeholder="Ingrese su búsqueda"
            required
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  `,
  styles: `
    .container {
      display: flex;
      align-items: stretch;
      padding: 10px;
      box-sizing: border-box;
      background: rgb(52, 73, 94);
      margin: 10px;
    }

    .search-container {
      display: flex;
      align-items: stretch;
      padding: 20px;
      margin: 0px;
    }

    input,
    select,
    button {
      padding: 5px;
      font-size: 16px;
      margin-right: 0px; /* Ajusta según tus preferencias */
      border: 1px solid #ccc;
    }

    select {
      width: 160px;
    }

    button {
      padding: 5px;
      background-color: #007BFF;
      color: #fff;
      border: none;
      cursor: pointer;
    }

    #category {
      margin-left: 10px;
    }

    #imagen {
      padding: 10px;
    }

  `,
})
export class HeaderComponent {}
