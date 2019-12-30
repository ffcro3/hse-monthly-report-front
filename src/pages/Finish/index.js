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
  FowardButton,
  FooterContainer,
  ErrorTitle,
  ErrorSubTitle,
  Divider,
  Form,
  InputNumber,
  InputNumberTriple,
  ReportTitle,
  LabelInput,
  Row,
  FormGroup,
  InputDate,
  SelectInput,
  Option,
  IPContainer,
  ItemContainer,
  IPTitle,
  ErrorContainer,
  ErrorFooter,
  Justify,
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    reportData: [],
    fullASO: [],
    page: 999,
    had: '',
    number: '',
    justifyExceed: '',
    asoNumberJustify: '',
  };

  async componentDidMount() {}

  async fixDateError() {
    await this.setState({
      dateError: null,
    });
  }

  async fixFieldError() {
    await this.setState({
      error: null,
    });
  }

  async fixError() {
    window.location.href =
      'https://global.intelex.com/Login3/LOGICS/Application/MyTasksSummary';
    return null;
  }

  async Justify() {
    const sendMail = await api.post('/justify/aso', {
      user: this.state.reportData.responsible,
      site: this.state.reportData.siteName,
      responsible: this.state.reportData.responsible,
      aso: this.state.asoNumberJustify,
      justify: this.state.justifyExceed,
    });

    console.log(sendMail);

    await this.setState({
      error: '',
      number: 0,
      had: 'Excedido',
      fullCAT: {
        number: this.state.asoNumberJustify,
      },
    });
  }

  async handleForm() {
    const insertASO = await api.post('/aso', {
      reportid: this.state.actualReport,
      had: this.state.had,
      number: this.state.number,
    });

    const loginpath = `/report-mensal/away/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/preventive-index/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const { error, reportData, fullASO, page, had, number } = this.state;
    const date = 'Janeiro 2020';
    if (error === 'Existem mais de 7 ASOs vencidos.') {
      return (
        <>
          <Error>
            <ErrorContainer>
              <ErrorTitle>Existem mais de 7 ASOs vencidos. </ErrorTitle>
              <ErrorSubTitle>Por favor, justifique.</ErrorSubTitle>
              <Justify
                onChange={e =>
                  this.setState({
                    justifyExceed: e.target.value,
                  })
                }
              ></Justify>
              <ErrorFooter>
                <BackButton onClick={() => this.fixError()}>
                  Cancelar
                </BackButton>
                <FowardButton onClick={() => this.Justify()}>
                  Justificar
                </FowardButton>
              </ErrorFooter>
            </ErrorContainer>
          </Error>
        </>
      );
    }

    if (error === 'Dados inseridos') {
      return (
        <>
          <Error>
            <ErrorTitle>Dados inseridos com sucesso. </ErrorTitle>
            <ErrorSubTitle>Verifique o banco.</ErrorSubTitle>
            <BackButton onClick={() => this.fixError()}>Corrigir</BackButton>
          </Error>
        </>
      );
    }
    if (page === 999) {
      return (
        <>
          <Error>
            <ErrorTitle>Report Finalizado com sucesso. </ErrorTitle>
            <ErrorSubTitle>Clique abaixo para sair.</ErrorSubTitle>
            <BackButton onClick={() => this.fixError()}>Sair</BackButton>
          </Error>
        </>
      );
    }
    return <></>;
  }
}
