function findFactorial(number) {

    if (number < 0){      
          return -1;
    }
  
    else if (number == 0){     
        return 1;
    }
  
    else {
        return (number * findFactorial(number - 1));
    }
  
  }

  findFactorial(8);
  //hello dev
  //new change

