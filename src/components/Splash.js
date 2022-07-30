const handleCallToAction = () => {
    console.log("cta")
}

const Splash = () => {
    return (
        <div className="splash">
            <h1>Hi, I'm Luke</h1>
            <p>I am a software engineer from the United Kingdom. My main focus is front-end web development, and I enjoy developing React applications.</p>
            <button className="cta" onClick={handleCallToAction}>Work with me!</button>
        </div>
    );
}

export default Splash;