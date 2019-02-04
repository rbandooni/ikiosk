$(function(){
    // console.log('CLOCK.JS RUNNING');

    // $('#eventsModal').parent().on('show.bs.modal', function (e) { $(e.relatedTarget.attributes['data-target'].value).appendTo('body'); })

    // $("#eventsModal a").click(function (e) { console.log(e); e.preventDefault(); console.log('link stopped') });


})


function showModal(evt, regFlag) {
    // console.log(evt.events[0]);

    // $('#eventsModal').modal('show');
    if (regFlag == 1) {
        swal({
            title: evt.events[0].title,
            html: '<div id="eventsModal">' + evt.events[0].description + "</div>",
            // showCloseButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            customClass: 'animated jello swal-wide'

        })
    }else {
        let pubURL = evt.events[0].url['public'];
        if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
            swal({
                title: evt.events[0].title,
                html: '<div id="eventsModal">' + evt.events[0].description + "<br>Scan this code to register <br><br><img src='https://ikioskdev.library.wmich.edu/api/qr/Get_QRC.php?u=" + pubURL + "'></div>",
                // showCloseButton: true,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                customClass: 'animated jello swal-wide',
                footer: 'To register for this event, scan this code above!'

            })

        }
        else {
            swal({
                title: evt.events[0].title,
                html: '<div id="eventsModal">' + evt.events[0].description + "<br>Scan this code to register <br><br><img src='/api/qr/Get_QRC.php?u=" + pubURL + "'></div>",
                // showCloseButton: true,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                customClass: 'animated jello swal-wide',
                footer: 'To register for this event, scan this code above!'

            })     
        }
       
    }



}

function showNewsPopup(feedData) {
    console.log(feedData);
    swal({
        title: feedData[0].title,
        customClass: 'swal-wide',
        html: '<div id="newsModal">'+feedData[0].content+'</div>'
        
    })
}

function getHours(weeks) {

}

