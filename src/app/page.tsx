
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow, FaMapMarker } from "react-icons/fa";
import { ContactNetwork, ContactNetworks, Photo, Profile, ProfileLocation, ProfileName, ProfileTitle } from "./styled";

export default function Home() {
  return <>
    <section className="hero">
      <div className="content">
        <Photo>
          <Image 
            style={{
              backgroundColor: 'white'
            }}
            height={256}
            width={256}
            src="/me_lowres.png"
            alt="me" 
          />
        </Photo>
        <Profile>
          <ProfileName>Marcos Rodriguez Martinez</ProfileName>
          <ProfileTitle>Fullstack Software Engineer @ Sngular</ProfileTitle>
          <Link href="https://goo.gl/maps/MHJYC6wcVQb2NDjp7" target="_blank"><ProfileLocation><FaMapMarker /><span>Xixón, Asturias</span></ProfileLocation></Link>
          <ContactNetworks>
            <Link href="mailto:msucaro@gmail.com" target="_blank"><ContactNetwork><FaEnvelope /><span>msucaro@gmail.com</span></ContactNetwork></Link>
            <Link href="https://www.linkedin.com/in/marcosrz/" target="_blank"><ContactNetwork><FaLinkedin /><span>LinkedIn</span></ContactNetwork></Link>
            <Link href="https://github.com/marcosrz/" target="_blank"><ContactNetwork><FaGithub /><span>GitHub</span></ContactNetwork></Link>
          </ContactNetworks>
        </Profile>
      </div>
    </section>

    <section className="bio">
      <h2>🌲 Here&apos;s my <strong>Bio</strong></h2>
      <div className="excerpt">
        <p>My name is Marcos and I&apos;m a spanish guy that really likes to learn new technologies. I spent (and still do) a good part of my free time learning almost everything from electronices, to computer since, passing through pure physics and maths. I&apos;ve obtained a Degree in Software Engineering at University of Oviedo in 2015. Since then I&apos;ve been going through all the stages of this awesome sector and lots of different technologies.</p>
        <p>I&apos;m not a robot 🤖 though. I also like to play video games sometimes and I played electric guitar for the last 20 years or so. I really enjoy Rock and Metal music but without forgetting about the rest of the styles.</p>
        <p>Have a look to <Link href="/blog"> my blog!</Link>. I sometimes publish interesting things about me and technology there</p>
      </div>
    </section>
    <section className="experience-section professional">
      <h2>📄 This is my <strong>Professional background</strong></h2>
      <div className="header">
        <h2>Professional Experience</h2>
        <p className="description">That&apos;s what I&apos;ve been doing for the last 10+ years</p>
      </div>
      <ul className="experience-list">
        <li className="experience-item featured">
          <div className="experience-content">
            <div className="title">
              <span className="label">2021 - Present</span>
              <span className="label">Fullstack Tech Lead</span>
              <span className="label">Sngular</span>
            </div>
            <div className="tags">
              <span className="tag"><FaClock color="var(--variant)"/>2 Years</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Remote</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2020 - 2021</span>
              <span className="label">Lord of Software</span>
              <span className="label">Zapiens</span>
            </div>
            <div className="tags">
              <span className="tag"><FaClock color="var(--variant)" />1 Year</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Remote</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2019 - 2020</span>
              <span className="label">Senior Fullstack Engineer</span>
              <span className="label">Minsait</span>
            </div>
            <div className="tags">
              <span className="tag"><FaClock color="var(--variant)" />1 Year</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Localized + Remote</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2018 - 2019</span>
              <span className="label">Senior Fullstack Engineer</span>
              <span className="label">CLARCAT</span>
            </div>
            <div className="tags">
              <span className="tag"><FaClock color="var(--variant)" />1 Year 8 Months</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Localized</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2017 - 2018</span>
              <span className="label">Senior Fullstack Javascript Engineer</span>
              <span className="label">BinPar Digital Ignition</span>
            </div>
            <div className="tags">
              <span className="tag"><FaClock color="var(--variant)" />1 Year</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Localized</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Madrid</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2015 - 2017</span>
              <span className="label">Fullstack Software Engineer</span>
              <span className="label">iBakari Desarrollos Informáticos</span>
            </div>
            <div className="tags">
              <span className="tag"><FaClock color="var(--variant)" />2 Year 8 Months</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Localized</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <h2>🎓 Here's my <strong>Academic background</strong></h2>

    <section className="experience-section internship">
      <div className="header">
        <h2>Internships</h2>
        <p className="description">I had some internship periods while studying</p>
      </div>
      <ul className="experience-list">
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2014</span>
              <span className="label">Fullstack Software Engineer</span>
              <span className="label">Adele Robots Inc.</span>
            </div>
            <div className="tags">
            <span className="tag"><FaClock color="var(--variant)" />4 months</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Localized</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2014</span>
              <span className="label">Java FX and Javascript Developer</span>
              <span className="label">Seresco Soluciones</span>
            </div>
            <div className="tags">
            <span className="tag"><FaClock color="var(--variant)" />4 months</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Localized</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2010</span>
              <span className="label">ASPX Developer</span>
              <span className="label">ASAC Comunicaciones</span>
            </div>
            <div className="tags">
            <span className="tag"><FaClock color="var(--variant)" />4 Months</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Localized</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section className="experience-section academic">
      <div className="header">
        <h2>Academic</h2>
        <p className="description">Also went to university</p>
      </div>
      <ul className="experience-list">
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2010 - 2015</span>
              <span className="label">Degree in Software Engineering</span>
              <span className="label">Universidad de Oviedo</span>
              </div>
            <div className="tags">
            <span className="tag"><FaClock color="var(--variant)" />5 Years</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Localized</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
        <li className="experience-item">
          <div className="experience-content">
            <div className="title">
              <span className="label">2008 - 2010</span>
              <span className="label">Software Deveplopment - Senior Technician</span>
              <span className="label">Universidad de Oviedo</span>
            </div>
            <div className="tags">
            <span className="tag"><FaClock color="var(--variant)" />2 Years</span>
              <span className="tag"><FaLocationArrow color="var(--variant)" />Localized</span>
              <span className="tag"><FaMapMarker color="var(--variant)" />Asturias</span>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi laboriosam blanditiis debitis quia assumenda voluptate maxime atque nihil! Quibusdam recusandae, eligendi repudiandae modi exercitationem minima delectus veritatis natus quos.</p>
              <p>Illo repudiandae minima eum est itaque, quae ab nulla sed eligendi eveniet ut dolorem perferendis velit dignissimos delectus omnis temporibus? Delectus saepe, odio aut veritatis nemo quis ducimus incidunt! Unde!</p>
              <p>Expedita incidunt soluta temporibus magni excepturi dolorum minima perferendis dolorem fuga ducimus, facilis culpa amet numquam repudiandae recusandae sunt tempore quis, debitis maxime nam, molestiae magnam! Excepturi amet neque provident.</p>
              <p>Itaque, placeat blanditiis quia, amet inventore sed iste nostrum dolorem, accusantium soluta eum vitae illum quam consequuntur debitis nihil reiciendis! Aliquam ducimus rerum suscipit aliquid voluptate perspiciatis fugiat quo rem?</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </>;
}



