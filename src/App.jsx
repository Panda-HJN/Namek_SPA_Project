import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Button,Card } from 'antd';
import './style.scss'

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/"> <Button type="primary">Home</Button></Link></li>
                <br/>
                <li><Link to="/about"><Button type="primary">About</Button></Link></li>
                {/*<li><Link to="/topics">Topics</Link></li>*/}
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            {/*<Route path="/topics" component={Topics}/>*/}
        </div>
    </Router>
)

const Home = () => (
    <div>
        <Card title="Home"  style={{ width: 300 }}>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
        </Card>
    </div>
)

const About = () => (
    <div>
        <h2>AboutAboutAboutAbout</h2>
    </div>
)


// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>
//                     Rendering with React
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>
//                     Components
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>
//                     Props v. State
//                 </Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.url}/:topicId`} component={Topic}/>
//         <Route exact path={match.url} render={() => (
//             <h3>Please select a topic.</h3>
//         )}/>
//     </div>
// )
//
// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// )

export default App
