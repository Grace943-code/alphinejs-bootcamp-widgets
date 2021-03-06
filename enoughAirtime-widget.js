document.addEventListener('alpine:init', () => {

    Alpine.data('enoughAirtimeWidget', function () {
        return {
            
                airtimeUsage : '',
                availableAmount : '0.00',
                airtimeMessage : '',
                calculate(){
                    this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.availableAmount)
                    setTimeout(() => {
                        this.airtimeMessage = '';
                        this.airtimeUsage = '';
                        this.availableAmount = '0.00';
                    }, 3000);
                }
            
        }
    });
        
})