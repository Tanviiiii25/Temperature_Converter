function temperatureConverter1(valNum) {
    valNum = parseFloat(valNum);

    let input2 = document.getElementById("output2");
    input2.value = ((valNum-32)/1.8)+273.15;

    let input3 = document.getElementById("output3");
    input3.value = (valNum-32)/1.8;
  }

  function temperatureConverter2(valNum) {
    valNum = parseFloat(valNum);

    let input1 = document.getElementById("output1");
    input1.value = ((valNum-273.15)*1.8)+32;

    let input3 = document.getElementById("output3");
    input3.value = (valNum-273.15);
  }

  function temperatureConverter3(valNum) {
    valNum = parseFloat(valNum);

    let input1 = document.getElementById("output1");
    input1.value = (valNum*1.8)+32;

    let input2 = document.getElementById("output2");
    input2.value = (valNum+273.15);
    
  }