import { useParams, usePathname } from 'next/navigation';
import IndividualArticle from '@/src/app/news/components/IndividualArticle';

export default function NewsArticlePage() {
    const params = useParams();
    const pathname = usePathname();
  
    // You'll need to fetch the article data here using getStaticProps or getServerSideProps
    // based on the 'id' in params. For now, let's assume you have the 'post' data available
    const post = { 
      // ... your article data 
    };
  
    return <IndividualArticle post={post} pathname={pathname} />;
  }