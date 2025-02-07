import React from 'react' 
import GalleryCard from '../GalleryCard/GalleryCard'
import TbilisiImg from '../../assets/Tbilisi.jpg'
import IstanbulImg from '../../assets/Istanbul.jpg'
import DubaiImg from '../../assets/Dubai.jpg'
import PhuketImg from '../../assets/Phuket.jpg'
import icPeople from '../../assets/people.svg'

const cards = [
    {
        title: 'Тбилиси',
        month: 'апрель',
        amount: '83.000',
        transport: 'на автобусе',
        quantity: 10,
        passengers: icPeople,
        image: TbilisiImg
    },
    {
        title: 'Стамбул',
        month: 'март',
        amount: '110.000',
        transport: 'на самолете',
        quantity: false,
        passengers: false,
        image: IstanbulImg
    },
    { 
        title:'Дубай',
        month: 'июнь',
        amount:'220.000',
        transport: 'на самолете',
        quantity: 15,
        passengers: icPeople,
        image: DubaiImg
    },
    {
        title: 'Пхукет',
        month: 'сентябрь',
        amount: '135.000',
        transport: 'самолет + паром',
        quantity: 11,
        passengers: icPeople,
        image: PhuketImg
    }
]

function Gallery (){
    return (
        <div>
            { cards.map(card => (
                <GalleryCard
                title={card.title}
                month={card.month}
                amount={card.amount}
                transport={card.transport}
                quantity={card.quantity}
                passengers={card.passengers}
                image={card.image}/>
            )) }
        </div>
    )
}

export default Gallery