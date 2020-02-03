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
    page: 4,
    had: '',
    number: '',
    justifyExceed: '',
    asoNumberJustify: '',
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
      fullASO: JSON.parse(JSON.stringify(response.data[4])),
    });

    console.log(response);

    window.beforeunload = e => {
      console.log('Stop this');
      e.preventDefault();
      e.returnValue = '';
    };

    await this.setState({
      had: this.state.fullASO === null ? '' : this.state.fullASO.had,
      number: this.state.fullASO === null ? '' : this.state.fullASO.number,
    });

    console.log(this.state.fullASO);
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

  async fixError() {
    await this.setState({
      number: 7,
      error: '',
      fullASO: {
        number: 7,
      },
    });
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
    if (page === 4) {
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
                  <PageSubTitle>Data Final: 05/02/2020</PageSubTitle>
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
                <ReportTitle>ASO</ReportTitle>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="had">
                      O site possui ASO vencido?
                    </LabelInput>
                    <SelectInput
                      onChange={e =>
                        this.setState({
                          had: e.target.value,
                          fullASO: {
                            had: e.target.had,
                          },
                        })
                      }
                      value={this.state.had}
                    >
                      <Option value="Selecione" selected readonly>
                        Selecione
                      </Option>
                      <Option value="Sim">Sim</Option>
                      <Option value="Não">Não</Option>
                      <Option value="Excedido">Excedido</Option>
                    </SelectInput>
                  </FormGroup>
                  {had === 'Sim' ? (
                    <FormGroup>
                      <LabelInput htmlFor="number">
                        Número de ASO Vencido
                      </LabelInput>
                      <InputNumber
                        onChange={e =>
                          this.setState({
                            number: e.target.value,
                            asoNumberJustify: e.target.value,
                            fullASO: {
                              number: e.target.value,
                            },
                          })
                        }
                        value={this.state.number}
                      />
                    </FormGroup>
                  ) : (
                    ''
                  )}
                </Row>
                {number > 7
                  ? this.setState({
                      error: 'Existem mais de 7 ASOs vencidos.',
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
                      Salvar e Avançar
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
