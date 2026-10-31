class TrampPad {
    constructor (x,y,w,h)
    {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        var properties = {
            density:0.4,
            friction:0.09
        }

        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, properties)
        World.add(smallWorld, this.body)
    }

    display()
    {
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rectMode(CENTER)
        fill("green")
        rect(0,0, this.w, this.h)
        pop()
    }
}