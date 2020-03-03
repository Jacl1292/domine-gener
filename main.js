var pronoun = ['the', 'our']; var adj = ['great', 'big']; var noun = ['jogger', 'racoon'];

let ul = document.getElementById("dominio");
for (i = 0; i < pronoun.length; i++) {
    for (j = 0; j < adj.length; j++) {
        for (k = 0; k < noun.length; k++) {
            var viewdomin = pronoun[i] + adj[j] + noun[k];
            let li = document.createElement('li');
            li.innerHTML = viewdomin;
            ul.appendChild(li);
        }
    }
}