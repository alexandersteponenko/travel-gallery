import React from 'react'; 
import './GalleryCard.css';

function GalleryCard(props) {
    return (
        <>
            <div className='gallery-wrapper'>
                <div className='gallery-transport-box'>
                    <div className='gallery-transport'>{props.transport}</div>
                        {props.title !== 'Стамбул' && (
                            <div className='gallery-passengers'>
                                 {props.quantity && (
                                    <p className='gallery-passengers-quantity'>{props.quantity}</p>)}
                                        {props.passengers && (
                                       <img className='gallery-passengers-image' src={props.passengers} alt="Passengers" />
                                )}
                           </div>
                        )}
                </div>
                <img className='gallery-image' src={props.image} alt={props.title} />
                <p className='gallery-title'>{props.title}, {props.month} — {props.amount}</p>
            </div>
        </>
    );
}

export default GalleryCard;

