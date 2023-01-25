import  {Component} from "react";

const TITLES = [
    'a Softeare engineer',
    'a music lover',
    'a enthustian learner',
    'a tour seeker'
];



class Title extends Component {
    
    state = {titleIndex:0};

    componentDidMount(){
        this.animateTitle();
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    animateTitle(){
        this.intervalId = setInterval(()=>{
            let titleIndex = (this.state.titleIndex+1) % TITLES.length;
            this.setState({titleIndex});
        },4000);
    }
    
    render(){
        const titleText = TITLES[this.state.titleIndex];
        return(titleText);
    }
}

export default Title;