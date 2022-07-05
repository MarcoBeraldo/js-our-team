// Utilizzando i dati forniti, creare un array di oggetti 
// per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// ! MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// ! MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

// ! MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// ! BONUS 1:
// Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)

// ! BONUS 2:
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato


// Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
// Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
// Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
// Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
// Scott Estrada |	Developer            |	scott-estrada-developer.jpg
// Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 



// Creo l’array di oggetti con le informazioni fornite.
const teamMembers = [
    {
        fullName: 'Wayne Barnett',
        job: 'Founder & CEO',
        profilePicture: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        fullName: 'Angela Caroll',
        job: 'Chief Editor',
        profilePicture: 'angela-caroll-chief-editor.jpg',
    },
    {
        fullName: 'Walter Gordon',
        job: 'Office Manager',
        profilePicture: 'walter-gordon-office-manager.jpg',
    },
    {
        fullName: 'Angela Lopez',
        job: 'Social Media Manager',
        profilePicture: 'angela-lopez-social-media-manager.jpg',
    },
    {
        fullName: 'Scott Estrada',
        job: 'Developer',
        profilePicture: 'scott-estrada-developer.jpg',
    },
    {
        fullName: 'Barbara Ramos',
        job: 'Graphic Designer',
        profilePicture: 'barbara-ramos-graphic-designer.jpg',
    },
]

const paragraph = document.getElementById("paragraph");
let span;
// Stampo su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < teamMembers.length; i++) {
    console.log(teamMembers[i].fullName, teamMembers[i].job, teamMembers[i].profilePicture)
    // Stampo le stesse informazioni su DOM sottoforma di stringhe

    // creo un paragrafo
    let text = document.createElement('p');
    // inserisco i dati nel paragrafo sopra creato
    text.innerHTML = `${teamMembers[i].fullName} ${teamMembers[i].job} ${teamMembers[i].profilePicture}`
    // inserisco il paragrafo con il testo nel div nell'html
    paragraph.appendChild(text)

}
