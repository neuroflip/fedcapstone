
interface MainProps {
  children: React.JSX.Element
}

function Main({ children }: MainProps) {
  return <main>
    { children }
  </main>
}

export default Main