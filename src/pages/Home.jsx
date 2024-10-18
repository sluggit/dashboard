import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MainCharts from "../components/Charts/MainCharts";
import Chart from "../components/Charts/Chart";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardMedia from "../components/Card/CardMedia";
import CardContent from "../components/Card/CardContent";
import CardFooter from "../components/Card/CardFooter";
import OptionButtonDropDown from "../components/OptionButton/OptionDropDown";
import {
  MdBookmark,
  MdDelete,
  MdFavorite,
  MdChatBubble,
  MdIosShare,
} from "react-icons/md";

import Input from "../components/Inputs/Input";
import TextErea from "../components/Inputs/TextErea";
import { LoginHeader } from "../components/Typography/Typography";

const Home = () => {
  
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent:"center",padding: "100px" }}>
      <h1>home component of dashboard</h1>
      <div className="grid">
            <div className="grid-test1">
              <Card>
                <div style={{ padding: "10px" }}>
                  <h2 style={{ margin: "20px", fontWeight: "800" }}>CHARTS </h2>
                  <MainCharts />
                </div>
              </Card>
            </div>
            <div className="grid-test2">
              <Card>
                <div style={{ padding: "10px" }}>
                  <h2 style={{ margin: "20px", fontWeight: "800" }}>
                    PIE CHARTS{" "}
                  </h2>
                  <Chart />
                </div>
              </Card>
            </div>
            <div className="grid-test3">
            <Card >
            <LoginHeader
              title={"Login"}
              subText={"Don’t have an account? "}
              path={"/register"}
            />
            <form action="">
              <Input type="text" placeholder="name" />
              <Input type="text" placeholder="last name" />
              <TextErea placeholder="name" />
              <button>Submit</button>
            </form>
          </Card>
            </div>
            <div className="grid-test4">
              <Link to="/zzzz">
                <Card>
                  <CardHeader
                    title={"this is a title this bla test"}
                    subText={"this is a subtext"}
                    option={true}
                  >
                    <OptionButtonDropDown>
                      <div>Option 1</div>
                      <div>Option 2</div>
                      <div>Option 3</div>
                    </OptionButtonDropDown>
                  </CardHeader>

                  <CardContent>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aut reprehenderit commodi sed sequi molestiae impedit,
                    iusto, aperiam quibusdam molestias dolorum ipsam deserunt
                    nulla cum dolores, quo magnam illum! Laudantium amet
                    exercitationem totam veniam accusantium minima debitis
                    inventore sapiente ipsum nobis?
                  </CardContent>
                  <CardFooter>
                    <span>
                      <MdFavorite size={18} /> Likes:30
                    </span>
                    <span>
                      <MdChatBubble size={18} />
                      comments: 10
                    </span>
                    <span>
                      <MdIosShare size={18} />
                      share
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          </div>

    </div>
  );
};

export default Home;
