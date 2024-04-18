import { jobPost, teamMember, picture, show } from "./types";

let teamInfo: teamMember[] = [];

let jobList: jobPost[] = [];

let pictureArray: picture[] = [];

let roleList: string[] = [];

roleList.push("Directors");

roleList.push("Production Crew");

roleList.push("Administrative Staff");

const Carmilla: picture = {
    src: "carmilla.png",
    alt: "Carmilla",
    caption: "Learn more about our upcoming show!",
    link: "/work"
};

pictureArray.push(Carmilla);

const Merch: picture = {
    src: "VampireRoyalty.png",
    alt: "donations",
    caption: "Donate now to get exclusive swag!",
    link: "/support"
};

pictureArray.push(Merch);

const Dancers: picture = {
    src: "danceExample.png",
    alt: "Dance",
    caption: "Join our cast and crew!",
    link: "/join" 
};

pictureArray.push(Dancers);

const Brayden: teamMember = {
    name: "Brayden Stallman",
    headshot: "Brayden.jpg",
    bio: "Brayden Stallman is a Philadelphia based director, writer, and producer. Recent work includes …even in another time (Director and Playwright), Tick, Tick… BOOM! (Director) and Medea (Director), and Call Me By Any Other Name…Just as Sweet (Assistant Director, Associate Playwright). Stallman has worked with FringeArts producing the podcast FringeFiles: An Incomplete Oral History and currently produces and co-hosts the podcast Return to Camp Half-Blood. Stallman currently serves as an Apprentice with InterAct Theatre Company in Philadelphia, PA and Organizational Assistant for Starlight’s Youth Theatre in Sunderland, MA. He is a graduate of Muhlenberg College with a BA in Theatre and Media-Communications. His feature length documentary Ars Mordeni or The Art of Dying is available on YouTube. ",
    socials: "brydnstllmn",
    role: "Artistic Director",
    roletype: "Directors"
};

teamInfo.push(Brayden);

const Amelie: teamMember = {
    name: "Amélie Parczany",
    headshot: "Amelie(2x3).jpg",
    bio: "Amélie Parczany is a dancer, choreographer, performer, and dance-theatre artist. Notable credits include, Sing Happy: A Kander and Ebb Project (choreographer), In Motion (dancer for Earl Mosley, Natalie Gotter), … Even in Another Time (choreographer, original adaptation), Tick, Tick… Boom! (choreographer). She also has many years of experience sharing her love of the arts with younger generations working on various JR. musicals as well as being a dance instructor at Studio One Dance Center in Branford Connecticut. Primarily a student, Amélie is currently studying at Muhlenberg College to receive her BA in Theatre and Dance (education, choreography) with a semester abroad at the Accademia dell’Arte in Arezzo, Italy focusing on European modern styles including Tanztheater, Ausdruckstanz, Contemporary and Ballet techniques.",
    socials: "amelieparczany",
    role: "Choreographer",
    roletype: "Production Crew"
};

teamInfo.push(Amelie);

const Bethany: teamMember = {
    name: "Bethany Qian",
    headshot: "Bethany(2x3).jpeg",
    bio: "Bethany Qian is a singer, performer, and collaborative team member. Credits include The Trail to Oregon (Lighting Designer), Fun Home (Music Director), Tick, Tick … BOOM! (Music Director), and Firebringer, A Stone Age Musical (Swing) with aspirations to branch into Stage Management and other Design roles. Other involvements include a handful of choral ensembles, most notably as the Assistant Music Director of Noteworthy Acapella. Qian’s primary focus is as a student at Muhlenberg College working on a BA in Theater with a minor in Business Administration and they dedicate significant time to Diversity, Equity, Inclusion, and Belonging practices and initiatives.",
    socials: "bethany_qian_",
    role: "Sound and Lighting Designer",
    roletype: "Production Crew"
};

teamInfo.push(Bethany);

const Gretchen: teamMember = {
    name: "Gretchen D'Amato",
    headshot: "Gretchen.jpg",
    bio: "Gretchen D’Amato is a stage manager and scenic artist based in Connecticut. Recent stage management credits include A View From the Bridge (Long Wharf Theater, ASM/Deck Sub), …even in another time (Muhlenberg Theatre+Dance, PSM), Tick, Tick… BOOM!  (Muhlenberg Theatre Association, SM), and Too Much Light… (LATI at Edinburgh Fringe, SM). Gretchen currently works as Front of House Manager at both the Bushnell Performing Arts Center in Hartford, CT and the Shubert Theater in New Haven, CT. Gretchen became a certified COVID Safety Officer in 2022, serving that role for the Hartford Stage Company's production of Kiss my Aztec. They are a graduate of Muhlenberg College with a B.A. in Theatre with a concentration in stage management.",
    socials: "gretchen.damato",
    role: "Technical Director",
    roletype: "Directors"
}

teamInfo.push(Gretchen);

let contactInfo = {email: "nextlifetheatre@gmail.com", phone: "(999)999-9999", mailing: {name: "Next Life Theatre Co.", city: "Philidelphia", state: "PA", zip: "99999", address: "101 Main St.", poBox: "PO Box 999"}}

const CarmillaAudition: jobPost = {
    name: "Carmilla",
    image: "carmilla.png",
    roles: ["Laura: 20 to 25 years old, all ethnicities woman, transgender woman, nonbinary. A shy woman who is drawn out of her shell by her lover to become the kind of person who can command a room. Female Presenting, Any Ethnicity. Light intimacy (Vampire Bites).",
     "Carmilla: 20 to 30 years old, all ethnicities woman, transgender woman, nonbinary. An alluring, mysterious, and ageless vampire that falls in love with Laura. Any Ethnicity. Light intimacy (Vampire Bites).",
     "Father: 25 to 50 years old, man, transgender man, nonbinary. Male presenting. Laura’s hyper religious father whose only care in the world is to protect his daughter from the demons that haunt her.",
     "Background Dancers: 20 to 36 years old, any ethnicity, any gender. Club dancers and visual storytellers playing multiple roles throughout the story. Selective lines for some, majority non-speaking."],
    description: "Next Life Theatre Company is seeking a diverse cast of non-equity dancer/actors for the new dance-theater piece Carmilla: A Dance with Death.Carmilla will be produced as a part of the 2024 Philadelphia Fringe Festival: September 27-29, 2024.",
    form: "https://actorsaccess.com/projects/?view=breakdowns&breakdown=816622&region=12"
}

jobList.push(CarmillaAudition);

const carmilla: show = {
  name: "Carmilla",
  director: "Brayden Stallman",
  choreo: "Amélie Parczany",
  inspiration: "Carmilla by Joseph Sheridan le Fanu",
  image: "carmilla.png",
  location: "Philidephia Fringe Festival",
  date: "Date TBD",
}

export {contactInfo, teamInfo, jobList, pictureArray, carmilla, roleList};