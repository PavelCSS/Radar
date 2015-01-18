/**
 * Created by PavelCSS on 13.01.15.
 */
var time = 2, sonar = true, peoples;
addPeople();

setInterval(function(){
    addPeople();
    radar();
}, 300000);

function addPeople(){
    peoples = [];
    for (i = 0; i < Math.floor((Math.random() * 50) + 1); i++) {
        peoples.push({
            distance : Math.floor((Math.random() * 190) + 1),
            angle    : Math.floor((Math.random() * 360) + 1)
        });
    }
};

function radar(){

    var $guides = $('#guides');
    $guides.html('');

    var radius = 50, maxDistance = 200;
    for (i = 0; i < peoples.length; i++) {
        var dis = ~~(peoples[i].distance / maxDistance * 50),
            disX = 90 < peoples[i].angle < 270 ? radius - dis : radius,
            disY = 180 < peoples[i].angle < 360 ? radius - dis : radius,
            angleNew = (peoples[i].angle) * Math.PI / 180,
            degX = Math.round(dis * Math.cos(angleNew)),
            degY = Math.round(dis * Math.sin(angleNew)),
            getDegX = disX + dis - degX,
            getDegY = disY + dis - degY,
            delay = !sonar ? time / 360 * Math.abs(peoples[i].angle + 5) : time / radius * (dis + 3);

        $guides.append($('<span>')
            .addClass('dot')
            .css({
                left : getDegX + '%',
                top  : getDegY + '%',
                '-webkit-animation-delay' : delay + 's',
                'animation-delay' : delay + 's'
            })
            .attr({
                'data-atDeg' : peoples[i].angle
            }));

        var typeRadar = sonar ? '#sonar' : '#radar';
        $(typeRadar).addClass('animated');
    }

    var options = { frequency : 10 };
    navigator.compass.watchHeading(watchSuccess, watchError, options);

}

// onSuccess: Get the current heading
//
function watchSuccess(heading) {
    var angle = ~~heading.magneticHeading;
    $('#guides')
        .css({
            '-webkit-transform' : 'rotate(-' + angle + 'deg)',
            'transform' : 'rotate(-' + angle + 'deg)'
        });
}

// onError: Failed to get the heading
//
function watchError(compassError) {
    console.log('Compass Error: ' + compassError.code);
}