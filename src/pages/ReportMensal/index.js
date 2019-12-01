import React, { Component } from 'react';

import api from '../../services/api';

import { Header, Page, Container } from '../../Components/index';
import { Error, BackButton, ErrorTitle, ErrorSubTitle } from './styles';

import logo from '../../assets/logo.png';

export default class Report extends Component {
  state = {
    sites: [],
    sectors: [],
  };

  async componentDidMount() {
    const sectors = await api.get('/sectors');

    await this.setState({
      sectors: sectors.data,
    });
  }

  render() {
    const { sites, sectors, sectorselected, error } = this.state;
    const date = 'Dezembro 2019';
    if (error === 'Você deixou campos em branco.') {
      return (
        <>
          <Error>
            <ErrorTitle>Existem campos em branco. </ErrorTitle>
            <ErrorSubTitle>Por favor, corrija.</ErrorSubTitle>
            <BackButton onClick={() => this.fixError()}>Corrigir</BackButton>
          </Error>
        </>
      );
    }
    return (
      <>
        <Page>
          <Header>
            <img src={logo} alt="SafetyBBSlogo" />
          </Header>
          <Container></Container>
        </Page>
      </>
    );
  }
}
