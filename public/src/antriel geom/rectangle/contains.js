var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics({ fillStyle:{ color: 0xaa0000 } });

    var rect = new Phaser.Geom.Rectangle(250, 200, 300, 200);

    graphics.fillRectShape(rect);

    this.input.events.on('POINTER_MOVE_EVENT', function (event) {

        graphics.clear();

        if(rect.contains(event.x, event.y))
        {
            graphics.fillStyle(0x0000aa);
        }
        else
        {
            graphics.fillStyle(0xaa0000);
        }

        graphics.fillRectShape(rect);

    });
}
