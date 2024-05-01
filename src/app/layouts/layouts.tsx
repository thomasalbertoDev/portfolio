import Navbar from '@/app/fragments/navbar';
import Footer from '@/app/fragments/footer';

interface Propstype {
  children: React.ReactNode;
}

const Layouts = (props: Propstype) => {
  const { children } = props;
  return (
    <div className="py-6">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layouts;
