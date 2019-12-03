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
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    reportData: [],
    fullAway: [],
    page: 5,
    had: '',
    number: '',
  };

  async componentDidMount() {
    const { match } = this.props;
    const actualReport = decodeURIComponent(match.params.report);

    await this.setState({
      actualReport: actualReport,
    });

    const response = await api.get(`/report/${actualReport}`);

    this.setState({
      reportmensal: actualReport,
      reportData: JSON.parse(JSON.stringify(response.data[0])),
      fullAway: JSON.parse(JSON.stringify(response.data[5])),
    });

    console.log(response);

    window.beforeunload = e => {
      console.log('Stop this');
      e.preventDefault();
      e.returnValue = '';
    };

    await this.setState({
      had: this.state.fullAway === null ? '' : this.state.fullAway.had,
      number: this.state.fullAway === null ? '' : this.state.fullAway.number,
    });

    console.log(this.state.fullAway);
  }

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

  async handleForm() {
    const insertASO = await api.post('/away', {
      reportid: this.state.actualReport,
      had: this.state.had,
      number: this.state.number,
    });

    const loginpath = `/report-mensal/ergo/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/away/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  async fixError() {
    await this.setState({
      number: 7,
      error: '',
      fullAway: {
        number: 7,
      },
    });
  }

  render() {
    const { error, reportData, fullAway, page, had, number } = this.state;
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

    if (error === 'Existem mais de 7 Afastamentos.') {
      return (
        <>
          <Error>
            <ErrorContainer>
              <ErrorTitle>Existem mais de 7 Afastamentos. </ErrorTitle>
              <ErrorSubTitle>Por favor, justifique.</ErrorSubTitle>
              <BackButton onClick={() => this.fixError()}>Corrigir</BackButton>
            </ErrorContainer>
          </Error>
        </>
      );
    }
    if (page === 5) {
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
                    Report Mensal de HSE - {reportData.siteName}
                  </PageTitle>
                  <PageSubTitle>Data Final: 04/12/2019</PageSubTitle>
                  <PageSubTitle>
                    Responsável: {reportData.responsible}
                  </PageSubTitle>
                  <PageSubTitle>Supervisor: {reportData.manager}</PageSubTitle>
                  <PageSubTitle>
                    Observações: Cada página representa um item do report.
                    Preencha as informações e as mesmas serão salvas a cada
                    avanço de página. Portanto, se quiser salvar clique no botão
                    inferior "Avançar".
                  </PageSubTitle>
                </HeaderInfo>
              </HeaderTitle>
              <Divider />
              <Form>
                <ReportTitle>Afastamentos</ReportTitle>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="had">
                      O site possui colaboradores em afastamento pelo INSS?
                    </LabelInput>
                    <SelectInput
                      onChange={e =>
                        this.setState({
                          had: e.target.value,
                          fullAway: {
                            had: e.target.had,
                          },
                        })
                      }
                      value={fullAway === null ? 0 : fullAway.had}
                    >
                      <Option value="Selecione" selected readonly>
                        Selecione
                      </Option>
                      <Option value="Sim">Sim</Option>
                      <Option value="Não">Não</Option>
                    </SelectInput>
                  </FormGroup>
                  {had === 'Sim' ? (
                    <FormGroup>
                      <LabelInput htmlFor="number">
                        Número de colaboradores afastados
                      </LabelInput>
                      <InputNumber
                        onChange={e =>
                          this.setState({
                            number: e.target.value,
                            fullAway: {
                              number: e.target.value,
                            },
                          })
                        }
                        value={fullAway === null ? 0 : fullAway.number}
                      />
                    </FormGroup>
                  ) : (
                    ''
                  )}
                </Row>
                {number > 7
                  ? this.setState({
                      error: 'Existem mais de 7 Afastamentos.',
                    })
                  : ''}
                <FooterContainer>
                  {page <= 1 ? (
                    ''
                  ) : (
                    <BackButton onClick={() => this.handleGoback()}>
                      Voltar
                    </BackButton>
                  )}
                  {page > 0 <= 10 ? (
                    <FowardButton onClick={() => this.handleForm()}>
                      Avançar
                    </FowardButton>
                  ) : (
                    ''
                  )}
                </FooterContainer>
              </Form>
            </Container>
          </Page>
        </>
      );
    }
    return <></>;
  }
}
