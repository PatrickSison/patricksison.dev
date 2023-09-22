import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

export default function Socials() {
  return (
    <div className="space-x-8 text-4xl text-center">
      <a href="https://github.com/PatrickSison">
        <FontAwesomeIcon icon={faGithub} title="Github" />
      </a>
      <a href="https://www.linkedin.com/in/patricksison/">
        <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
      </a>
      <a href="https://discord.gg/48fWadBRjv">
        <FontAwesomeIcon icon={faDiscord} title="Discord" />
      </a>
    </div>
  );
}
