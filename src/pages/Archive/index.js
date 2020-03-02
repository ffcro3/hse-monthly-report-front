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
  Justify,
  ErrorFooter,
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    reportData: [],
    fullArchive: [],
    page: 7,
    had: '',
    number: '',
    justifyExceed: '',
    archiveNumberJustify: '',
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
      fullArchive: JSON.parse(JSON.stringify(response.data[7])),
    });

    console.log(response);

    window.beforeunload = e => {
      console.log('Stop this');
      e.preventDefault();
      e.returnValue = '';
    };

    await this.setState({
      had: this.state.fullArchive === null ? '' : this.state.fullArchive.had,
      number:
        this.state.fullArchive === null ? '' : this.state.fullArchive.number,
    });

    console.log(this.state.fullArchive);
  }

  async fixError() {
    await this.setState({
      number: 7,
      error: '',
      fullArchive: {
        number: 7,
      },
    });
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

  async Justify() {
    const sendMail = await api.post('/justify/archive', {
      user: this.state.reportData.responsible,
      site: this.state.reportData.siteName,
      responsible: this.state.reportData.responsible,
      archive: this.state.archiveNumberJustify,
      justify: this.state.justifyExceed,
    });

    console.log(sendMail);

    await this.setState({
      error: '',
      number: 0,
      had: 'Excedido',
      fullCAT: {
        number: this.state.archiveNumberJustify,
      },
    });
  }

  async handleForm() {
    const insertArchive = await api.post('/archive', {
      reportid: this.state.actualReport,
      had: this.state.had,
      number: this.state.number,
    });

    const loginpath = `/report-mensal/restrictions/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/ergo/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const { error, reportData, fullArchive, page, had, number } = this.state;
    const date = 'Março 2020';
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

    if (error === 'Existem mais de 7 Arquivamentos.') {
      return (
        <>
          <Error>
            <ErrorContainer>
              <ErrorTitle>Existem mais de 7 Arquivamentos. </ErrorTitle>
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
    if (page === 7) {
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
                  <PageSubTitle>Data Final: 04/03/2020</PageSubTitle>
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
                <ReportTitle>Arquivamentos</ReportTitle>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="had">
                      Houve desligamentos de colaboradores no mês reportado?
                    </LabelInput>
                    <SelectInput
                      onChange={e =>
                        this.setState({
                          had: e.target.value,
                          fullArchive: {
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
                      <Option value="Excedido">Execedido</Option>
                    </SelectInput>
                  </FormGroup>
                  {had === 'Sim' ? (
                    <FormGroup>
                      <LabelInput htmlFor="number">
                        Número de colaboradores desligados
                      </LabelInput>
                      <InputNumber
                        onChange={e =>
                          this.setState({
                            number: e.target.value,
                            archiveNumberJustify: e.target.value,
                            fullArchive: {
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
                      error: 'Existem mais de 7 Arquivamentos.',
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
