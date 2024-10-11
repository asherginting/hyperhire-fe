import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Header, Content, Footer } from '@/app/components/organisms';

export default function Home() {
  return (
    <>
      <div className="background">
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  );
}
