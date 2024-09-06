// pages/news/[id].js
import IndividualArticle from '../../components/News/components/IndividualArticle/IndividualArticle';

// Fetch data server-side for the individual article
export async function getServerSideProps(context) {
  const { id } = context.params;

  // Fetch article data based on the ID (replace with your data fetching logic)
  try {
    const response = await fetch(`https://api.example.com/articles/${id}`); // Replace with your API endpoint
    const article = await response.json();

    // If no article is found, return a 404 page
    if (!article) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article, // Pass the article data as props
      },
    };
  } catch (error) {
    console.error('Error fetching article data:', error);

    // Handle error case by rendering a fallback page or error message
    return {
      props: {
        article: null,
        error: 'Failed to load article',
      },
    };
  }
}

export default function ArticlePage({ article, error }) {
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!article) {
    return <p>Loading...</p>;
  }

  // Pass the article data to the IndividualArticle component
  return <IndividualArticle article={article} />;
}
