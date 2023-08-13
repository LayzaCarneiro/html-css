function changeVelocity(velocity, printer){
    while(velocity >= 20){
        velocity -= 20
        printer(velocity)
    }
    alert("Nave parada")
  }
  
changeVelocity(150, function(velocity){console.log("Velocidade atual: " + velocity + "km/s")})