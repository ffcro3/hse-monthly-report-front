import React, { Component } from 'react';

import api from '../../services/api';

import { Header, Page, Container } from '../../Components/index';
import {
  HeaderTitle,
  HeaderImage,
  HeaderInfo,
  PageTitle,
  PageSubTitle,
  Error,
  BackButton,
  ErrorTitle,
  ErrorSubTitle,
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';

export default class Report extends Component {
  state = {
    reportmensal: null,
    reportData: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const actualReport = decodeURIComponent(match.params.report);
    const response = await api.get(`/report/${actualReport}`);

    this.setState({
      reportmensal: actualReport,
      reportData: JSON.parse(JSON.stringify(response.data[0])),
    });

    console.log(this.state.reportData);
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
          <Container>
            <HeaderTitle>
              <HeaderImage>
                <img
                  src={safetyLogo}
                  alt="Safety First Logo"
                  style={{ height: 150 }}
                />
              </HeaderImage>
              <HeaderInfo>
                <PageTitle>
                  Report Mensal de HSE - {this.state.reportData.siteName}
                </PageTitle>
              </HeaderInfo>
            </HeaderTitle>
          </Container>
        </Page>
      </>
    );
  }
}
