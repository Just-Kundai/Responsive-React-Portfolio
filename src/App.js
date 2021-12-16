import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";


//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ProjectsPage from './components/ProjectsPage';
import MySkillsPage from './components/MySkillsPage';

function App() {
  return <div>

  <GlobalStyle />

     <ThemeProvider theme={ lightTheme }>
       <Switch>
         <Route exact path="/" component={Main}/>
         <Route exact path="/about" component={AboutPage}/>
         <Route exact path="/blog" component={BlogPage}/>
         <Route exact path="/projects" component={ProjectsPage}/>
         <Route exact path="/skills" component={MySkillsPage}/>
       </Switch>
     </ThemeProvider>






    </div>

}

export default App
