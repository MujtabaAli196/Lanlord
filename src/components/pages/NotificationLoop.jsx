import React from 'react';

const NotificationLoop = (props) => {
    return (
        <>
            <div className="d-xl-flex py-2 borderbottomparagraph d-block align-items-center">
                <div className={"circleradius " + props.colorupdate}><img className="img-fluid" src={props.receipticon} alt="icon"/></div>
                <div className="ms-3">
                    <h4 className="fontsize16 fontweightbolder mb-2">{props.heading}</h4>
                    <p className="m-0 fontsize14 fontweightregular paragraphtext">{props.paragraphtext}</p>
                </div>
            </div>
        </>
    )
}

export default NotificationLoop;
