import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaWhatsapp, FaTwitter, FaDiscord } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {

  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()

  const handleGoogle = ()=>{
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }

  return (
    <div>
      <ButtonGroup vertical>
        <button onClick={handleGoogle} type="button" className=" btn btn-outline-primary">
          <FcGoogle /> Login with Google
        </button>
        <button type="button" className="my-2 btn btn-outline-dark">
          <AiFillGithub /> Login with Github
        </button>
      </ButtonGroup>

      <div>
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaYoutube/> Youtube</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp/> WhatsApp</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaDiscord/> Discord</ListGroup.Item>
          <ListGroup.Item className="mb-2">Terms & Condition</ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
