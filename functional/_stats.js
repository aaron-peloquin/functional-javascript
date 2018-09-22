const statPrototype = {
  rand(min,maxAdd){
    return Math.floor(Math.random()*maxAdd+min)
  },

  setStats(){
    switch(this.job) {
      default:
        this.job = 'Cleric'
        this.hp = this.rand(15,25)
        this.atk = this.rand(2,18)
      break
      case 'Fighting man':
        this.hp = this.rand(15,50)
        this.atk = this.rand(1,10)
      break
      case 'Magic-User':
        this.hp = this.rand(1,15)
        this.atk = this.rand(25,100)
      break
      case 'Thief':
        this.hp = this.rand(15,15)
        this.atk = this.rand(15,30)
      break

      case 'Boss':
        this.hp = this.rand(250,200)
        this.atk = this.rand(6,4)
      break
    }
    console.log('\t'+this.name+' is a '+this.job+' who has '+this.atk+' attack, and '+this.hp+' health')
  }
}

module.exports = statPrototype
//export {statPrototype}