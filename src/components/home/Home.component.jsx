import {Component} from 'react';
import {Link} from "react-router-dom";
//STYLES
import './home.style.scss';

const CategoriseLink = (props) => {
    const {url,title,imgUrl} = props

    return (
        <Link to={url} >
        <div  className="home__categories-link">
            <img src={imgUrl} alt={title}/>
            <span>{title} <br/> SHOP NOW</span>
        </div>
        </Link>

    )
}

class Home extends Component{

    render() {
        const {categories} = this.props
        return(
            <nav className="home">
                <ul className="home__links">
                    {
                        categories.map(({_id,id,title,routeName,imageUrl})=>(
                            <li>
                                <CategoriseLink
                                    key={_id}
                                    url={'/'+routeName}
                                    imgUrl={imageUrl}
                                    title={title}
                                />
                            </li>
                        ))
                    }
                </ul>
            </nav>
        )
    }
}

export default Home;