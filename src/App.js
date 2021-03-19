import {Component} from 'react'
import axios from "axios";
import {Switch,Route} from 'react-router-dom'
//COMPONENTS
import Header from "./components/header/Header.component";

//STYLES
import './App.scss';
import Home from "./components/home/Home.component";


class  App extends Component {
    state = {
        categoriesData:[]
    }
    componentDidMount() {
        const result = axios.get('https://ns-shopify.herokuapp.com/api/v1/categories')
        result.then(data => {
            this.setState({categoriesData:data.data})
        })
    }

    render() {
        console.log(this.state.categoriesData)
        const {categoriesData} = this.state
        return(
            <div className="app">
                <Header />
                <main className="app__content scroll-bar">
                    <Switch>
                        <Route exact  path="/">
                            <Home categories={categoriesData}/>
                        </Route>
                        <Route path="/contact">
                            <h1>contact</h1>
                        </Route>
                        <Route path="/about">
                            <h1>about</h1>
                        </Route>
                    </Switch>
                </main>
            </div>
        )
  }
}

export default App;
