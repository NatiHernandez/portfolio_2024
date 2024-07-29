import './Home.scss'

type Props = {
    readonly text: string;
}

function Home({text} : Props) {
    return (
        <h1 className="mainClass">
        {text.split('').map((char, index) => (
          <span key={index} className="colorful-letter spanColor">
            {char}
          </span>
        ))}
      </h1>
    );
}

export default Home;