const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <div className="wrapper">
                <h1>Contact</h1>
                <hr/>
                <form name="contact-form" method="POST" data-netlify="true">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email"/>
                    <button>Get in touch!</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;