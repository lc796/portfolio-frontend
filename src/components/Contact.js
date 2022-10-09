const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <div className="wrapper">
                <h1>Contact</h1>
                <hr/>
                <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                    <div className="form-container">
                        <div className="form-section">
                            <label htmlFor="name">Name:</label><br/>
                            <input type="text" id="name" name="name"/>
                        </div>
                        <div className="form-section">
                            <label htmlFor="age">Email:</label><br/>
                            <input type="text" id="age" name="age"/>
                        </div>
                        <div className="form-section">
                            <button>Get in touch!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;