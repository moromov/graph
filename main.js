function f(x) {
    return Math.sin(x);
}

function cosinusioda(x) {
    return Math.cos(x);
}

function tg(x) {
    return Math.tan(x);
}

function cot(x) {
    return Math.cot(x);
}

window.onload = function() {
    var WIN = {
        LEFT: -10,
        BOTTOM: -10,
        WIDTH: 20,
        HEIGHT: 20
    }

    var graph = new Graph({WIN: WIN})

    function renderFunction(f, color, width){
        var x = WIN.LEFT;
        var dx = WIN.WIDTH / 1000;
        while(x < WIN.WIDTH + WIN.LEFT) {
            graph.line(x, f(x), x + dx, f(x + dx), color, width);
            x += dx;
        }
    }

    function renderCosinusioda(f, color, width){
       var x = WIN.LEFT;
        var dx = WIN.WIDTH / 1000;
        while(x < WIN.WIDTH + WIN.LEFT) {
            graph.line(x, cosinusioda(x), x + dx, cosinusioda(x + dx), color, width);
            x += dx;
        }
    }
    function renderTg(f, color, width){
        var x = WIN.LEFT;
         var dx = WIN.WIDTH / 1000;
         while(x < WIN.WIDTH + WIN.LEFT) {
             graph.line(x, tg(x), x + dx, tg(x + dx), color, width);
             x += dx;
         }
     }

     function renderCot(f, color, width){
        var x = WIN.LEFT;
         var dx = WIN.WIDTH / 1000;
         while(x < WIN.WIDTH + WIN.LEFT) {
             graph.line(x, tg(x), x + dx, tg(x + dx), color, width);
             x += dx;
         }
     }

    renderTg(tg,'orange',3);
    renderCot(cot,'pink',3);
    renderCosinusioda(cosinusioda,'blue',3);
    renderFunction(f, 'green', 3);
    graph.osY('gray',1);
    graph.osX('gray',1);
    graph.oc('black',2);
};
