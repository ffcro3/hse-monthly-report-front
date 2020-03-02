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
  ReportTitle,
  LabelInput,
  Row,
  FormGroup,
  IPContainer,
  ItemContainer,
  IPTitle,
  ResultTop,
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

    window.setInterval(() => {
      this.calculatePreventinveIndex();
    }, 2000);

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

    this.calculatePreventinveIndex();
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

    const resultado = await api.post('/ipcalc', {
      pyramidexpect: Number(pyramidexpect),
      pyramiddone: Number(pyramiddone),
      resolutionexpect: Number(resolutionexpect),
      resolutiondone: Number(resolutiondone),
      bbsexpect: Number(bbsexpect),
      bbsdone: Number(bbsdone),
      safebbsexpect: Number(safebbsexpect),
      safebbsdone: Number(safebbsdone),
      inpectionsexpect: Number(inpectionsexpect),
      inpectionsdone: Number(inpectionsdone),
      briefingexpect: Number(briefingexpect),
      briefingdone: Number(briefingdone),
      actionplanexpect: Number(actionplanexpect),
      actionplandone: Number(actionplandone),
      pasexpect: Number(pasexpect),
      pasdone: Number(pasdone),
      trainingexpect: Number(trainingexpect),
      trainindone: Number(trainindone),
      examsexpect: Number(examsexpect),
      examsdone: Number(examsdone),
      wiexpect: Number(wiexpect),
      widone: Number(widone),
      checklistexpect: Number(checklistexpect),
      checklistdone: Number(checklistdone),
      driverexpect: Number(driverexpect),
      driverdone: Number(driverdone),
      maintenanceexpect: Number(maintenanceexpect),
      maintenancedone: Number(maintenancedone),
      emergencyequipexpect: Number(emergencyequipexpect),
      emergencyequipdone: Number(emergencyequipdone),
      actionontimeexpect: Number(actionontimeexpect),
      aciontontimedone: Number(aciontontimedone),
      tifrexpect: Number(tifrexpect),
      tifrdone: Number(tifrdone),
      ltifrexpect: Number(ltifrexpect),
      ltifrdone: Number(ltifrdone),
    });

    await this.setState({
      finalresult: resultado.data.Resultado,
    });
  }

  async handleForm() {
    const insertPreventive = await api.post('/preventiveindex', {
      reportid: this.state.actualReport,
      pyramidexpect: this.state.pyramidexpect,
      pyramiddone: this.state.pyramiddone,
      resolutionexpect: this.state.resolutionexpect,
      resolutiondone: this.state.resolutiondone,
      bbsexpect: this.state.bbsexpect,
      bbsdone: this.state.bbsdone,
      safebbsdone: this.state.safebbsdone,
      safebbsexpect: this.state.safebbsexpect,
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

    const loginpath = `/report-mensal/aso/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/environment/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const { error, reportData, fullPreventive, page, dhlowned } = this.state;
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
    if (page === 3) {
      return (
        <>
          <Page>
            {this.state.finalresult > 80 ? (
              <ResultTop primary>
                <p>
                  Resultado Final: {` `}
                  {fullPreventive === null
                    ? 0
                    : parseFloat(this.state.finalresult).toFixed(2)}{' '}
                  %
                </p>
              </ResultTop>
            ) : (
              <ResultTop>
                <p>
                  Resultado Final: {` `}
                  {fullPreventive === null
                    ? 0
                    : parseFloat(this.state.finalresult).toFixed(2)}{' '}
                  %
                </p>
              </ResultTop>
            )}
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
                <ReportTitle>Índice Prevencionista</ReportTitle>
                <ItemContainer>
                  <IPTitle>Registro de pirâmides de segurança</IPTitle>
                </ItemContainer>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="pyramidexpect">Esperado</LabelInput>
                    <InputNumber
                      onChange={e => {
                        this.setState({
                          pyramidexpect: e.target.value,
                          fullPreventive: {
                            pyramidexpect: e.target.value,
                          },
                        });
                        e.stopPropagation();
                      }}
                      value={this.state.pyramidexpect}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="pyramiddone">Realizado</LabelInput>
                    <InputNumber
                      onChange={e => {
                        this.setState({
                          pyramiddone: e.target.value,
                          fullPreventive: {
                            pyramiddone: e.target.value,
                          },
                        });

                        console.log(e.type);
                      }}
                      value={this.state.pyramiddone}
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
                      }}
                      value={this.state.resolutionexpect}
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
                      }}
                      value={this.state.resolutiondone}
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
                      }}
                      value={this.state.bbsexpect}
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
                      }}
                      value={this.state.bbsdone}
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
                      }}
                      value={this.state.safebbsexpect}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="safebbsdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={async e => {
                        await this.setState({
                          safebbsdone: e.target.value,
                          fullPreventive: {
                            safebbsdone: e.target.value,
                          },
                        });
                      }}
                      value={this.state.safebbsdone}
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
                      }}
                      value={this.state.inpectionsexpect}
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
                      }}
                      value={this.state.inpectionsdone}
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
                      }}
                      value={this.state.briefingexpect}
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
                      }}
                      value={this.state.briefingdone}
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
                      }}
                      value={this.state.actionplanexpect}
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
                      }}
                      value={this.state.actionplandone}
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
                      }}
                      value={this.state.pasexpect}
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
                      }}
                      value={this.state.pasdone}
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
                      }}
                      value={this.state.trainingexpect}
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
                      }}
                      value={this.state.trainindone}
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
                      }}
                      value={this.state.examsexpect}
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
                      }}
                      value={this.state.examsdone}
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
                      }}
                      value={this.state.wiexpect}
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
                      }}
                      value={this.state.widone}
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
                      }}
                      value={this.state.checklistexpect}
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
                      }}
                      value={this.state.checklistdone}
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
                      }}
                      value={this.state.driverexpect}
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
                      }}
                      value={this.state.driverdone}
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
                      }}
                      value={this.state.maintenanceexpect}
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
                      }}
                      value={this.state.maintenancedone}
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
                      }}
                      value={this.state.emergencyequipexpect}
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
                      }}
                      value={this.state.emergencyequipdone}
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
                      }}
                      value={this.state.actionontimeexpect}
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
                      }}
                      value={this.state.aciontontimedone}
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
                      }}
                      value={this.state.tifrexpect}
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
                      }}
                      value={this.state.tifrdone}
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
                      }}
                      value={this.state.ltifrexpect}
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="ltifrdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={e => {
                        this.setState({
                          ltifrdone: e.target.value,
                        });
                      }}
                      value={this.state.ltifrdone}
                    />
                  </FormGroup>
                </Row>

                {this.state.finalresult > 80 ? (
                  <IPContainer primary>
                    <h2>
                      Resultado Final: {` `}
                      {fullPreventive === null
                        ? 0
                        : parseFloat(this.state.finalresult).toFixed(2)}{' '}
                      %
                    </h2>
                  </IPContainer>
                ) : (
                  <IPContainer>
                    <h2>
                      Resultado Final: {` `}
                      {fullPreventive === null
                        ? 0
                        : parseFloat(this.state.finalresult).toFixed(2)}{' '}
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
