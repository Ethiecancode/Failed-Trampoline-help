class Floor {
    constructor (x,y,w,h)
    {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        var properties = {
            isStatic: true,
        }

        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, properties)
        World.add(smallWorld, this.body)
    }

    display()
    {
        var locate = this.body.position
        push()
        translate(locate.x, locate.y)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}