import emailjs from "@emailjs/browser";
import { useRef, SyntheticEvent } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {

    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();

        emailjs.sendForm('service_qnbzdph', 'template_vynvtxh', form.current as HTMLFormElement, 'aYZSl6EbX56GwP8tD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
            <header>
                <nav>
                    <li>
                        <ul><NavLink to="/">Home</NavLink></ul>
                        <ul><NavLink to="/gallery">Gallery</NavLink></ul>
                    </li>                
                    <div id="mail-form">
                        <div id="mail-bottun">
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <form id="contact-form" ref={form} onSubmit={handleSubmit}>
                            <input type="hidden" name="contact_number" />
                            <label>Name</label>
                            <br/>
                            <input type="text" id="user_name" name="user_name"/>
                            <label>Email</label>
                            <br/>
                            <input type="email" id="user_email" name="user_email"/>
                            <label>Message</label>
                            <br/>
                            <textarea id="message" name="message"></textarea>
                            <input type="submit" id="form-submit" value="Send"/>
                        </form>
                    </div>
                </nav>

            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}