const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var smallEngine, smallWorld
var footCircle
var floor, trampSpring1, trampSpring2
var springStand1
var trampPad1, trampPad2, trampPad3
var string1, string2, string3, string4

function setup()
{
    createCanvas (500, 900)
    smallEngine = Engine.create()
    smallWorld = smallEngine.world

    footCircle = new FootCircle (230, 100, 50)
    floor = new Floor (250, 700, 500, 10)
    trampSpring1 = new TrampStand (150, 670, 10, 50) 
    trampSpring2 = new TrampStand (300, 670, 10, 50)

    // springStand1 = Constraint.create({
    //     bodyA: trampSpring1.body,
    //     pointA: {x:0, y:0},
    //     bodyB: trampSpring2.body,
    //     pointB: {x:0, y:0},
    //     length: 150,
    //     stiffness: 0.5
    // })
    // World.add(smallWorld, springStand1)

    trampPad1 = new TrampPad (185, 670, 46, 10)
    trampPad2 = new TrampPad (235, 670, 46, 10)
    trampPad3 = new TrampPad (285, 670, 46, 10)

    string1 = Constraint.create({
    bodyA: trampSpring1.body,
    pointA: {x:0, y:0},
    bodyB: trampPad1.body,
    pointB: {x:0, y:0},
    length:0.01,
    stiffness:0.01
    })
    World.add(smallWorld, string1)

    string2 = Constraint.create({
        bodyA: trampPad1.body,
        pointA: {x:0, y:0},
        bodyB: trampPad2.body,
        pointB: {x:0, y:0},
        length:0.01,
        stifness:0.01
    })
    World.add(smallWorld, string2)

    string3 = Constraint.create({
        bodyA: trampPad2.body,
        pointA: {x:0, y:0},
        bodyB: trampPad3.body,
        pointB: {x:0, y:0},
        length:0.01,
        stiffness:0.01
    })
    World.add(smallWorld, string3)

    string4 = Constraint.create({
        bodyA: trampPad3.body,
        pointA: {x:0, y:0},
        bodyB: trampSpring2.body,
        pointB: {x:0, y:0},
        length: 0.01,
        stiffness: 0.01
    })
    World.add(smallWorld, string4)

}


function draw()
{
    Engine.update(smallEngine)
    background("red")

    footCircle.display()
    floor.display()
    trampSpring1.display()
    trampSpring2.display()

    // push()
    // fill("pink")
    // strokeWeight(10)
    // line(trampSpring1.body.position.x, trampSpring1.body.position.y - 20, trampSpring2.body.position.x, trampSpring2.body.position.y - 20)
    // pop()

    trampPad1.display()
    trampPad2.display()
    trampPad3.display()

    push()
    strokeWeight(5)
    line(trampSpring1.body.position.x, trampSpring1.body.position.y, trampPad1.body.position.x, trampPad1.body.position.y)
    pop()

    push()
    strokeWeight(5)
    line(trampPad1.body.position.x, trampPad1.body.position.y, trampPad2.body.position.x, trampPad3.body.position.y)
    pop()

    push()
    strokeWeight(5)
    line(trampPad2.body.position.x, trampPad2.body.position.y, trampPad3.body.position.x, trampPad3.body.position.y)
    pop()

    push()
    strokeWeight(5)
    line(trampPad3.body.position.x, trampPad3.body.position.y, trampSpring2.body.position.x, trampSpring2.body.position.y)
    pop()
}