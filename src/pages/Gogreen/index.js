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
  TextArea,
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    reportData: [],
    fullGreen: [],
    page: 10,
    target: String,
    number: String,
    started: String,
    descriptionstart: String,
    action: String,
    descriptionaction: String,
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
      fullGreen: JSON.parse(JSON.stringify(response.data[10])),
    });

    console.log(response);

    window.beforeunload = e => {
      console.log('Stop this');
      e.preventDefault();
      e.returnValue = '';
    };

    await this.setState({
      target: this.state.fullGreen === null ? '' : this.state.fullGreen.target,
      number: this.state.fullGreen === null ? '' : this.state.fullGreen.number,
      started:
        this.state.fullGreen === null ? '' : this.state.fullGreen.started,
      descriptionstart:
        this.state.fullGreen === null
          ? ''
          : this.state.fullGreen.descriptionstart,
      action: this.state.fullGreen === null ? '' : this.state.fullGreen.action,
      descriptionaction:
        this.state.fullGreen === null
          ? ''
          : this.state.fullGreen.descriptionaction,
    });

    console.log(this.state.fullGreen);
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
    const insertArchive = await api.post('/gogreen', {
      reportid: this.state.actualReport,
      target: this.state.target,
      number: this.state.number,
      started: this.state.started,
      descriptionstart: this.state.descriptionstart,
      action: this.state.action,
      descriptionaction: this.state.descriptionstart,
    });

    const loginpath = `/report-mensal/finished`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/cat/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const { error, reportData, fullGreen, page, had } = this.state;
    const date = 'Fevereiro 2020';
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
    if (page === 10) {
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
                <ReportTitle>GoGreen</ReportTitle>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="target">
                      Meta de plantio de árvores do site (HC * 2)
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          target: e.target.value,
                          fullGreen: {
                            target: e.target.value,
                          },
                        })
                      }
                      value={fullGreen === null ? 0 : fullGreen.target}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="number">
                      Quantidade total reportada para Deutsche Post
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          number: e.target.value,
                          fullGreen: {
                            number: e.target.value,
                          },
                        })
                      }
                      value={fullGreen === null ? 0 : fullGreen.number}
                    />
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="started">
                      O site iniciou as tratativas de plantio de árvores?
                    </LabelInput>
                    <SelectInput
                      onChange={e =>
                        this.setState({
                          started: e.target.value,
                          fullGreen: {
                            started: e.target.started,
                          },
                        })
                      }
                      value={fullGreen === null ? 0 : fullGreen.started}
                    >
                      <Option value="Selecione" selected readonly>
                        Selecione
                      </Option>
                      <Option value="Sim">Sim</Option>
                      <Option value="Não">Não</Option>
                    </SelectInput>
                  </FormGroup>
                </Row>
                <Row style={{ marginTop: '-20px' }}>
                  <FormGroup>
                    <LabelInput htmlFor="descriptionstart">Descreva</LabelInput>
                    <TextArea
                      width="80%"
                      onChange={e =>
                        this.setState({
                          descriptionstart: e.target.value,
                          fullGreen: {
                            descriptionstart: e.target.descriptionstart,
                          },
                        })
                      }
                      value={
                        fullGreen === null ? 0 : fullGreen.descriptionstart
                      }
                    ></TextArea>
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="action">
                      Houve alguma acão de GoGreen no Site?
                    </LabelInput>
                    <SelectInput
                      onChange={e =>
                        this.setState({
                          action: e.target.value,
                          fullGreen: {
                            action: e.target.action,
                          },
                        })
                      }
                      value={fullGreen === null ? 0 : fullGreen.action}
                    >
                      <Option value="Selecione" selected readonly>
                        Selecione
                      </Option>
                      <Option value="Sim">Sim</Option>
                      <Option value="Não">Não</Option>
                    </SelectInput>
                  </FormGroup>
                </Row>
                <Row style={{ marginTop: '-20px' }}>
                  <FormGroup>
                    <LabelInput htmlFor="descriptionaction">
                      Descreva
                    </LabelInput>
                    <TextArea
                      width="80%"
                      onChange={e =>
                        this.setState({
                          descriptionaction: e.target.value,
                          fullGreen: {
                            descriptionaction: e.target.descriptionaction,
                          },
                        })
                      }
                      value={
                        fullGreen === null ? 0 : fullGreen.descriptionaction
                      }
                    ></TextArea>
                  </FormGroup>
                </Row>
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
                      Enviar
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
