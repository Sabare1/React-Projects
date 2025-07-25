import reactLogo from './assets/react.svg'

export default function NavBar(){
    return (
        <header>
            <nav>
                <main className="logo-container">
                    <img src={reactLogo} alt="react logo" /><span id="logo-name">ReactFacts</span>
                </main>
                <section className="facts-container">
                    <h2>Fun facts about React</h2>
                    <ul className="react-facts">
                        <li className="fact">Was first released in 2013</li>
                        <li className="fact">Was originally created by John Walke</li>
                        <li className="fact">Has well over 200k stars on GitHub</li>
                        <li className="fact">Is maintained by meta</li>
                        <li className="fact">Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </section>
            </nav>
        </header>
    );
}