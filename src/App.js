import React, {Component} from "react";
import MenuUtama from "./page/MenuUtama";
import MenuKontak from "./page/MenuKontak";
import MenuProduct from "./page/MenuProduct";
import MenuTentangKami from "./page/MenuTentangKami";

const Header = () => {
  return(
    <div>
      <h3>Ini Halaman Untuk Header</h3>
    </div>
  );
}

const Footer = () => {
  return(
    <div>
      <h3>Ini Halaman Untuk Footer</h3>
    </div>
  );
}

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <MenuUtama/>
        <MenuProduct/>
        <MenuKontak/>
        <MenuTentangKami/>
        <Footer/>
      </div>
    );
  }
}

export default App;
