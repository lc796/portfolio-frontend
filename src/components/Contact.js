const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <div className="wrapper">
                <h1>Contact</h1>
                <hr/>
                <form name="contact" method="POST" data-netlify="true">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="age">Email:</label>
                    <input type="text" id="age" name="age"/>
                    <button>Get in touch!</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;