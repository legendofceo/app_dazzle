

class category
{
    constructor()
    {

    }
}

exports.new = function(id,title) {

 	return new category(id,title)
}


class anim extends category
{
    constructor()
    {
       super()
    }
}

class animal extends category
{
    constructor()
    {
       super()
    }
}



class body extends category
{
    constructor()
    {
       super()

       this.tag = {}
       this.tag.f8 = false
       this.tag.f3 = false
       this.tag.f2 = false
       this.tag.f1 = false

       this.tag.m8 = false
       this.tag.m3 = false
       this.tag.m2 = false
       this.tag.m1 = false

    }
}

class bodypart extends category
{
    constructor()
    {
       super()

       this.tag = {}
       this.tag.f8 = false
       this.tag.f3 = false
       this.tag.f2 = false
       this.tag.f1 = false

       this.tag.m8 = false
       this.tag.m3 = false
       this.tag.m2 = false
       this.tag.m1 = false

    }
}


class clothes extends category
{
    constructor()
    {
       super()

       this.tag = {}
       this.tag.f8 = false
       this.tag.f3 = false
       this.tag.f2 = false
       this.tag.f1 = false

       this.tag.m8 = false
       this.tag.m3 = false
       this.tag.m2 = false
       this.tag.m1 = false
    }
}

class effects extends category
{
    constructor()
    {
       super()

    }
}

class environment extends category
{
    constructor()
    {
       super()

    }
}

class expression extends category
{
    constructor()
    {
       super()

       this.tag = {}
       this.tag.f8 = false
       this.tag.f3 = false
       this.tag.f2 = false
       this.tag.f1 = false

       this.tag.m8 = false
       this.tag.m3 = false
       this.tag.m2 = false
       this.tag.m1 = false
    }
}


class eye extends category
{
    constructor()
    {
       super()

       this.tag = {}
       this.tag.f8 = false
       this.tag.f3 = false
       this.tag.f2 = false
       this.tag.f1 = false

       this.tag.m8 = false
       this.tag.m3 = false
       this.tag.m2 = false
       this.tag.m1 = false
    }
}

class figure extends category
{
    constructor()
    {
       super()

       this.tag = {}
       this.tag.f8 = false
       this.tag.f3 = false
       this.tag.f2 = false
       this.tag.f1 = false

       this.tag.m8 = false
       this.tag.m3 = false
       this.tag.m2 = false
       this.tag.m1 = false

       this.tag.centaur = false
       this.tag.misc = false
    }
}

class hair extends category
{
    constructor()
    {
       super()

       this.tag = {}
       this.tag.f8 = false
       this.tag.f3 = false
       this.tag.f2 = false
       this.tag.f1 = false

       this.tag.m8 = false
       this.tag.m3 = false
       this.tag.m2 = false
       this.tag.m1 = false
    }
}

class pose extends category
{
    constructor()
    {
       super()

       this.tag = {}
       this.tag.f8 = false
       this.tag.f3 = false
       this.tag.f2 = false
       this.tag.f1 = false

       this.tag.m8 = false
       this.tag.m3 = false
       this.tag.m2 = false
       this.tag.m1 = false

       this.tag.sex = false
    }
}

exports.anim = function() {return new anim()}
exports.animal = function() {return new animal()}
exports.basestand = function() {return new basestand()}
exports.body = function() {return new body()}
exports.bodypart = function() {return new bodypart()}
exports.clothes = function() {return new clothes()}
exports.effects = function() {return new effects()}
exports.environment = function() {return new environment()}
exports.expression = function() {return new expression()}
exports.eye = function() {return new eye()}
exports.figure = function() {return new figure()}
exports.hair = function() {return new hair()}
exports.pose = function() {return new pose()}
