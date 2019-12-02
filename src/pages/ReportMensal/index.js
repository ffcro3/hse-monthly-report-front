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
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    fullMonthly: [],
    reportData: [],
    page: 1,
    efectives: '',
    lta: '',
    daysaway: '',
    rwc: '',
    daystransfer: '',
    mtc: '',
    fac: '',
    temporary: '',
    illnessaway: '',
    illnesstransfer: '',
    materialincidenthigh: '',
    materialincidentlow: '',
    hoursworked: '',
    hourstraining: '',
    hoursbriefing: '',
    incidenthigh: '',
    incidentlow: '',
    incidentpath: '',
    incidentenvironment: '',
    lastincident: '',
    effectiveness: '',
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
      fullMonthly: JSON.parse(JSON.stringify(response.data[1])),
    });

    this.setState({
      efectives:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).efectives,
      lta:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).lta,
      daysaway:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).daysaway,
      rwc:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).rwc,
      daystransfer:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).daystransfer,
      mtc:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).mtc,
      fac:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).fac,
      temporary:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).temporary,
      illnessaway:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).illnessaway,
      illnesstransfer:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).illnesstransfer,
      materialincidenthigh:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).materialincidenthigh,
      materialincidentlow:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).materialincidentlow,
      hoursworked:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).hoursworked,
      hourstraining:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).hourstraining,
      hoursbriefing:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).hoursbriefing,
      incidenthigh:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).incidenthigh,
      incidentlow:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).incidentlow,
      incidentpath:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).incidentpath,
      incidentenvironment:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).incidentenvironment,
      lastincident:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).lastincident,
      effectiveness:
        JSON.parse(JSON.stringify(response.data[1])) === null
          ? 0
          : JSON.parse(JSON.stringify(response.data[1])).effectiveness,
    });
  }

  // Add a listener to prevent browser page refresh
  componentWillMount() {
    onbeforeunload = e => "Don't leave";
  }

  // Clear listener
  componentWillUnmount() {
    onbeforeunload = null;
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
    const insertMonthly = await api.post('/monthly', {
      reportid: this.state.actualReport,
      efectives: this.state.efectives,
      lta: this.state.lta,
      daysaway: this.state.daysaway,
      rwc: this.state.rwc,
      daystransfer: this.state.daystransfer,
      mtc: this.state.mtc,
      fac: this.state.fac,
      temporary: this.state.temporary,
      illnessaway: this.state.illnessaway,
      illnesstransfer: this.state.illnesstransfer,
      materialincidenthigh: this.state.materialincidenthigh,
      materialincidentlow: this.state.materialincidentlow,
      hoursworked: this.state.hoursworked,
      hourstraining: this.state.hourstraining,
      hoursbriefing: this.state.hoursbriefing,
      incidenthigh: this.state.incidenthigh,
      incidentlow: this.state.incidentlow,
      incidentpath: this.state.incidentpath,
      incidentenvironment: this.state.incidentenvironment,
      lastincident: this.state.lastincident,
      effectiveness: this.state.effectiveness,
    });

    const loginpath = `/report-mensal/environment/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const { error, reportData, fullMonthly, page } = this.state;
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
    if (page === 1) {
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
                <ReportTitle>Report Mensal</ReportTitle>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="efectives">
                      Funcionário Efetivos
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          efectives: e.target.value,
                          fullMonthly: {
                            efectives: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.efectives}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="temporary">
                      Funcionário Temporários
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          temporary: e.target.value,
                          fullMonthly: {
                            temporary: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.temporary}
                    />
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="lta">Número de LTA</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          lta: e.target.value,
                          fullMonthly: {
                            lta: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.lta}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="daysaway">Dias Afastados</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          daysaway: e.target.value,
                          fullMonthly: {
                            daysaway: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.daysaway}
                    />
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="rwc">Número de RWC</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          rwc: e.target.value,
                          fullMonthly: {
                            rwc: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.rwc}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="daystransfer">
                      Dias afastados
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          daystransfer: e.target.value,
                          fullMonthly: {
                            daystransfer: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null ? 0 : fullMonthly.daystransfer
                      }
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="mtc">Número de MTC</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          mtc: e.target.value,
                          fullMonthly: {
                            mtc: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.mtc}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="fac">Número de FAC</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          fac: e.target.value,
                          fullMonthly: {
                            fac: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.fac}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="illnessaway">
                      Doença ocupacional com afastamento
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          illnessaway: e.target.value,
                          fullMonthly: {
                            illnessaway: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.illnessaway}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="illnesstransfer">
                      Doença ocupacional com restrição
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          illnesstransfer: e.target.value,
                          fullMonthly: {
                            illnesstransfer: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null ? 0 : fullMonthly.illnesstransfer
                      }
                    />
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="materialincidenthigh">
                      Acidentel Material de Alto Potencial
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          materialincidenthigh: e.target.value,
                          fullMonthly: {
                            materialincidenthigh: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null
                          ? 0
                          : fullMonthly.materialincidenthigh
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="materialincidentlow">
                      Acidentel Material de Baixo Potencial
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          materialincidentlow: e.target.value,
                          fullMonthly: {
                            materialincidentlow: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null
                          ? 0
                          : fullMonthly.materialincidentlow
                      }
                    />
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="hoursworked">
                      Total de horas trabalhadas
                    </LabelInput>
                    <InputNumberTriple
                      onChange={e =>
                        this.setState({
                          hoursworked: e.target.value,
                          fullMonthly: {
                            hoursworked: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.hoursworked}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="hourstraining">
                      Horas treinadas em HSE
                    </LabelInput>
                    <InputNumberTriple
                      onChange={e =>
                        this.setState({
                          hourstraining: e.target.value,
                          fullMonthly: {
                            hourstraining: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null ? 0 : fullMonthly.hourstraining
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="hoursbriefing">
                      Horas Briefing
                    </LabelInput>
                    <InputNumberTriple
                      onChange={e =>
                        this.setState({
                          hoursbriefing: e.target.value,
                          fullMonthly: {
                            hoursbriefing: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null ? 0 : fullMonthly.hoursbriefing
                      }
                    />
                  </FormGroup>
                </Row>

                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="incidenthigh">
                      Incidente de Alto Potencial
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          incidenthigh: e.target.value,
                          fullMonthly: {
                            incidenthigh: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null ? 0 : fullMonthly.incidenthigh
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="incidentlow">
                      Incidente de Baixo Potencial
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          incidentlow: e.target.value,
                          fullMonthly: {
                            incidentlow: e.target.value,
                          },
                        })
                      }
                      value={fullMonthly === null ? 0 : fullMonthly.incidentlow}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="incidentpath">
                      Acidente de Trajeto
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          incidentpath: e.target.value,
                          fullMonthly: {
                            incidentpath: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null ? 0 : fullMonthly.incidentpath
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="incidentenvironment">
                      Acidente Ambiental
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          incidentenvironment: e.target.value,
                          fullMonthly: {
                            incidentenvironment: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null
                          ? 0
                          : fullMonthly.incidentenvironment
                      }
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="lastincident">
                      Data do último acidente com lesão e afastamento
                    </LabelInput>
                    <InputDate
                      onChange={e =>
                        this.setState({
                          lastincident: e.target.value,
                          fullMonthly: {
                            lastincident: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null ? 0 : fullMonthly.lastincident
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="effectiveness">
                      Efetivadade da gestão (em porcentagem)
                    </LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          effectiveness: e.target.value,
                          fullMonthly: {
                            effectiveness: e.target.value,
                          },
                        })
                      }
                      value={
                        fullMonthly === null ? 0 : fullMonthly.effectiveness
                      }
                    />
                  </FormGroup>
                </Row>

                <FooterContainer>
                  {page < 0 ? <BackButton>Voltar</BackButton> : ''}
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
