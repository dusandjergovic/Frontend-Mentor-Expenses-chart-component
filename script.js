
  $(document).ready(function() {

    $.ajax({
        url: 'data.json',
        success: function(response) {
            console.log(response);
            $("#wed").click(function() {
                let amountWed = $('<span>');
                amountWed.addClass('dayBalanceAmount')
                amountWed.text(`$${response[2].amount}`)
                $('#Wenday').append(amountWed);
            })

            let isAmountMonAdded = false;

            $("#mon").click(function() {
                if(isAmountMonAdded) {
                    $('.dayBalanceAmountMon').remove();
                    isAmountMonAdded = false;
                } else {
                    let amountMon = $('<span>');
                    amountMon.addClass('dayBalanceAmountMon')
                    amountMon.text(`$${response[0].amount}`)
                    $('#Monday').append(amountMon);
                    isAmountMonAdded = true;
                }
            })

            let isAmountTueAdded = false;

            $("#tue").click(function() {
                if(isAmountTueAdded) {
                    $('.dayBalanceAmountTue').remove();
                    isAmountTueAdded = false;
                } else {
                    let amountTue = $('<span>');
                    amountTue.addClass('dayBalanceAmountTue')
                    amountTue.text(`$${response[1].amount}`)
                    $('#Tuesday').append(amountTue);
                    isAmountTueAdded = true;
                }
            })

            let isAmountWedAdded = false;

            $("#wed").click(function() {
                if(isAmountWedAdded) {
                    $('.dayBalanceAmount').remove();
                    isAmountWedAdded = false;
                } else {
                    let amountWed = $('<span>');
                    amountWed.addClass('dayBalanceAmount')
                    amountWed.text(`$${response[2].amount}`)
                    $('#Wenday').append(amountWed);
                    isAmountWedAdded = true;
                }
            })

            let isAmountThuAdded = false;

            $("#thu").click(function() {
                if(isAmountThuAdded) {
                    $('.dayBalanceAmountThu').remove();
                    isAmountThuAdded = false;
                } else {
                    let amountThu = $('<span>');
                    amountThu.addClass('dayBalanceAmountThu')
                    amountThu.text(`$${response[3].amount}`)
                    $('#Thursday').append(amountThu);
                    isAmountThuAdded = true;
                }
            })

            let isAmountFriAdded = false;

            $("#fri").click(function() {
                if(isAmountFriAdded) {
                    $('.dayBalanceAmountFri').remove();
                    isAmountFriAdded = false;
                } else {
                    let amountFri = $('<span>');
                    amountFri.addClass('dayBalanceAmountFri')
                    amountFri.text(`$${response[4].amount}`)
                    $('#Friday').append(amountFri);
                    isAmountFriAdded = true;
                }
            })

            let isAmountSatAdded = false;

            $("#sat").click(function() {
                if(isAmountSatAdded) {
                    $('.dayBalanceAmountSat').remove();
                    isAmountSatAdded = false;
                } else {
                    let amountSat = $('<span>');
                    amountSat.addClass('dayBalanceAmountSat')
                    amountSat.text(`$${response[5].amount}`)
                    $('#Satrday').append(amountSat);
                    isAmountSatAdded = true;
                }
            })

            let isAmountSunAdded = false;

            $("#sun").click(function() {
                if(isAmountSunAdded) {
                    $('.dayBalanceAmountSun').remove();
                    isAmountSunAdded = false;
                } else {
                    let amountSun = $('<span>');
                    amountSun.addClass('dayBalanceAmountSun')
                    amountSun.text(`$${response[6].amount}`)
                    $('#Sunday').append(amountSun);
                    isAmountSunAdded = true;
                }
            })

            
        }
    })

  })