
// eslint-disable-next-line no-console
//console.log("hola");

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let mail = ['.com','.es','.TheLostofUs'];

for(let i = 0; i <pronoun.length; i++){
    for(let y = 0; y < adj.length; y++){
      for( let k = 0; k < noun.length; k++){
         for (let x = 0; x< mail.length; x++){
          console.log(pronoun[i]+ adj[y]+ noun[k]+ mail[x]);
         }
      }
    }
}