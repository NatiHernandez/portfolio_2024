import './CardSkills.scss';

type Props = {
    name: string;
    children: JSX.Element,
}

function CardSkills({name, children }:Props) {
    return (
        <section className="skillsClass">
            <h2>{name}</h2>
            {children}
        </section>
    );
}

export default CardSkills;