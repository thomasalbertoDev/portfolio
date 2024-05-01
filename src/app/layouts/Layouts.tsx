import Navbar from '@/app/fragments/Navbar';

interface Propstype {
  children: React.ReactNode;
}

const Layouts = (props: Propstype) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layouts;
