/** Create a monster object that can take damage */
const monster = {
  damage: [],
  hp: 100,

  /**
   * When the hit property is adjusted, run it's
   * value as a property in this function
   */
  set hit(amount) {
    /** Only record damage if this monster's hp is greater than 0 */
    if(this.hp>0) {
      this.damage.push(amount)
    }

    /** Always reduce the monster's hp by the damage passed */
    this.hp -= amount
  },

  /** Create a get with the same name
   * and return the last submitted value
   * to make the set invisible
   */
  get hit() {
    let last_index = this.damage.length-1
    return this.damage[last_index]
  }
}

monster.hit = 22
console.log("HP & Damage log: ", monster.hp, monster.damage)

monster.hit = 33
console.log("HP & Damage log: ", monster.hp, monster.damage)
console.log("Latest hit: ", monster.hit)

monster.hit = 50
console.log("HP & Damage log: ", monster.hp, monster.damage)

monster.hit = 10
console.log("HP & Damage log: ", monster.hp, monster.damage)

monster.hit = 5
console.log("HP & Damage log: ", monster.hp, monster.damage)

/** Will only report the last hit while monster had more than 0 hp */
console.log("Latest hit: ", monster.hit)


