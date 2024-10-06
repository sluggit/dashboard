import React from "react";
import { Link } from "react-router-dom";


import Card from "../components/Card/Card";
import Input from "../components/Inputs/Input";
import TextErea from "../components/Inputs/TextErea";
import { LoginHeader } from "../components/Typography/Typography";





const Home = () => {
  
  return (
    <div style={{width:"100%",height:"100vh",display:"flex",alignItems:"center", padding:"100px"}}>
      <Card>
  <LoginHeader
    title={"Login"}
    subText={"Don’t have an account? "}
    path={"/dashboard"}
  />
  <form action="">
    <Input type="text" placeholder="name" />
    <Input type="text" placeholder="last name" />
    <TextErea
      placeholder="name"
      
          />
          
    <button>Submit</button>
  </form>
</Card>
    </div>
  );
};

export default Home;
