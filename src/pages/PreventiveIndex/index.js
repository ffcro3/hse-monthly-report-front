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

    console.log(response);

    window.beforeunload = e => {
      console.log('Stop this');
      e.preventDefault();
      e.returnValue = '';
    };

    this.setState({
      reportmensal: actualReport,
      reportData: JSON.parse(JSON.stringify(response.data[0])),
      fullEnvironment: JSON.parse(JSON.stringify(response.data[2])),
    });

    this.setState({
      pyramidexpect: this.state.fullPreventive.pyramidexpect
        ? ''
        : this.state.fullPreventive.pyramidexpect,
      pyramiddone: this.state.fullPreventive.pyramiddone
        ? ''
        : this.state.fullPreventive.pyramiddone,
      resolutionexpect: this.state.fullPreventive.resolutionexpect
        ? ''
        : this.state.fullPreventive.resolutionexpect,
      resolutiondone: this.state.fullPreventive.resolutiondone
        ? ''
        : this.state.fullPreventive.resolutiondone,
      bbsexpect: this.state.fullPreventive.bbsexpect
        ? ''
        : this.state.fullPreventive.bbsexpect,
      bbsdone: this.state.fullPreventive.bbsdone
        ? ''
        : this.state.fullPreventive.bbsdone,
      safebbsexpect: this.state.fullPreventive.safebbsexpect
        ? ''
        : this.state.fullPreventive.safebbsexpect,
      safebbsdone: this.state.fullPreventive.safebbsdone
        ? ''
        : this.state.fullPreventive.safebbsdone,
      inpectionsexpect: this.state.fullPreventive.inpectionsexpect
        ? ''
        : this.state.fullPreventive.inpectionsexpect,
      inpectionsdone: this.state.fullPreventive.inpectionsdone
        ? ''
        : this.state.fullPreventive.inpectionsdone,
      briefingexpect: this.state.fullPreventive.briefingexpect
        ? ''
        : this.state.fullPreventive.briefingexpect,
      briefingdone: this.state.fullPreventive.briefingdone
        ? ''
        : this.state.fullPreventive.briefingdone,
      actionplanexpect: this.state.fullPreventive.actionplanexpect
        ? ''
        : this.state.fullPreventive.actionplanexpect,
      actionplandone: this.state.fullPreventive.actionplandone
        ? ''
        : this.state.fullPreventive.actionplandone,
      pasexpect: this.state.fullPreventive.pasexpect
        ? ''
        : this.state.fullPreventive.pasexpect,
      pasdone: this.state.fullPreventive.pasdone
        ? ''
        : this.state.fullPreventive.pasdone,
      trainingexpect: this.state.fullPreventive.trainingexpect
        ? ''
        : this.state.fullPreventive.trainingexpect,
      trainindone: this.state.fullPreventive.trainindone
        ? ''
        : this.state.fullPreventive.trainindone,
      examsexpect: this.state.fullPreventive.examsexpect
        ? ''
        : this.state.fullPreventive.examsexpect,
      examsdone: this.state.fullPreventive.examsdone
        ? ''
        : this.state.fullPreventive.examsdone,
      wiexpect: this.state.fullPreventive.wiexpect
        ? ''
        : this.state.fullPreventive.wiexpect,
      widone: this.state.fullPreventive.widone
        ? ''
        : this.state.fullPreventive.widone,
      checklistexpect: this.state.fullPreventive.checklistexpect
        ? ''
        : this.state.fullPreventive.checklistexpect,
      checklistdone: this.state.fullPreventive.checklistdone
        ? ''
        : this.state.fullPreventive.checklistdone,
      driverexpect: this.state.fullPreventive.driverexpect
        ? ''
        : this.state.fullPreventive.driverexpect,
      driverdone: this.state.fullPreventive.driverdone
        ? ''
        : this.state.fullPreventive.driverdone,
      maintenanceexpect: this.state.fullPreventive.maintenanceexpect
        ? ''
        : this.state.fullPreventive.maintenanceexpect,
      maintenancedone: this.state.fullPreventive.maintenancedone
        ? ''
        : this.state.fullPreventive.maintenancedone,
      emergencyequipexpect: this.state.fullPreventive.emergencyequipexpect
        ? ''
        : this.state.fullPreventive.emergencyequipexpect,
      emergencyequipdone: this.state.fullPreventive.emergencyequipdone
        ? ''
        : this.state.fullPreventive.emergencyequipdone,
      actionontimeexpect: this.state.fullPreventive.actionontimeexpect
        ? ''
        : this.state.fullPreventive.actionontimeexpect,
      aciontontimedone: this.state.fullPreventive.aciontontimedone
        ? ''
        : this.state.fullPreventive.aciontontimedone,
      tifrexpect: this.state.fullPreventive.tifrexpect
        ? ''
        : this.state.fullPreventive.tifrexpect,
      tifrdone: this.state.fullPreventive.tifrdone
        ? ''
        : this.state.fullPreventive.tifrdone,
      ltifrexpect: this.state.fullPreventive.ltifrexpect
        ? ''
        : this.state.fullPreventive.ltifrexpect,
      ltifrdone: this.state.fullPreventive.ltifrdone
        ? ''
        : this.state.fullPreventive.ltifrdone,
      finalresult: this.state.fullPreventive.finalresult
        ? ''
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
                      onChange={e =>
                        this.setState({
                          pyramidexpect: e.target.value,
                          fullPreventive: {
                            pyramidexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          pyramiddone: e.target.value,
                          fullPreventive: {
                            pyramiddone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          resolutionexpect: e.target.value,
                          fullPreventive: {
                            resolutionexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          resolutionexpect: e.target.value,
                          fullPreventive: {
                            resolutionexpect: e.target.value,
                          },
                        })
                      }
                      value={
                        fullPreventive === null
                          ? 0
                          : fullPreventive.resolutionexpect
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
                      onChange={e =>
                        this.setState({
                          bbsexpect: e.target.value,
                          fullPreventive: {
                            bbsexpect: e.target.value,
                          },
                        })
                      }
                      value={
                        fullPreventive === null ? 0 : fullPreventive.bbsexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="bbsdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          bbsdone: e.target.value,
                          fullPreventive: {
                            bbsdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          safebbsexpect: e.target.value,
                          fullPreventive: {
                            safebbsexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          safebbsdone: e.target.value,
                          fullPreventive: {
                            safebbsdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          inpectionsexpect: e.target.value,
                          fullPreventive: {
                            inpectionsexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          inpectionsdone: e.target.value,
                          fullPreventive: {
                            inpectionsdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          briefingexpect: e.target.value,
                          fullPreventive: {
                            briefingexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          briefingdone: e.target.value,
                          fullPreventive: {
                            briefingdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          actionplanexpect: e.target.value,
                          fullPreventive: {
                            actionplanexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          actionplandone: e.target.value,
                          fullPreventive: {
                            actionplandone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          pasexpect: e.target.value,
                          fullPreventive: {
                            pasexpect: e.target.value,
                          },
                        })
                      }
                      value={
                        fullPreventive === null ? 0 : fullPreventive.pasexpect
                      }
                      max="100"
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="pasdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          pasdone: e.target.value,
                          fullPreventive: {
                            pasdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          trainingexpect: e.target.value,
                          fullPreventive: {
                            trainingexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          trainindone: e.target.value,
                          fullPreventive: {
                            trainindone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          examsexpect: e.target.value,
                          fullPreventive: {
                            examsexpect: e.target.value,
                          },
                        })
                      }
                      value={
                        fullPreventive === null ? 0 : fullPreventive.examsexpect
                      }
                      max="100"
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="examsdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          examsdone: e.target.value,
                          fullPreventive: {
                            examsdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          wiexpect: e.target.value,
                          fullPreventive: {
                            wiexpect: e.target.value,
                          },
                        })
                      }
                      value={
                        fullPreventive === null ? 0 : fullPreventive.wiexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="widone">Realizado</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          widone: e.target.value,
                          fullPreventive: {
                            widone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          checklistexpect: e.target.value,
                          fullPreventive: {
                            checklistexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          checklistdone: e.target.value,
                          fullPreventive: {
                            checklistdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          driverexpect: e.target.value,
                          fullPreventive: {
                            driverexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          driverdone: e.target.value,
                          fullPreventive: {
                            driverdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          maintenanceexpect: e.target.value,
                          fullPreventive: {
                            maintenanceexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          maintenancedone: e.target.value,
                          fullPreventive: {
                            maintenancedone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          emergencyequipexpect: e.target.value,
                          fullPreventive: {
                            emergencyequipexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          emergencyequipdone: e.target.value,
                          fullPreventive: {
                            emergencyequipdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          actionontimeexpect: e.target.value,
                          fullPreventive: {
                            actionontimeexpect: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          aciontontimedone: e.target.value,
                          fullPreventive: {
                            aciontontimedone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          tifrexpect: e.target.value,
                          fullPreventive: {
                            tifrexpect: e.target.value,
                          },
                        })
                      }
                      value={
                        fullPreventive === null ? 0 : fullPreventive.tifrexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="tifrdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          tifrdone: e.target.value,
                          fullPreventive: {
                            tifrdone: e.target.value,
                          },
                        })
                      }
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
                      onChange={e =>
                        this.setState({
                          ltifrexpect: e.target.value,
                          fullPreventive: {
                            ltifrexpect: e.target.value,
                          },
                        })
                      }
                      value={
                        fullPreventive === null ? 0 : fullPreventive.ltifrexpect
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <LabelInput htmlFor="ltifrdone">Realizado</LabelInput>
                    <InputNumber
                      onChange={e =>
                        this.setState({
                          ltifrdone: e.target.value,
                          fullPreventive: {
                            ltifrdone: e.target.value,
                          },
                        })
                      }
                      value={
                        fullPreventive === null ? 0 : fullPreventive.ltifrdone
                      }
                    />
                  </FormGroup>
                </Row>

                <IPContainer>
                  <h2>Resultado Final: {fullPreventive.finalresult}</h2>
                </IPContainer>
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
