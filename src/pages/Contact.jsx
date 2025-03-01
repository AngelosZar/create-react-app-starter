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
    <section className="flex flex-col w-full max-w-lg justify-center items-center mx-auto my-12 p-8 bg-white shadow-md rounded-lg gap-8">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-blue-1">Contact Us</h1>
        <p>Send us a message</p>
      </div>
      <form className="flex flex-col w-full">
        <input type="text" placeholder="Name" className="form-input" />
        <input type="text" placeholder="Email" className="form-input" />
        <textarea
          name="message"
          id="message"
          className="form-input"
          placeholder="Message"
          rows={7}
        ></textarea>

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
