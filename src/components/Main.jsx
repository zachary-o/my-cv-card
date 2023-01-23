import React from "react";

function Main() {
    return (
        <main className="main--section">
            <h1>Zakhar Osetskyi</h1>
            <h3>Frontend Developer</h3>
            <h4 className="main--website"><a href="https://zachary-o.github.io/CSS-CV/">Website</a></h4>
            <div className="buttons">
                <button className="btn--email"><i class="fa-solid fa-envelope"></i> Email</button>
                <button className="btn--linkedin"><i class="fa-brands fa-linkedin"></i> Linkedin</button>
            </div>
            <section className="main--about">
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <br />
                <h2>Interests</h2>
                <p>Food expert. Music scholar. Sci-Fi Reader. Internet fanatic. Entrepreneur. Travel geek. Coffee fanatic.</p>
            </section>
        </main>
    )
}

export default Main;