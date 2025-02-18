import Layout from '../layouts/Layout';

// Fetch the list of products on the Homepage and store this as a state.

// On the homepage, loop through the products and display a Product component for each of the values. This Product component should look like a product card. Each Product component will have a View product button which will link to the ProductPage page.

// The homepage should have a lookahead/auto-complete Search bar component. Typing values in the search bar should display products where the title matches the search input. Clicking on an item should take the user to the ProductPage page. Tip: Filter the user input and then display products that match the input.

export default function Home() {
  return (
    <Layout>
      <HeroOnHome />
    </Layout>
  );
}

function HeroOnHome() {
  return (
    <div>
      <h1>I am the hero section </h1>
      <p>i am a text how do i look?</p>
    </div>
  );
}
