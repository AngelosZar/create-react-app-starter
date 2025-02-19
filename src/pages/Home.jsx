import Layout from '../layouts/Layout';

// Fetch the list of products on the Homepage and store this as a state.

// On the homepage, loop through the products and display a Product component for each of the values. This Product component should look like a product card. Each Product component will have a View product button which will link to the ProductPage page.

// The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input. Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input.

export default function Home() {
  return (
    <Layout>
      <HeroOnHome />
      <ProductsFeed />
      <QuoteSection />
      <TestimonialSection />
    </Layout>
  );
}

function HeroOnHome() {
  return (
    <div>
      <h1>hero</h1>
      <img
        src="https://images.unsplash.com/photo-1469105692624-86ae1dbf4c23?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="a man on a mountain"
      />
      <p>a message to placed fixed on image</p>
    </div>
  );
}

function ProductsFeed() {
  return (
    // map the products here // return <ProductCard />
    <div>
      <ProductCard />
    </div>
  );
}
function ProductCard() {
  return (
    // grid layout ca 12 cards after use pagination
    <div>
      {' '}
      <div className="max-w-sm flex flex-row">
        <img
          src="https://images.unsplash.com/photo-1469105692624-86ae1dbf4c23?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="a man on a mountain"
        />
        <div>
          {' '}
          <h2>Product title</h2>
          <p>Product description</p>
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div>
      <h2>Quote</h2>
      <img
        src="https://images.unsplash.com/photo-1469105692624-86ae1dbf4c23?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        srcset=""
      />
    </div>
  );
}

function TestimonialSection() {
  return (
    <div>
      <h2>Testimonials</h2>
      <div>
        <img src="" alt="some person" />
        <p>Testimonial</p>
      </div>
    </div>
  );
}
