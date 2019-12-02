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
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    reportData: [],
    fullPreventive: [],
    page: 3,
    pyramidexpect: '',
    pyramiddone: '',
    resolutionexpect: '',
    resolutiondone: '',
    bbsexpect: '',
    bbsdone: '',
    safebbsexpect: '',
    safebbsdone: '',
    inpectionsexpect: '',
    inpectionsdone: '',
    briefingexpect: '',
    briefingdone: '',
    actionplanexpect: '',
    actionplandone: '',
    pasexpect: '',
    pasdone: '',
    trainingexpect: '',
    trainindone: '',
    examsexpect: '',
    examsdone: '',
    wiexpect: '',
    widone: '',
    checklistexpect: '',
    checklistdone: '',
    driverexpect: '',
    driverdone: '',
    maintenanceexpect: '',
    maintenancedone: '',
    emergencyequipexpect: '',
    emergencyequipdone: '',
    actionontimeexpect: '',
    aciontontimedone: '',
    tifrexpect: '',
    tifrdone: '',
    ltifrexpect: '',
    ltifrdone: '',
    finalresult: '',
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
      fullPreventive: JSON.parse(JSON.stringify(response.data[3])),
    });

    console.log(response);

    window.beforeunload = e => {
      console.log('Stop this');
      e.preventDefault();
      e.returnValue = '';
    };

    this.setState({
      pyramidexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.pyramidexpect,
      pyramiddone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.pyramiddone,
      resolutionexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.resolutionexpect,
      resolutiondone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.resolutiondone,
      bbsexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.bbsexpect,
      bbsdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.bbsdone,
      safebbsexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.safebbsexpect,
      safebbsdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.safebbsdone,
      inpectionsexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.inpectionsexpect,
      inpectionsdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.inpectionsdone,
      briefingexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.briefingexpect,
      briefingdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.briefingdone,
      actionplanexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.actionplanexpect,
      actionplandone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.actionplandone,
      pasexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.pasexpect,
      pasdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.pasdone,
      trainingexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.trainingexpect,
      trainindone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.trainindone,
      examsexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.examsexpect,
      examsdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.examsdone,
      wiexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.wiexpect,
      widone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.widone,
      checklistexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.checklistexpect,
      checklistdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.checklistdone,
      driverexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.driverexpect,
      driverdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.driverdone,
      maintenanceexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.maintenanceexpect,
      maintenancedone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.maintenancedone,
      emergencyequipexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.emergencyequipexpect,
      emergencyequipdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.emergencyequipdone,
      actionontimeexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.actionontimeexpect,
      aciontontimedone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.aciontontimedone,
      tifrexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.tifrexpect,
      tifrdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.tifrdone,
      ltifrexpect:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.ltifrexpect,
      ltifrdone:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.ltifrdone,
      finalresult:
        this.state.fullPreventive === null
          ? 0
          : this.state.fullPreventive.finalresult,
    });

    console.log(this.state.fullEnvironment);
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

  async calculatePreventinveIndex() {
    const {
      pyramidexpect,
      pyramiddone,
      resolutionexpect,
      resolutiondone,
      bbsexpect,
      bbsdone,
      safebbsexpect,
      safebbsdone,
      inpectionsexpect,
      inpectionsdone,
      briefingexpect,
      briefingdone,
      actionplanexpect,
      actionplandone,
      pasexpect,
      pasdone,
      trainingexpect,
      trainindone,
      examsexpect,
      examsdone,
      wiexpect,
      widone,
      checklistexpect,
      checklistdone,
      driverexpect,
      driverdone,
      maintenanceexpect,
      maintenancedone,
      emergencyequipexpect,
      emergencyequipdone,
      actionontimeexpect,
      aciontontimedone,
      tifrexpect,
      tifrdone,
      ltifrexpect,
      ltifrdone,
      finalresult,
    } = this.state;

    // REGISTRO DE PIRÂMIDES
    if (pyramiddone >= pyramidexpect) {
      await this.setState({
        finalresult: 0.05,
        fullPreventive: {
          finalresult: 0.05,
        },
      });
    } else {
      const calc = (pyramiddone / pyramidexpect) * 0.025;

      await this.setState({
        finalresult: calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // RESOLUÇÃO DE PIRÂMIDES
    if (resolutiondone >= resolutionexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.1,
      });
    } else {
      const calc = (resolutiondone / resolutionexpect) * 0.05;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // REALIZAÇÃO DE BBS
    if (bbsdone >= bbsexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.1,
      });
    } else {
      const calc = (bbsdone / bbsexpect) * 0.05;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // BBS SEGURO
    if (safebbsdone >= safebbsexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.05,
      });
    } else {
      const calc = (safebbsdone / safebbsexpect) * 0.025;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // INSPEÇÕES PROGRAMADAS
    if (inpectionsdone >= inpectionsexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.05,
      });
    } else {
      const calc = (inpectionsdone / inpectionsexpect) * 0.025;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // BRIEFINGS COM TEMAS DE HSE
    if (briefingdone >= briefingexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.05,
      });
    } else {
      const calc = (briefingdone / briefingexpect) * 0.025;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // PLANO DE AÇÃO - INSPEÇÕES PROGRAMADAS
    if (actionplandone >= actionplanexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.1,
      });
    } else {
      const calc = (actionplandone / actionplanexpect) * 0.05;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // PLANO DE AÇÃO DO PAS %
    if (pasdone >= pasexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.05,
      });
    } else {
      const calc = (this.state.pasdone / this.state.pasexpect) * 0.025;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // TREINAMENTOS DE HSE
    if (trainindone >= trainingexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.05,
      });
    } else {
      const calc = (trainindone / trainingexpect) * 0.025;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // EXAMES MÉDICOS
    if (examsdone >= examsexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.1,
      });
    } else {
      const calc = 0;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // TREINAMENTO NAS WIS
    if (widone >= wiexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.1,
      });
    } else {
      const calc = 0;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // CHECKLIST DE EQUIPAMENTOS
    if (checklistdone >= checklistexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.05,
      });
    } else {
      const calc = 0;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // IDENTIFICAÇÃOD O CONDUTOR
    if (driverdone >= driverexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.05,
      });
    } else {
      const calc = 0;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // MANUTENÇÃO PREVENTIVA
    if (maintenancedone >= maintenanceexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.05,
      });
    } else {
      const calc = (maintenancedone / maintenanceexpect) * 0.025;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // SIMLADOS DE EMERGÊNCIA
    if (emergencyequipdone >= emergencyequipexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0.05,
      });
    } else {
      const calc = 0;
      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // PLANO DE AÇÃO IP
    if (aciontontimedone >= actionontimeexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0,
      });
    } else {
      const calc = (aciontontimedone / actionontimeexpect) * 0.1 - 0.1;

      this.setState({
        finalresult: this.state.finalresult + calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) + calc,
        },
      });
    }

    // TIFR
    if (tifrdone <= tifrexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0,
      });
    } else {
      const calc = -0.1;

      this.setState({
        finalresult: this.state.finalresult - calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) - calc,
        },
      });
    }

    // LTIFR
    if (ltifrdone <= ltifrexpect) {
      this.setState({
        finalresult: this.state.finalresult + 0,
      });
    } else {
      const calc = -0.1;

      this.setState({
        finalresult: this.state.finalresult - calc,
        fullPreventive: {
          finalresult: Number(this.state.finalresult) - calc,
        },
      });
    }

    console.log(`Resultado: ${1 - this.state.finalresult}`);
  }

  async handleForm() {
    const insertEnvironment = await api.post('/environment', {
      reportid: this.state.actualReport,
      pyramidexpect: this.state.pyramidexpect,
      pyramiddone: this.state.pyramiddone,
      resolutionexpect: this.state.resolutionexpect,
      resolutiondone: this.state.resolutiondone,
      bbsexpect: this.state.bbsexpect,
      bbsdone: this.state.bbsdone,
      inpectionsexpect: this.state.inpectionsexpect,
      inpectionsdone: this.state.inpectionsdone,
      briefingexpect: this.state.briefingexpect,
      briefingdone: this.state.briefingdone,
      actionplanexpect: this.state.actionplanexpect,
      actionplandone: this.state.actionplandone,
      pasexpect: this.state.pasexpect,
      pasdone: this.state.pasdone,
      trainingexpect: this.state.trainingexpect,
      trainindone: this.state.trainindone,
      examsexpect: this.state.examsexpect,
      examsdone: this.state.examsdone,
      wiexpect: this.state.wiexpect,
      widone: this.state.widone,
      checklistexpect: this.state.checklistexpect,
      checklistdone: this.state.checklistdone,
      driverexpect: this.state.driverexpect,
      driverdone: this.state.driverdone,
      maintenanceexpect: this.state.maintenanceexpect,
      maintenancedone: this.state.maintenancedone,
      emergencyequipexpect: this.state.emergencyequipexpect,
      emergencyequipdone: this.state.emergencyequipdone,
      actionontimeexpect: this.state.actionontimeexpect,
      aciontontimedone: this.state.aciontontimedone,
      tifrexpect: this.state.tifrexpect,
      tifrdone: this.state.tifrdone,
      ltifrexpect: this.state.ltifrexpect,
      ltifrdone: this.state.ltifrdone,
      finalresult: this.state.finalresult,
    });

    const loginpath = `/report-mensal/preventive-index/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/environment/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const { error, reportData, fullPreventive, page, dhlowned } = this.state;
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
    if (page === 3) {
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
                <ReportTitle>Índice Prevencionista</ReportTitle>
                <ItemContainer>
                  <IPTitle>Registro de pirâmides de segurança</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="pyramidexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          pyramidexpect: e.target.value,
                          fullPreventive: {
                            pyramidexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.pyramidexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="pyramiddone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          pyramiddone: e.target.value,
                          fullPreventive: {
                            pyramiddone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.pyramiddone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Resolução de pirâmides de segurança</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="resolutionexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          resolutionexpect: e.target.value,
                          fullPreventive: {
                            resolutionexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.resolutionexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="resolutionexpect">
                      Realizado
                    </LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          resolutiondone: e.target.value,
                          fullPreventive: {
                            resolutiondone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.resolutiondone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Realização de BBS</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="bbsexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          bbsexpect: e.target.value,
                          fullPreventive: {
                            bbsexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.bbsexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="bbsdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          bbsdone: e.target.value,
                          fullPreventive: {
                            bbsdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.bbsdone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>BBS Seguro</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="safebbsexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          safebbsexpect: e.target.value,
                          fullPreventive: {
                            safebbsexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.safebbsexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="safebbsdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          safebbsdone: e.target.value,
                          fullPreventive: {
                            safebbsdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.safebbsdone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Inspeções Programadas (Safety/DSW)</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="inpectionsexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          inpectionsexpect: e.target.value,
                          fullPreventive: {
                            inpectionsexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.inpectionsexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="inpectionsdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          inpectionsdone: e.target.value,
                          fullPreventive: {
                            inpectionsdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.inpectionsdone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Briefings com temas de HSE</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="briefingexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          briefingexpect: e.target.value,
                          fullPreventive: {
                            briefingexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.briefingexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="briefingdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          briefingdone: e.target.value,
                          fullPreventive: {
                            briefingdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.briefingdone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Plano de ação - Inspeções Programadas %</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="actionplanexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          actionplanexpect: e.target.value,
                          fullPreventive: {
                            actionplanexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.actionplanexpect
                      }
                      max="100"
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="actionplandone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          actionplandone: e.target.value,
                          fullPreventive: {
                            actionplandone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.actionplandone
                      }
                      max="100"
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Plano de Ação do PAS %</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="pasexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          pasexpect: e.target.value,
                          fullPreventive: {
                            pasexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.pasexpect
                      }
                      max="100"
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="pasdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          pasdone: e.target.value,
                          fullPreventive: {
                            pasdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.pasdone
                      }
                      max="100"
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Treinamentos de HSE %</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="trainingexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          trainingexpect: e.target.value,
                          fullPreventive: {
                            trainingexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.trainingexpect
                      }
                      max="100"
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="trainindone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          trainindone: e.target.value,
                          fullPreventive: {
                            trainindone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.trainindone
                      }
                      max="100"
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Exames Médicos %</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="examsexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          examsexpect: e.target.value,
                          fullPreventive: {
                            examsexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.examsexpect
                      }
                      max="100"
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="examsdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          examsdone: e.target.value,
                          fullPreventive: {
                            examsdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.examsdone
                      }
                      max="100"
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Colaboradores Treinados nas WIs</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="wiexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          wiexpect: e.target.value,
                          fullPreventive: {
                            wiexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.wiexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="widone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          widone: e.target.value,
                          fullPreventive: {
                            widone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.widone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Checklist dos Esquipamentos</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="checklistexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          checklistexpect: e.target.value,
                          fullPreventive: {
                            checklistexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.checklistexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="checklistdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          checklistdone: e.target.value,
                          fullPreventive: {
                            checklistdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.checklistdone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Identificação de Condutor de Equipamentos</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="driverexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          driverexpect: e.target.value,
                          fullPreventive: {
                            driverexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.driverexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="driverdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          driverdone: e.target.value,
                          fullPreventive: {
                            driverdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.driverdone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Manutenções Preventivas dos Equipamentos</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="maintenanceexpect">
                      Esperado
                    </LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          maintenanceexpect: e.target.value,
                          fullPreventive: {
                            maintenanceexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.maintenanceexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="maintenancedone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          maintenancedone: e.target.value,
                          fullPreventive: {
                            maintenancedone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.maintenancedone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Simulados e Equipamentos de Emergência %</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="emergencyequipexpect">
                      Esperado
                    </LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          emergencyequipexpect: e.target.value,
                          fullPreventive: {
                            emergencyequipexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.emergencyequipexpect
                      }
                      max="100"
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="emergencyequipdone">
                      Realizado
                    </LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          emergencyequipdone: e.target.value,
                          fullPreventive: {
                            emergencyequipdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.emergencyequipdone
                      }
                      max="100"
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>Plano de Ação (IP) dentro do prazo</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="actionontimeexpect">
                      Esperado
                    </LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          actionontimeexpect: e.target.value,
                          fullPreventive: {
                            actionontimeexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.actionontimeexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="aciontontimedone">
                      Realizado
                    </LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          aciontontimedone: e.target.value,
                          fullPreventive: {
                            aciontontimedone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.aciontontimedone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>TIFR - Índice de Frequência</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="tifrexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          tifrexpect: e.target.value,
                          fullPreventive: {
                            tifrexpect: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.tifrexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="tifrdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          tifrdone: e.target.value,
                          fullPreventive: {
                            tifrdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.tifrdone
                      }
                    />
                  </FormGroup>
                </Row>

                <ItemContainer>
                  <IPTitle>LTIFR - Índice de Gravidade</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="ltifrexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          ltifrexpect: e.target.value,
                          fullPreventive: {
                            ltifrexpect: e.target.value,
                          },
                        });
                        this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.ltifrexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="ltifrdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        this.setState({
                          ltifrdone: e.target.value,
                          fullPreventive: {
                            ltifrdone: e.target.value,
                          },
                        });
                        await this.calculatePreventinveIndex();
                      }}
                      value={
                        fullPreventive === null ? 0 : fullPreventive.ltifrdone
                      }
                    />
                  </FormGroup>
                </Row>

                {this.state.finalresult > 0.8 ? (
                  <IPContainer primary>
                    <h2>
                      Resultado Final: {` `}
                      {fullPreventive === null
                        ? 0
                        : parseFloat(this.state.finalresult * 100).toFixed(
                            1
                          )}{' '}
                      %
                    </h2>
                  </IPContainer>
                ) : (
                  <IPContainer>
                    <h2>
                      Resultado Final: {` `}
                      {fullPreventive === null
                        ? 0
                        : parseFloat(this.state.finalresult * 100).toFixed(
                            1
                          )}{' '}
                      %
                    </h2>
                  </IPContainer>
                )}

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
