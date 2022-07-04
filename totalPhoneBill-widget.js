document.addEventListener('alpine:init', () => {

    Alpine.data('totalPhoneBillWidget', function () {
        return {
            message : '',
            usage: '',
            amount: '',
            bill1: '',
            billUsage : '',
            billMessage: '',
            // showBill: false,
            calculate() {
                // const billMessage = totalPhoneBill(this.billUsage, this.billMessage);
                // console.log(billMessage);
                this.billMessage = totalPhoneBill(this.billUsage, this.bill1);
                setTimeout(() => {
                    this.billMessage = '';
                    this.billUsage = '';
                   
                }, 3000);
            }
            
        }
    });
        
})