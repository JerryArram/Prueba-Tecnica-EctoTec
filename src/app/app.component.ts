import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder) {
    
  }

  get invalidName(){

    return this.form.get("nombre")?.invalid && this.form.get("nombre")?.touched;
  }

  get invalidEmail(){

    return this.form.get("email")?.invalid && this.form.get("email")?.touched;
  }

  get invalidPhone(){

    return this.form.get("telefono")?.invalid && this.form.get("telefono")?.touched;
  }

  get invalidDate(){

    return this.form.get("fecha")?.invalid && this.form.get("fecha")?.touched;
  }

  get invalidCity(){

    return this.form.get("ciudad")?.invalid && this.form.get("ciudad")?.touched;
  }

  valid: boolean = false;
  sender: boolean = true;

  usuario: string = "";

  date1 = new Date();
  currentYear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1; 
  currentDay = this.date1.getUTCDay();

  today = "2023-09-13"

  FinalMonth : any;
  FinalDay : any;


  minDate = "2023-09-13";
  maxDate = "2123-09-13";

  
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nombre:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      telefono:['',[Validators.required,Validators.pattern('[() + # 0-9].*')]],
      fecha:['',[Validators.required]],
      ciudad:['',[Validators.required]]

    })

    if(this.currentMonth < 10){
      this.FinalMonth = "0" + this.currentMonth;
    }else{
      this.FinalMonth = this.currentMonth;
    }

    if(this.currentDay < 10){
      this.FinalDay = "0" + this.currentDay;
    }else{
      this.FinalDay = this.currentDay;
    }

    this.today = this.currentYear + "-" + this.FinalMonth + "-" + this.FinalDay;
    console.log(this.today);
    this.minDate = this.today;

  }

  loadAPI(): any {
  
  }

  send(): any {
    console.log(this.form.value);
    this.valid = true;
    this.sender = false;

    
  }


}

