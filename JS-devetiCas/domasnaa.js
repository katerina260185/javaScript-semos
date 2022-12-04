class Coffemate {
    water;
    coffe;
    milk;
    num;

    constructor (water, coffe, milk, num) {
        this.water = water;
        this.coffe = coffe;
        this.milk = milk;
        this.num = num;
      
    }

    makeCoffe(wa, co, mi, num){
        

        if(this.water -wa >= 100 && this.coffe - co >= 7 && this.milk - mi >= 10){
            console.log (`your coffe is ready`)
            
        } 
       

        if(this.water - wa <= 100 ) {
        this.water = 0;
        console.log(`missing ${wa}g of water`)
        return
        }
        this.water -= wa

    
        if( this.coffe - co <= 7 ) {
            
            this.coffe = 0;

        console.log(`missing ${co}g of coffe`)
        return
        }
        this.coffe -= co
      

        if( this.milk - mi <= 10) {
            
            this.milk = 0;
        console.log(`missing ${mi}g of milk`)
           return

        }
       this.milk -= mi  


       if (wa >= 100 &&  co >= 7 &&  mi >= 10) {
        this.num++
        return
      }  

      }

    }

    


const cappuchino = new Coffemate (1000, 100, 100, 0)

setInterval(()=> { 
 cappuchino.makeCoffe(100, 7, 10, 0)
 console.log( `${cappuchino.num} cup of coffe`)
console.log(`water:${cappuchino.water}, coffe:${cappuchino.coffe}, milk:${cappuchino.milk}`)



}, 1000)


