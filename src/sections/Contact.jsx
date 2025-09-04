import { useRef, useState } from 'react'
import axios from "axios";

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        try {
            const res = await axios.post("/api/sendEmail", {
                from_name: form.name,
                from_email: form.email,
                message: form.message
            });

            if (res.status === 200) {
                alert("Your message has been sent!");
                setForm({name: "", email: "", message: ""})
            }
            
        } catch (error) {
            console.error(error) 
            alert("Something went wrong, please try again");
        } finally {
            setLoading(false);
        }
    }

  return (
    <section className='c-space my-20' id='contact'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
                <div className="contact-container">
                <h3 className='head-text'>Let's Connect</h3>
                <p className='text-lg text-white-600 mt-3'>Whether you're looking to build a new website, improve your existing platform, or bring a unique project to Life, I'm here to help!</p>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                        <input type="text" name='name' value={form.name} onChange={handleChange} required className='field-input' placeholder='Enter your full name' />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input type="email" name='email' value={form.email} onChange={handleChange} required className='field-input' placeholder='Enter your email address' />
                    </label>

                    <label className='space-y-3'>
                        <span className='field-label'>Your Message</span>
                        <textarea name='message' value={form.message} onChange={handleChange} required rows={5} className='field-input' placeholder="Hi, I'm interested in..." />
                    </label>

                    <button type='submit' disabled={loading} className='field-btn'>{loading ? "Sending...": "Send Message"} 
                        {!loading && (
                        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                    )}
                    </button>
                </form>
            </div>
        </div>


    </section>
  )
}

export default Contact
