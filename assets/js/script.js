// today's day and date
var today = moment().format('LL');
$("#currentDay").text(today);

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

function timeCompare() {
    var currentTime = moment().hour();
    console.log(currentTime)

    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id"));
        console.log(blockTime);

        if (blockTime < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else if (currentTime === blockTime) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else {
            $(this).removeClass("present");
            $(this).addClass("future");
            $(this).removeClass("past");
        }
    })

}


timeCompare();