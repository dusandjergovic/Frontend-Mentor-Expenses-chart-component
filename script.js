
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

            $("#mon").click(function() {
                let amountMon = $('<span>');
                amountMon.addClass('dayBalanceAmountMon')
                amountMon.text(`$${response[0].amount}`)
                $('#Monday').append(amountMon);
            })

            $("#tue").click(function() {
                let amountTue = $('<span>');
                amountTue.addClass('dayBalanceAmountTue')
                amountTue.text(`$${response[1].amount}`)
                $('#Tuesday').append(amountTue);
            })

            $("#thu").click(function() {
                let amountThu = $('<span>');
                amountThu.addClass('dayBalanceAmountThu')
                amountThu.text(`$${response[3].amount}`)
                $('#Thursday').append(amountThu);
            })

            $("#fri").click(function() {
                let amountFri = $('<span>');
                amountFri.addClass('dayBalanceAmountFri')
                amountFri.text(`$${response[4].amount}`)
                $('#Friday').append(amountFri);
            })

            $("#sat").click(function() {
                let amountSat = $('<span>');
                amountSat.addClass('dayBalanceAmountSat')
                amountSat.text(`$${response[5].amount}`)
                $('#Satrday').append(amountSat);
            })

            $("#sun").click(function() {
                let amountSun = $('<span>');
                amountSun.addClass('dayBalanceAmountSun')
                amountSun.text(`$${response[6].amount}`)
                $('#Sunday').append(amountSun);
            })
        }
    })

  })