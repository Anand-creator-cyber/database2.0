class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2')
        title.html("CAR RACING GAME");
        title.position(130,0);

        var input = createInput("name");
        var button = createButton('play');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.height();
            button.height();
            var name = input.value();
            playerCount+= 1;
            player.update(name);
            player.updateCount(playerCount);
            var greet = createElement('h3');
            greet.html("HELLO" + name);
            greet.position(130,160);
        })
        
    }
}