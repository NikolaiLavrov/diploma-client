import React from 'react';
import Container from "react-bootstrap/Container";
import { CardGroup, Card } from "react-bootstrap";

export const MainPage =() => {
    return (
        <Container>
            <div className="App">
                <header className="App-header">


                    <p className="mb-5">
                        Rest Api Composer - веб-платформа, предназначенная для композиции программных интерфейсов передачи состояний
                    </p>
                   <p>Данный сервис позволит вам</p>
                    <CardGroup>
                        <Card className="Card-MainPage">
                            <Card.Img variant="top" src="/time.png" />
                            <Card.Body>
                                <Card.Text>
                                    Уменьшить затраты времени на разработку
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="Card-MainPage">
                            <Card.Img variant="top" src="/apishka.png" />
                            <Card.Body>
                                <Card.Text>
                                    Создавать собственные REST API
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="Card-MainPage">
                            <Card.Img variant="top" src="/rtc.png" />
                            <Card.Body>
                                <Card.Text>
                                    Создавать приложения с использованием технологии RTC
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>

                </header>
            </div>
        </Container>
    )
}