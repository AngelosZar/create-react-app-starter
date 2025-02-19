import Layout from '../layouts/Layout';

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
  return (
    <section>
      <h1>Contact Us</h1>
      <p>Send us a message</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>other contact methods</p>
        <p>address</p>
        <p>email</p>
        <p>phone</p>
      </div>
    </section>
  );
}
