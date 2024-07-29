import './Card.scss';

type Props = {
    name: string;
    image: string,
    description: string,
    link: string,
}

function Card({name, image, description, link }:Props) {
    return (
        <section className="sectionClass">
            <h2>{name}</h2>
            {image && <img className="picture" src={image} alt="" /> }
            <text className="test">{description}</text>
            <a href={link}></a>
        </section>
    );
}

export default Card;