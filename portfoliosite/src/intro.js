import React from 'react';
//import intro from './CSS/intro.css';
import me from './Images/me.PNG';
import intro from './CSS/intro.module.css';

class Self extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Cho chong woon',
            age: '24',
            country: 'South Korea',
            phone: '02) 010-3591-8251',
            university: 'Korean Bible University',
            interest: 'IOS, DataScience, Web',
            skill: 'SwiftUI, React, Pandas',
            email: 'nurunsagwa@gmail.com',
        };
    }

    render() {
        return (
            <div>
                <p style={{fontSize: '130px', height: '300px'}}> Welcome! </p>

                <hr></hr>

                <div className={intro.my_intro}>
                    <img src={me} alt='Me!'></img>

                    Name : {this.state.name} <br/>
                    Age : {this.state.age} <br/>
                    Country: {this.state.country} <br/>
                    Phone: {this.state.country} <br/>
                    Uni: {this.state.university} <br/>
                    
                </div>

                <hr></hr>

                <p style={{height: '600px'}}></p>
            </div>
        )
    }
}

export default Self;
