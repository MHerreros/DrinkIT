reqDrink(n){
    this.http.post(this.ROOT_URL,{
      "trago": n
      } ).subscribe(val => console.log(val))
  }
