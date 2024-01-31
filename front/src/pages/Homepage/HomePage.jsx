import React from 'react';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import Banner from '../../components/Banner/BannerComponent';
import Card from '../../components/Card/CardComponent';
import './HomePage.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [
        '/src/assets/icon-chat.png',
        '/src/assets/icon-money.png',
        '/src/assets/icon-security.png',
      ],
      title: [
        'You are our #1 priority',
        'More savings means higher rates',
        'Security you can trust',
      ],
      descriptions: [
        'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
        'Open a savings account with Argent Bank today and start earning 1.85% annual percentage yield on your savings.',
        'We use top of the line encryption to make sure your data and money is always safe.',
      ]
    };
  }

  componentDidMount() {
    // Modifier le titre de l'onglet
    document.title = 'Argent Bank - Home';
  }

  render() {

    return (
      <>
        <TopNav />
        <Banner imageSrc="/src/assets/bank-tree.jpeg" />
        <div className="featuresContainer">
          <Card picture={this.state.pictures[0]} title={this.state.title[0]} description={this.state.descriptions[0]} />
          <Card picture={this.state.pictures[1]} title={this.state.title[1]} description={this.state.descriptions[1]} />
          <Card picture={this.state.pictures[2]} title={this.state.title[2]} description={this.state.descriptions[2]} />
        </div>
        <FooterComponent />
      </>
    );
  }
}

export default HomePage;
