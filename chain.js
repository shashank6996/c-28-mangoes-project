class chain {
    constructor(a,b){
        var information = {
           bodyA:a,
           pointB:b,
           stiffness:0.04, length:10

        }
        this.chain = Constraint.create(information)
        World.add(world, this.chain)

    }

display(){
strokeWeight(5);
stroke("red");

if(this.chain.bodyA){
    line (this.chain.bodyA.position.x , this.chain.bodyA.position.y , this.chain.pointB.x , this.chain.pointB.y)
}

}

disconnectChain(){
    this.chain.bodyA = null
}

}
