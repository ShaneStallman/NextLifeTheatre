import { teamMember } from "./types";

let teamInfo: teamMember[] = [];

const Brayden: teamMember = {
    name: "Brayden Stallman",
    headshot: "",
    bio: "Brayden Stallman is a Philadelphia based director, writer, and producer. Recent work includes …even in another time (Director and Playwright), Tick, Tick… BOOM! (Director) and Medea (Director), and Call Me By Any Other Name…Just as Sweet (Assistant Director, Associate Playwright). Stallman has worked with FringeArts producing the podcast FringeFiles: An Incomplete Oral History and currently produces and co-hosts the podcast Return to Camp Half-Blood. Stallman currently serves as an Apprentice with InterAct Theatre Company in Philadelphia, PA and Organizational Assistant for Starlight’s Youth Theatre in Sunderland, MA. He is a graduate of Muhlenberg College with a BA in Theatre and Media-Communications. His feature length documentary Ars Mordeni or The Art of Dying is available on YouTube. ",
    socials: "brydnstllmn"
};

teamInfo.push(Brayden);

const Amelie: teamMember = {
    name: "Amélie Parczany",
    headshot: "",
    bio: "Amélie Parczany is a dancer, choreographer, performer, and dance-theatre artist. Notable credits include, Sing Happy: A Kander and Ebb Project (choreographer), In Motion (dancer for Earl Mosley, Natalie Gotter), … Even in Another Time (choreographer, original adaptation), Tick, Tick… Boom! (choreographer). She also has many years of experience sharing her love of the arts with younger generations working on various JR. musicals as well as being a dance instructor at Studio One Dance Center in Branford Connecticut. Primarily a student, Amélie is currently studying at Muhlenberg College to receive her BA in Theatre and Dance (education, choreography) with a semester abroad at the Accademia dell’Arte in Arezzo, Italy focusing on European modern styles including Tanztheater, Ausdruckstanz, Contemporary and Ballet techniques.",
    socials: "amelieparczany"
};

teamInfo.push(Amelie);

const Bethany: teamMember = {
    name: "Bethany Qian",
    headshot: "",
    bio: "Bethany Qian is a singer, performer, and collaborative team member. Credits include The Trail to Oregon (Lighting Designer), Fun Home (Music Director), Tick, Tick … BOOM! (Music Director), and Firebringer, A Stone Age Musical (Swing) with aspirations to branch into Stage Management and other Design roles. Other involvements include a handful of choral ensembles, most notably as the Assistant Music Director of Noteworthy Acapella. Qian’s primary focus is as a student at Muhlenberg College working on a BA in Theater with a minor in Business Administration and they dedicate significant time to Diversity, Equity, Inclusion, and Belonging practices and initiatives.",
    socials: "bethany_qian_"
};

teamInfo.push(Bethany);

export {teamInfo};