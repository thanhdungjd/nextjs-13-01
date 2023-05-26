export default function About({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>about navbar</nav>
      <main>{children}</main>
    </>
  );
}
