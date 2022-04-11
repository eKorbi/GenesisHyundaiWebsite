// ekorbi
import React from "react";
export default function Info(props) {
    return (
    <div className="full">
    <div className="close1">
                {props.close}
            </div>
    <div className="appi">
    <div className="header">
        <img className="img--header" alt="sugo" src={props.img}
            width="300px" height="200px"></img>
                <h2 className="names">{props.name}</h2>
                <h4 className="prof">{ props.position}</h4>
                <p className="web">{props.company}</p>
    </div>
    <div className="btn">
                    <button className="email--btn">Email
                    </button>
            <button className="link--btn">LinkedIn</button>
    </div>
    <div className="about">
        <h3 className="main--head">About</h3>
            <p>Mr. Chang has accomplished remarkable achievements leading the Korea Business Division and Genesis Division. He also led People & Business Operation Support Division’s efforts in the innovation of the organization and culture of Hyundai Motor Company.</p>
            <h3 className="main--head">Interests</h3>
            <p>In 2025, all the new vehicles will all be purely electric through a dual electrification strategy involving fuel cell and battery EVs. We’re also aiming to be #carbonneutral by 2035 by achieving 100 percent #zeroemission by 2030 and building an eight-model EV lineup.</p>
    </div>         
    </div>
    </div>
    )
}
