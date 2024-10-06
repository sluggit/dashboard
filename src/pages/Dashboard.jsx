import React, { useEffect } from "react";
import "./Dashboard.css";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Setting from "../components/Settings/Setting";
import MainCharts from "../components/Charts/MainCharts";
import Chart from "../components/Charts/Chart";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardMedia from "../components/Card/CardMedia";
import CardContent from "../components/Card/CardContent";
import CardFooter from "../components/Card/CardFooter";
import OptionButtonDropDown from "../components/OptionButton/OptionDropDown";
import { Link } from "react-router-dom";
import {
  MdBookmark,
  MdDelete,
  MdFavorite,
  MdChatBubble,
  MdIosShare,
} from "react-icons/md";
import Loading from "../components/Loading/Loading";
import Input from "../components/Inputs/Input";
import TextErea from "../components/Inputs/TextErea";
import { LoginHeader } from "../components/Typography/Typography";

const Dashboard = ({ toggleMode, toggleFullScreen,loading, setLoading }) => {
  const [expand, setExpand] = React.useState(true);
  const [setting, setSetting] = React.useState(false);
// -------------- TOGGLE SIDE BAR ----------------
  const toggleSideBar = () => {
    const newExpandState = !expand;
    setExpand(newExpandState);
    localStorage.setItem("expand", newExpandState);
  };
  //--------------------------------------------------
  const toggleSetting = () => {
    setSetting(!setting);
  };
  //-----------------TOGGLE SETTING BAR ----------------
  useEffect(() => {
    const isExpanded = localStorage.getItem("expand") === "true";
    setExpand(isExpanded);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth >= 768) {
        const isExpanded = localStorage.getItem("expand") === "true";
        setExpand(isExpanded);
      } else {
        setExpand(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  
  return (
    <div className="dashboard-container">
      <SideBar
        expand={expand}
        setExpand={setExpand}
        toggleSideBar={toggleSideBar}
      />
      <Setting setting={setting} toggleSetting={toggleSetting}/>
      <section className="dashboard-main-frame">
        <Header
          toggleMode={toggleMode}
          toggleFullScreen={toggleFullScreen}
          expand={expand}
          setExpand={setExpand}
          toggleSetting={toggleSetting}
        />

        <div className={`dashboard-margin ${expand ? "active" : ""}`}>
        <div className="grid">
          <Card>
            <div style={{padding:"10px"}}>
            <h2 style={{margin:"20px", fontWeight:"800"}}>CHARTS </h2>
            <MainCharts />
        </div>
          </Card>
          <Card>
            <div style={{padding:"10px"}}>
            <h2 style={{margin:"20px", fontWeight:"800"}}>PIE CHARTS </h2>
            <Chart />
        </div>
          </Card>
        <Link to="/zzzz">
            <Card>
              <CardHeader
                title={"this is a title"}
                subText={"this is a subtext"}
                image={"https://i.pravatar.cc/150?img=20"}
                option={true}
              >
                <OptionButtonDropDown>
                  <div>Option 1</div>
                  <div>Option 2</div>
                  <div>Option 3</div>
                </OptionButtonDropDown>
              </CardHeader>

              <CardContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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

          <Card>
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
          <Link to="/zzzz">
            <Card>
              <CardHeader
                title={"this is a title"}
                subText={"this is a subtext"}
                image={"https://i.pravatar.cc/150?img=20"}
                option={true}
              >
                <OptionButtonDropDown>
                  <div>Option 1</div>
                  <div>Option 2</div>
                  <div>Option 3</div>
                </OptionButtonDropDown>
              </CardHeader>

              <CardContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                reprehenderit commodi sed sequi molestiae impedit, iusto,
                aperiam quibusdam molestias dolorum ipsam deserunt nulla cum
                dolores, quo magnam illum! Laudantium amet exercitationem totam
                veniam accusantium minima debitis inventore sapiente ipsum
                nobis?
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

          <Card>
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
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
