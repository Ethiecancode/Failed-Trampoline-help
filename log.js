class Log extends Baseclass {
    constructor(x,y,h,angle)
    {
       super(x,y,20,h,angle)
       this.image = loadImage("Assets/wood2.png")
       Body.setAngle(this.body, angle)
    }
}
