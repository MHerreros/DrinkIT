// the setup function runs once when you press reset or power the board
// CON HIELO HASTA 250 EN LA ESCALA DE AZUCAR
#define BOMBA_1 8
#define BOMBA_2 9
#define BOMBA_3 10
#define BOMBA_4 11
#define USE 12
#define UST 13

void setup() {
  // initialize digital pin LED_BUILTIN as an output.

  Serial.begin(9600); // Begen listening on port 9600 for serial
  
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(USE, INPUT);
  pinMode(BOMBA_1, OUTPUT); //VODKA
  pinMode(BOMBA_2, OUTPUT); //LIMONADA
  pinMode(BOMBA_3, OUTPUT); //NARANJA
  pinMode(BOMBA_4, OUTPUT); //CAMPARI
  
  digitalWrite(BOMBA_1, HIGH);
  digitalWrite(BOMBA_2, HIGH);
  digitalWrite(BOMBA_3, HIGH);
  digitalWrite(BOMBA_4, HIGH);
}

// the loop function runs over and over again forever
void loop() {
   digitalWrite(UST, HIGH);
   delay(1);
   digitalWrite(UST, LOW);
   int duration = pulseIn(USE,HIGH);
   int distance = (duration/2)/29.1; //Dividido 2 para tomar solo la ida, y dividido 29.1 para la conversión a centímetros
   int minDistance = 9;
   int maxDistance = 16;
   
   
   //if (digitalRead(USE)== HIGH){
    //distance = 15;
   //}else {
    //distance = 11;
   //}
   
   if ((distance > minDistance) && (distance < maxDistance)){
     Serial.println("full_tray");
     delay(1000);
     if(Serial.available() > 0) // Read from serial port
      {
        char ReaderFromNode; // Store current character
        ReaderFromNode = (char) Serial.read();
        convertToState(ReaderFromNode); // Convert character to state
        delay(1000);  
      }
      else {
        Serial.println("no_selection");
        delay(500);
      }
   }
   else{
    Serial.println("empty_tray");
    delay(500);
   } 
}

void convertToState(char chr) {
  if(chr=='l'){
    digitalWrite(BOMBA_1, LOW);
    delay(3000); 
    digitalWrite(BOMBA_1, HIGH);
    digitalWrite(BOMBA_2, LOW);
    delay(4000); 
    digitalWrite(BOMBA_2, HIGH);
    
    delay(500);
    Serial.println("done");
    delay(500);
  }
  if(chr=='L'){
    digitalWrite(BOMBA_1, LOW);
    delay(4000); 
    digitalWrite(BOMBA_1, HIGH);
    digitalWrite(BOMBA_2, LOW);
    delay(6000); 
    digitalWrite(BOMBA_2, HIGH);
    
    delay(500);
    Serial.println("done");
    delay(500);
  }
  if(chr=='d'){
    digitalWrite(BOMBA_1, LOW);
    delay(4000);
    digitalWrite(BOMBA_1, HIGH);
    digitalWrite(BOMBA_3, LOW);
    delay(6000); 
    digitalWrite(BOMBA_3, HIGH);
    
    delay(500);
    Serial.println("done");
    delay(500);
  }
  if(chr=='D'){
    digitalWrite(BOMBA_1, LOW);
    delay(5000);
    digitalWrite(BOMBA_1, HIGH);
    digitalWrite(BOMBA_3, LOW);
    delay(5000); 
    digitalWrite(BOMBA_3, HIGH);
    
    delay(500);
    Serial.println("done");
    delay(500);
  }
  if(chr=='c'){
    digitalWrite(BOMBA_4, LOW);
    delay(5000); 
    digitalWrite(BOMBA_4, HIGH);
    digitalWrite(BOMBA_3, LOW);
    delay(9000); 
    digitalWrite(BOMBA_3, HIGH);
    
    delay(500);
    Serial.println("done");
    delay(500);
  }
  if(chr=='C'){
    digitalWrite(BOMBA_4, LOW);
    delay(6000); 
    digitalWrite(BOMBA_4, HIGH);
    digitalWrite(BOMBA_3, LOW);
    delay(8000); 
    digitalWrite(BOMBA_3, HIGH);
    
    delay(500);
    Serial.println("done");
    delay(500);
  }
  if(chr=='m'){
    digitalWrite(BOMBA_3, LOW);
    digitalWrite(BOMBA_1, LOW);
    digitalWrite(BOMBA_4, LOW);
    delay(2000); 
    digitalWrite(BOMBA_1, HIGH);
    digitalWrite(BOMBA_4, HIGH);
    delay(3000); 
    digitalWrite(BOMBA_3, HIGH);
    
    delay(500);
    Serial.println("done");
    delay(500);
  }
  if(chr=='M'){
    digitalWrite(BOMBA_3, LOW);
    digitalWrite(BOMBA_1, LOW);
    digitalWrite(BOMBA_4, LOW);
    delay(3000); 
    digitalWrite(BOMBA_1, HIGH);
    digitalWrite(BOMBA_4, HIGH);
    delay(2000); 
    digitalWrite(BOMBA_3, HIGH);
    
    delay(500);
    Serial.println("done");
    delay(500);
  }
  if(chr=='Z'){
    digitalWrite(BOMBA_1, LOW);
    delay(5000); 
    digitalWrite(BOMBA_1, HIGH);
    delay(100);

    digitalWrite(BOMBA_2, LOW);
    delay(5000); 
    digitalWrite(BOMBA_2, HIGH);
    delay(100);

    digitalWrite(BOMBA_3, LOW);
    delay(5000); 
    digitalWrite(BOMBA_3, HIGH);
    delay(100);

    digitalWrite(BOMBA_4, LOW);
    delay(5000); 
    digitalWrite(BOMBA_4, HIGH);
    delay(100);

    Serial.println("done");
    delay(500);
  }
}
