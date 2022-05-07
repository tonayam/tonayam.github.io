# tonayam.github.io

/_ MEDIA QUERY FOR MOBILE PHONES (MAX-425px) _/
@media screen and (max-width: 330px) {
/_ SECTION ONE STYLES (MOBILE SCREENS) _/
.one .left {
padding: 4.5rem 1rem 0 0;
/_ height: inherit; _/
}

.services .text p {
opacity: 0.6;
}
.one .right h3,
.one .left h2 {
text-align: center;
}
.one .right h3 {
padding: 2rem;
}
.more {
display: flex;
justify-content: center;
padding-bottom: 10%;
}
.one .right {
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2rem;
padding-top: 1rem;
}
.one .right input {
height: 42px;
border-radius: 5px;
margin: 0.2rem 0;
}

/_ SECTION TWO STYLES (MOBILE SCREENS) _/
.two .left {
padding: 0;
align-items: center;
margin-top: 4rem;
}
.two .left h2 {
text-align: center;
}
.two .left .body-1 {
padding-right: 0;
}
.two .right {
padding-top: 20%;
}

/_ SECTION THREE STYLES (MOBILE SCREENS) _/
.three {
padding-top: 15%;
padding-bottom: 15%;
}
.three .icons {
grid-template-columns: repeat(2, 1fr);
}
.three .icon {
height: 120px;
}
.three .icon img {
height: 30%;
}
.three .wheel {
background-color: #ff6433;
}

/_ SECTION FOUR STYLES (MOBILE SCREENS) _/
.orange {
width: 70%;
height: 40%;
position: absolute;
background: #ff6433;
left: 20%;
color: white;
padding: 0 1rem;
}
.orange h3 {
margin-top: 0rem;
padding-top: 1rem;
}

/_ SECTION FIVE STYLES (MOBILE SCREENS) _/
.five {
padding-top: 15%;
padding-bottom: 15%;
}
.five h3 {
padding-top: 10%;
}
.five .brands {
grid-template-columns: repeat(2, 1fr);
}

/_ SECTION SIX STYLES (MOBILE SCREENS) _/
.six {
padding-top: 15%;
padding-bottom: 15%;
}
.six h3 {
padding: 0rem;
padding-top: 10%;
}
.six .cards {
width: 80%;
margin: 0 auto;
display: block;
align-items: initial;
}
.cards .card {
width: 100%;
margin: 0;
padding: 0.5rem;
}
.cards .card-2 {
display: none;
}
.indicators {
width: 75%;
position: relative;
left: 12%;
}
.indicators .slider {
width: 100%;
display: flex;
justify-content: center;
padding-left: 0rem;
}
.indicators .arrows {
display: none;
}
/_ SECTION SEVEN STYLES (MOBILE SCREENS) _/
.seven {
padding-top: 15%;
padding-bottom: 15%;
}
.seven h3 {
padding-top: 10%;
}
.ques {
display: flex;
justify-content: space-between;
align-items: center;
}
.questions .show-text {
font-size: 0.8rem;
height: 170px;
padding-bottom: 0rem;
}
.show-text .answer {
padding-right: 0rem;
}
.sign {
width: 20%;
height: 50%;
}

/_ FOOTER SEVEN STYLES (MOBILE SCREENS) _/
.content h3 {
padding: 5% 0;
}
.content .icons {
padding-left: 0;
}
footer .bottom {
width: 100%;
flex-wrap: wrap;
justify-content: center;
padding: 0.5rem;
}
footer ul {
width: 100%;
margin: 2rem 0;
}
footer li {
width: 100%;
font-size: 11px;
transition: transform 0.3s linear;
}
}
