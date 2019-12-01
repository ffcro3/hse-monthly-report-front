import React, { Component } from 'react';
import { isAfter, isBefore } from 'date-fns';

import api from '../../services/api';

import { Header, Page, Container } from '../../Components/index';
import {
  HeaderTitle,
  HeaderImage,
  HeaderInfo,
  PageTitle,
  PageSubTitle,
  Form,
  SelectInput,
  LabelInput,
  Option,
  Divider,
  GoButton,
  Error,
  BackButton,
  ErrorTitle,
  ErrorSubTitle,
  ErrorContainer,
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';

export default class Report extends Component {
  state = {
    sites: [],
    sectors: [],
    sectorselected: null,
    year: null,
    month: null,
    siteselected: null,
    reportExists: null,
    error: null,
    dateError: null,
  };

  async componentDidMount() {
    const sectors = await api.get('/sectors');

    await this.setState({
      sectors: sectors.data,
    });
  }

  async siteSector(sector) {
    const newsites = await api.get(`/sectors/${sector}`);

    await this.setState({
      sites: newsites.data,
      sectorselected: sector,
    });
  }

  async siteSelector(site) {
    await this.setState({
      siteselected: site,
    });
  }

  async yearSelector(year) {
    await this.setState({
      year: year,
    });
  }

  async monthSelector(month) {
    await this.setState({
      month: month,
    });
  }

  async startReport() {
    const { year, month, siteselected } = this.state;

    if (!year) {
      await this.setState({
        error: 'Você deixou campos em branco.',
      });
    }

    if (!month) {
      await this.setState({
        error: 'Você deixou campos em branco.',
      });
    }

    if (!siteselected) {
      await this.setState({
        error: 'Você deixou campos em branco.',
      });
    }

    const report = await api.post('/report', {
      sitename: this.state.siteselected,
      year: this.state.year,
      month: this.state.month,
    });

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const verifyBefore = isBefore(
      new Date(currentYear, currentMonth),
      new Date(this.state.year, this.state.month)
    );

    const verifyAfter = isAfter(
      new Date(currentYear, currentMonth),
      new Date(this.state.year, this.state.month)
    );

    if (verifyBefore) {
      await this.setState({
        dateError: 'Você não pode mudar dados futuros',
      });
    }

    if (verifyAfter) {
      await this.setState({
        dateError: 'Você não pode mudar dados passados',
      });
    }

    if (!verifyAfter && !verifyBefore) {
      const noSpacesSite = this.state.siteselected.replace(/\s/g, '');
      const reportstring = `${this.state.year.trim()}${this.state.month.trim()}${noSpacesSite.trim()}`;
      const loginpath = `/report-mensal/${reportstring}`;
      this.props.history.push(loginpath);
    }
  }

  handleLogin() {}

  async fixFieldError() {
    await this.setState({
      error: null,
    });
  }

  async fixDateError() {
    await this.setState({
      dateError: null,
    });
  }

  async verifyDate() {}

  render() {
    const { sites, sectors, sectorselected, error, dateError } = this.state;
    const date = 'Dezembro 2019';
    if (error === 'Você deixou campos em branco.') {
      return (
        <>
          <Error>
            <ErrorContainer>
              <ErrorTitle>Existem campos em branco. </ErrorTitle>
              <ErrorSubTitle>Por favor, corrija.</ErrorSubTitle>
              <BackButton onClick={() => this.fixFieldError()}>
                Corrigir
              </BackButton>
            </ErrorContainer>
          </Error>
        </>
      );
    }

    if (dateError === 'Você não pode mudar dados passados') {
      return (
        <>
          <Error>
            <ErrorContainer>
              <ErrorTitle>Você não pode mudar dados passados. </ErrorTitle>
              <ErrorSubTitle>Por favor, corrija.</ErrorSubTitle>
              <BackButton onClick={() => this.fixDateError()}>
                Corrigir
              </BackButton>
            </ErrorContainer>
          </Error>
        </>
      );
    }

    if (dateError === 'Você não pode mudar dados futuros') {
      return (
        <>
          <Error>
            <ErrorContainer>
              <ErrorTitle>Você não pode mudar dados futuros. </ErrorTitle>
              <ErrorSubTitle>Por favor, corrija.</ErrorSubTitle>
              <BackButton onClick={() => this.fixDateError()}>
                Corrigir
              </BackButton>
            </ErrorContainer>
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
                <PageTitle>Report Mensal de HSE - {date}</PageTitle>
                <PageSubTitle>
                  Bem vindo ao novo Reporte Mensal de HSE.
                </PageSubTitle>
                <PageSubTitle>
                  Para iniciar o preenchimento, por favor preencha os dados de
                  setor, site, mês e ano.
                </PageSubTitle>
                <PageSubTitle>
                  Caso você já tenha iniciado um novo report, por favor,
                  preencha os campos de setor, site, mês e ano para que possamos
                  carregar as informações já preenchidas.
                </PageSubTitle>
              </HeaderInfo>
            </HeaderTitle>
            <Divider />
            <Form>
              <LabelInput>Selecione o setor</LabelInput>
              <SelectInput
                onChange={e => this.siteSector(e.target.value)}
                value={this.state.sectorselected}
              >
                <Option
                  value="Selecione um setor"
                  style={{ color: '#ccc' }}
                  readonly
                >
                  Selecione Setor
                </Option>
                {sectors.map((sector, index) => (
                  <Option value={sector}>{sector}</Option>
                ))}
              </SelectInput>

              <LabelInput>Selecione o site</LabelInput>
              <SelectInput
                onChange={e => this.siteSelector(e.target.value)}
                value={this.state.siteselected}
              >
                <Option
                  value="Selecione Site"
                  style={{ color: '#ccc' }}
                  readonly
                >
                  Selecione Site
                </Option>
                {sites.map((site, index) => (
                  <Option value={site}>{site}</Option>
                ))}
              </SelectInput>

              <LabelInput>Selecione o ano</LabelInput>
              <SelectInput
                onChange={e => this.yearSelector(e.target.value)}
                value={this.state.year}
              >
                <Option
                  value="Selecione Ano"
                  style={{ color: '#ccc' }}
                  readonly
                >
                  Selecione Ano
                </Option>
                <Option value="2019">2019</Option>
                <Option value="2020">2020</Option>
                <Option value="2021">2021</Option>
              </SelectInput>

              <LabelInput>Selecione o mês</LabelInput>
              <SelectInput
                onChange={e => this.monthSelector(e.target.value)}
                value={this.state.month}
              >
                <Option
                  value="Selecione Mês"
                  style={{ color: '#ccc' }}
                  readonly
                >
                  Selecione Mês
                </Option>
                <Option value="01">01</Option>
                <Option value="02">02</Option>
                <Option value="04">04</Option>
                <Option value="05">05</Option>
                <Option value="06">06</Option>
                <Option value="07">07</Option>
                <Option value="08">08</Option>
                <Option value="09">09</Option>
                <Option value="10">10</Option>
                <Option value="11">11</Option>
                <Option value="12">12</Option>
              </SelectInput>
              <Divider></Divider>
              <GoButton onClick={() => this.startReport()}>
                Iniciar o preenchimento
              </GoButton>
            </Form>
          </Container>
        </Page>
      </>
    );
  }
}
