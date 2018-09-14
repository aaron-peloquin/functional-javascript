const statPrototype = new require('./_stats.js') 
let boss = new require('./_boss.js')

/** Create an empty heroes object (filled by the combat object later) */
let heroes = []

/** Combat Manager */
const combat = {
  /** Boss attack! */
  bossAttack() {
    heroes.forEach((h)=>{
        h.hp -= boss.atk
        h.status = ( h.hp > 0 ? 'up' : 'down' )
      })
  },

  /** Every hero attacks the boss once, reducing (pun intended) the boss.hp */
  playersAttack() {
    return heroes.reduce(
      ( b, h ) => {
        b.hp -= h.atk
        return b
      },
      boss )
  },

  /** Have the townsfolk cart away the fallen heroes */
  cartAwayDeadHeroes() {
    heroes = heroes.filter( h=> {
      let conscious = (h.status=='up')
      if(!conscious) {
        console.log('\t'+h.name+' has fallen unconscious!')
      }
      return conscious
    } )
  },

  resetHeroes() {
    heroes = [
      {name: "Jerry"},
      {name: "Jenk", job: "Fighting man"},
      {name: "Jeff", job: "Magic-User"},
      {name: "Jen", job: "Thief"},
      {name: "Joffrey"}  
    ]
    heroes.map(h=>Object.setPrototypeOf(h,statPrototype))
  },

  run() {
    this.resetHeroes()
    heroes.forEach(h=>h.setStats())
    boss.setStats()
    let round = 0
    while(boss.hp>0 && heroes.length>0 && round<1000) {
      round++
      console.log('== Round '+round+' ==')
      /** Boss hits all heroes with an AoE attack */
      this.bossAttack()
      /** Players attack before checking to see if they're knocked out */
      this.playersAttack()
      this.cartAwayDeadHeroes()
      console.log('Boss reduced to ',boss.hp)
    }
    return this.combatResults()
  },

  combatResults() {
      if (boss.hp<1 && heroes.length<1) {
        return 'The heroes are victorious.. but alas, none of them made it.'
      }
      else if(boss.hp>0) {
        return 'The boss won! Townsfolk, run for your lives!!'
      }
      else {
        return "Our heroes won! Shower them ("+heroes.map(h=>h.name+' with '+h.hp+' hp').join(', ')+") with with magic items!"
      }
    }
}

module.exports = combat