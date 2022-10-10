const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <div className="wrapper">
                <h1>Contact</h1>
                <hr/>
                <form name="contact" method="POST">
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name"/>
                    </p>
                    <p>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email"/>
                    </p>
                    <p>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message"></textarea>
                    </p>
                    <p>
                        <button type="submit">Get in touch!</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Contact;