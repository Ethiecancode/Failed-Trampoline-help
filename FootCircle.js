class FootCircle {
    constructor(x,y,RADIUS)
    {
        this.x = x
        this.y = y
        this.RADIUS = RADIUS

        var properties = {
            density: 1,
            airFriction: 0.3,
            restitution: 0.2
        }

        this.body = Bodies.circle(this.x, this.y, RADIUS, properties)
        World.add(smallWorld, this.body)
    }

    display()
    {
        var locate = this.body.position
        push()
        translate(locate.x, locate.y, locate.RADIUS)
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(0,0, this.RADIUS)
        pop()
    }
}