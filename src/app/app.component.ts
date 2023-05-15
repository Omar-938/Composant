import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Composants';

  user = {
    name : "Doe",
    firstName : "John",
    age : 25,
    isHidden : false,
    quote : "",
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  }
  

age(){

if(this.user.isHidden === false){
  this.user.isHidden = true;
}
else{
  this.user.isHidden = false;
}

};




}
