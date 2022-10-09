const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <div className="wrapper">
                <h1>Contact</h1>
                <hr/>
                <form name="contact" method="POST" onSubmit="submit" netlify>
                    <div className="form-container">
                        <p className="form-section">
                            <label htmlFor="name">Name:</label><br/>
                            <input type="text" id="name" name="name"/>
                        </p>
                        <p className="form-section">
                            <label htmlFor="age">Email:</label><br/>
                            <input type="text" id="age" name="age"/>
                        </p>
                        <p className="form-section">
                            <button>Get in touch!</button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;