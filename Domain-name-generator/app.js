var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com",".net",".us",".io"]

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
        for (let h=0;h<ext.length;h++){
            console.log(pronoun[i] + adj[j] + noun[k]+ ext[h]);
        }
    }
  }
}