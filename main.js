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

    function renderOXY(){
        for (x = 0; x < WIN.WIDTH + WIN.LEFT; x++) { //от 0 до х+
            graph.line(x, WIN.BOTTOM, x,  WIN.HEIGHT + WIN.BOTTOM, 'grey', 1) //ось y
        }
        
        for (x = 0; x > WIN.LEFT; x--) {
            graph.line(x, WIN.BOTTOM, x,  WIN.HEIGHT + WIN.BOTTOM, 'grey', 1); //ось y
        }
        
        for (x = 0; x > WIN.BOTTOM; x--) { 
            graph.line(WIN.LEFT, x, WIN.WIDTH + WIN.LEFT, x, 'grey', 1);
        }

        for (x = 0; x < WIN.HEIGHT + WIN.BOTTOM; x++) { 
            graph.line(WIN.LEFT, x, WIN.WIDTH + WIN.LEFT, x, 'grey', 1);
        }

        graph.line(WIN.LEFT, 0, WIN.WIDTH + WIN.LEFT, 0, 'black') //ось х
        graph.line(0, WIN.BOTTOM, 0, WIN.HEIGHT + WIN.BOTTOM, 'black') //ось y
    }
    

    

    renderOXY();
    renderFunction(f, 'green', 3);
    renderFunction(g);

};
