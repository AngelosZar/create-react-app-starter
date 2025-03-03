import Layout from '../layouts/Layout';
import { useState } from 'react';
// There will be a contact page which will contain a contact form with the following fields. There must be form validation:

// Full name (Minimum number of characters is 3, required)
// Subject (Minimum number of characters is 3, required)
// Email (Must be a valid email address, required)
// Body (Minimum number of characters is 3, required)
export default function Contact() {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
}
function ContactForm() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = email => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target[0].value;
    const message = e.target[2].value;
    console.log(name, email, message);
    if (name.length < 3) {
      setError('Name must be at least 3 characters');
      return;
    }
    if (!validateEmail(email)) {
      setError('Invalid email');
      return;
    }
    if (message.length < 3) {
      setError('Message must be at least 3 characters');
      return;
    }
    setError('');
    setEmail('');
    e.target.reset();
    console.log(error);
  };
  return (
    <section className="flex flex-col w-full max-w-lg justify-center items-center mx-auto my-12 p-8 bg-white shadow-md rounded-lg gap-8">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-blue-1">Contact Us</h1>
        <p>Send us a message</p>
      </div>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className={error ? 'border-red-500 form-input' : 'form-input'}
          required
          minLength={3 || error}
        />
        {error === 'Name must be at least 3 characters' && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className={error ? 'border-red-500 form-input' : 'form-input'}
          required
          minLength={3}
          onChange={e => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <textarea
          name="message"
          id="message"
          className={error ? 'border-red-500 form-input' : 'form-input'}
          placeholder="Message"
          rows={7}
          required
          minLength={3}
        ></textarea>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <button type="submit" className="btn-primary self-center">
          Send message
        </button>
      </form>
      <div className="flex flex-col gap-3 mt-8">
        <h5>Other contact methods</h5>
        <p>Address: Randomsveien 12 a</p>
        <p>Email: support@onlineshop.no</p>
        <p>Phone: 0047 789654123</p>
      </div>
    </section>
  );
}
