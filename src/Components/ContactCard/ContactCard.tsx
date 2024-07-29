import './ContactCard.scss'

type Props = {
    children: JSX.Element,
    link: string,
}


function ContactCard({children, link}: Props) {
    return (
        <div className="contactClass">
            <a href={link} target="_blank" rel="noopener noreferrer" >
            {children}
            </a>
        </div>
    );
}

export default ContactCard;