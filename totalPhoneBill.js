function totalPhoneBill(bill1){
    var call = 2.75
    var sms = .65
    var myBill = bill1.split(', ');
    let totalCost = 0
    // console.log(bill1.split(','))
    for (var i = 0; i < myBill.length; i++) {
      
      
      if (myBill[i].startsWith('sms')) {
        totalCost += sms
      } else if (myBill[i].startsWith('call')){
        totalCost += call
      }
      //console.log(myBill)
      
    }
    // console.log("R" + totalCost.toFixed(2))
    return "R" + totalCost.toFixed(2)
  }