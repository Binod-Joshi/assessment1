import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardLink,
    Button,
    Row,
    Col
} from 'reactstrap';


const cardData = [
    {
        img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
        title: 'Card title 1',
        subtitle: 'Card subtitle 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        button: 'Button'
    },
    {
        img: "https://www.bhmpics.com/downloads/natural-photography-hd-Wallpapers/30.beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
        title: 'Card title 2',
        subtitle: 'Card subtitle 2',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        button: 'Button'
    },
    {
        img: "https://www.bhmpics.com/downloads/natural-photography-hd-Wallpapers/30.beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
        title: 'Card title 3',
        subtitle: 'Card subtitle 3',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        button: 'Button'
    }
];

const cardContentData = [
    {
        img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80",
        title: 'Card title 4',
        subtitle: 'Card subtitle 4',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        links: ['Card Link', 'Another Link']
    },
    {
        img: "https://www.bhmpics.com/downloads/natural-photography-hd-Wallpapers/30.beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
        title: 'Card title 5',
        subtitle: 'Card subtitle 5',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        links: ['Card Link', 'Another Link']
    },
    {
        img: "https://www.bhmpics.com/downloads/natural-photography-hd-Wallpapers/30.beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
        title: 'Card title 6',
        subtitle: 'Card subtitle 6',
        text: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        links: ['Card Link', 'Another Link']
    }
];

const Cards = () => {
    return (
        <div>
            <h5 className="mb-3">Basic Cards</h5>
            <Row>
                {cardData.map((card, index) => (
                    <Col xs="12" md="4" key={index}>
                        <Card>
                            <CardImg top width="100%" src={card.img} />
                            <CardBody>
                                <CardTitle>{card.title}</CardTitle>
                                <CardSubtitle>{card.subtitle}</CardSubtitle>
                                <CardText>{card.text}</CardText>
                                <Button>{card.button}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h5 className="mb-3">Cards Content Types</h5>
            <Row>
                {cardContentData.map((card, index) => (
                    <Col xs="12" md="4" key={index}>
                        <Card>
                            <CardBody>
                                <CardTitle>{card.title}</CardTitle>
                                <CardSubtitle>{card.subtitle}</CardSubtitle>
                            </CardBody>
                            <img width="100%" src={card.img} alt="" />
                            <CardBody>
                                <CardText>{card.text}</CardText>
                                {card.links.map((link, linkIndex) => (
                                    <CardLink href="#" key={linkIndex}>{link}</CardLink>
                                ))}
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Cards;
