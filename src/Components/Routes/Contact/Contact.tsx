
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import ContactCard from '../../ContactCard/ContactCard'
import './Contact.scss'

const data = [
    {
        id: 1,
        name: 'Linkedin',
        img: <FaLinkedin/>,
        link: 'https://www.linkedin.com/in/hernandeznm/'
    },
    {
        id: 2,
        name: 'Email',
        img: <MdOutlineMarkEmailUnread/>,
        link: 'mailto:nmarisolhernandez@example.com?Subject=Hello%20again'
    },
    {
        id: 3,
        name: 'GitHub',
        img: <FaGithub/>,
        link: 'https://github.com/NatiHernandez'
    },

]

function Skills() {
    return (
        <div className="contact">
        {data.map((element) => (
          <ContactCard key={element.id} link={element.link}>
            {element.img}
          </ContactCard>
        ))}
        </div>
    );
}

export default Skills;