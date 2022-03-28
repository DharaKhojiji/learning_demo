import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import Counter from "./Components/Counter";
import HoverTwo from "./Components/HoverTwo";
import User from "./Components/User";
import ComponentC from "./Components/ComponentC";
import { UserProvider } from "./Components/userContext";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import axios from "axios";
import ClassCounter from "./HooksComponents/ClassCounter";
import HooksCounter from "./HooksComponents/HooksCounter";
import HooksCounterTwo from "./HooksComponents/HooksCounterTwo";
import HooksCounterThree from "./HooksComponents/HooksCounterThree";
import HooksCounterFour from "./HooksComponents/HooksCounterFour";
import ClassCounterOne from "./HooksComponents/ClassCounterOne";
import HookCounterOne from "./HooksComponents/HookCounterOne";
import HooksMouse from "./HooksComponents/HooksMouse";
import MouseContainer from "./HooksComponents/MouseContainer";
import IntervalHookCounter from "./HooksComponents/IntervaHookCounter";
import DataFetching from "./HooksComponents/DataFetching";

function App(props) {

  
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter>
      <HooksCounter></HooksCounter>
      <HooksCounterTwo></HooksCounterTwo>
      <HooksCounterThree></HooksCounterThree>
      <HooksCounterFour></HooksCounterFour> */}
      {/* <ClassCounterOne></ClassCounterOne>
      <HookCounterOne></HookCounterOne> */}
      {/* <HooksMouse></HooksMouse> */}
      {/* <MouseContainer></MouseContainer>
      <IntervalHookCounter></IntervalHookCounter> */}
      <DataFetching></DataFetching>
      </div>
  );
}

export default App;
