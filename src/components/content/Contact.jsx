import './Contact.css'

import React from 'react'

export default function Contact() {
  return (
    <section className="contact">
        

        <form className="contact-form" action="https://formsubmit.io/send/d7e574ec-8e96-4097-896a-be431d3255fb" method="POST">
            <h2>Contact me</h2>
            <input type="hidden" name="_subject" value="New submission from portfolio site!" />
        
            <input name="name" type="text" id="name" placeholder="Name" required />
            <input name="email" type="email" id="email" placeholder="Email Address" required />
            <textarea name="comment" id="comment" rows="3" placeholder="Leave your message here" required></textarea>
                        
            <input name="_formsubmit_id" type="text" style={{"display": "none"}} />
        
            <input id="contact__submit" value="Submit" type="submit" />
        
            <input type="text" name="_honey" style={{"display": "none"}} />
        </form>
        
    </section>
  )
}
