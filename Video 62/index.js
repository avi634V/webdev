/* create a business name generator by combining list of adjuective , shop name and anothjer word.
Adjective:
    crazy
    amazing
    fire
Shope name:
    Engine
    Foods
    Garments
Another :
    Bros
    Limited
    Hub

*/

let adjectives = ['crazy', 'amazing', 'fire'];
let shopNames = ['Engine', 'Foods', 'Garments'];
let another = ['Bros', 'Limited', 'Hub'];
let businessName = [];
for (let i = 0; i < adjectives.length; i++) {
    for (let j = 0; j < shopNames.length; j++) {
        for (let k = 0; k < another.length; k++) {
            businessName.push(adjectives[i] + shopNames[j] + another[k]);
        }
    }
}
console.log(businessName);