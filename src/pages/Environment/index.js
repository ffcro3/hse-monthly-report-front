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
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    reportData: [],
    fullEnvironment: [],
    page: 2,
    dhlowned: '',
    water: '',
    energy: '',
    lgpforklift: '',
    lgpdining: '',
    diesel: '',
    gasoline: '',
    r22: '',
    r402b: '',
    r407c: '',
    r404a: '',
    r134a: '',
    paper: '',
    plastic: '',
    metal: '',
    glass: '',
    organic: '',
    batterymhe: '',
    battery: '',
    lights: '',
    tires: '',
    motoroil: '',
    kitchenoil: '',
    ete: '',
    effluent: '',
    wood: '',
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
      dhlowned:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.dhlowned,
      water:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.water,
      energy:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.energy,
      lgpforklift:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.lgpforklift,
      lgpdining:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.lgpdining,
      diesel:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.diesel,
      gasoline:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.gasoline,
      r22:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.r22,
      r402b:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.r402b,
      r407c:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.r407c,
      r404a:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.r404a,
      r134a:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.r134a,
      paper:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.paper,
      plastic:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.plastic,
      metal:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.metal,
      glass:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.glass,
      organic:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.organic,
      batterymhe:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.batterymhe,
      battery:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.battery,
      lights:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.lights,
      tires:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.tires,
      motoroil:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.motoroil,
      kitchenoil:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.kitchenoil,
      ete:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.ete,
      effluent:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.effluent,
      wood:
        this.state.fullEnvironment === null
          ? ''
          : this.state.fullEnvironment.wood,
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
      dhlowned: this.state.dhlowned,
      water: this.state.water,
      energy: this.state.energy,
      lgpforklift: this.state.lgpforklift,
      lgpdining: this.state.lgpdining,
      diesel: this.state.diesel,
      gasoline: this.state.gasoline,
      r22: this.state.r22,
      r402b: this.state.r402b,
      r407c: this.state.r407c,
      r404a: this.state.r404a,
      r134a: this.state.r134a,
      paper: this.state.paper,
      plastic: this.state.plastic,
      metal: this.state.metal,
      glass: this.state.glass,
      organic: this.state.organic,
      batterymhe: this.state.batterymhe,
      battery: this.state.battery,
      lights: this.state.lights,
      tires: this.state.tires,
      motoroil: this.state.motoroil,
      kitchenoil: this.state.kitchenoil,
      ete: this.state.ete,
      effluent: this.state.effluent,
      wood: this.state.wood,
    });

    const loginpath = `/report-mensal/preventive-index/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/monthly/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const { error, reportData, fullEnvironment, page, dhlowned } = this.state;
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
    if (page === 2) {
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
                <ReportTitle>Report Ambiental</ReportTitle>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="dhlowned">Consumo DHL?</LabelInput>
                    <SelectInput
                      onChange={e =>
                        this.setState({
                          dhlowned: e.target.value,
                          water: null,
                          energy: null,
                          lgpforklift: null,
                          lgpdining: null,
                          diesel: null,
                          gasoline: null,
                          r22: null,
                          r402b: null,
                          r407c: null,
                          r404a: null,
                          r134a: null,
                          paper: null,
                          plastic: null,
                          metal: null,
                          glass: null,
                          organic: null,
                          batterymhe: null,
                          battery: null,
                          lights: null,
                          tires: null,
                          motoroil: null,
                          kitchenoil: null,
                          ete: null,
                          effluent: null,
                          wood: null,
                          fullEnvironment: {
                            dhlowned: e.target.value,
                            water: null,
                            energy: null,
                            lgpforklift: null,
                            lgpdining: null,
                            diesel: null,
                            gasoline: null,
                            r22: null,
                            r402b: null,
                            r407c: null,
                            r404a: null,
                            r134a: null,
                            paper: null,
                            plastic: null,
                            metal: null,
                            glass: null,
                            organic: null,
                            batterymhe: null,
                            battery: null,
                            lights: null,
                            tires: null,
                            motoroil: null,
                            kitchenoil: null,
                            ete: null,
                            effluent: null,
                            wood: null,
                          },
                        })
                      }
                      value={
                        fullEnvironment === null ? '' : fullEnvironment.dhlowned
                      }
                    >
                      <Option value="Selecione" selected readonly>
                        Selecione
                      </Option>
                      <Option value="Sim">Sim</Option>
                      <Option value="Não">Não</Option>
                    </SelectInput>
                  </FormGroup>
                </Row>

                {dhlowned === 'Sim' ? (
                  <>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="water">Água (litros)</LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              water: e.target.value,
                              fullEnvironment: {
                                water: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.water
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="energy">Energia (kWh)</LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              energy: e.target.value,
                              fullEnvironment: {
                                energy: e.target.energy,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.energy
                          }
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="lgpforklift">
                          Consumo de gás GLP Empilhadeira (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              lgpforklift: e.target.value,
                              fullEnvironment: {
                                lgpforklift: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.lgpforklift
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="lgpdining">
                          Consumo de GLP Refeitório (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              lgpdining: e.target.value,
                              fullEnvironment: {
                                lgpdining: e.target.lgpdining,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.lgpdining
                          }
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="gasoline">
                          Consumo de gasolina (litros)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              gasoline: e.target.value,
                              fullEnvironment: {
                                gasoline: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.gasoline
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="r22">
                          Consumo de gás - R22 (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              r22: e.target.value,
                              fullEnvironment: {
                                r22: e.target.r22,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.r22
                          }
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="r402b">
                          Consumo de gás R402-B (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              r402b: e.target.value,
                              fullEnvironment: {
                                r402b: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.r402b
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="r407c">
                          Consumo de gás - R407-C (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              r407c: e.target.value,
                              fullEnvironment: {
                                r407c: e.target.r407c,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.r407c
                          }
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="r134a">
                          Consumo de gás R134-A (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              r134a: e.target.value,
                              fullEnvironment: {
                                r134a: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.r134a
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="r404a">
                          Consumo de gás R404-A (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              r404a: e.target.value,
                              fullEnvironment: {
                                r404a: e.target.r404a,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.r404a
                          }
                        />
                      </FormGroup>
                    </Row>

                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="plastic">Plástico (kg)</LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              plastic: e.target.value,
                              fullEnvironment: {
                                plastic: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.plastic
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="metal">Metal (kg)</LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              metal: e.target.value,
                              fullEnvironment: {
                                metal: e.target.metal,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.metal
                          }
                        />
                      </FormGroup>
                    </Row>

                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="glass">Vidro (kg)</LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              glass: e.target.value,
                              fullEnvironment: {
                                glass: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.glass
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="organic">
                          Resíduo orgânico (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              organic: e.target.value,
                              fullEnvironment: {
                                organic: e.target.organic,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.organic
                          }
                        />
                      </FormGroup>
                    </Row>

                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="batterymhe">
                          Baterias de equipamentos móveis (unidades)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              batterymhe: e.target.value,
                              fullEnvironment: {
                                batterymhe: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.batterymhe
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="battery">
                          Pilhas e Baterias (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              battery: e.target.value,
                              fullEnvironment: {
                                battery: e.target.battery,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.battery
                          }
                        />
                      </FormGroup>
                    </Row>

                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="lights">
                          Lãmpadas Flourescentes (unidades)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              lights: e.target.value,
                              fullEnvironment: {
                                lights: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.lights
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="tires">
                          Pneus (unidades)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              tires: e.target.value,
                              fullEnvironment: {
                                tires: e.target.tires,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.tires
                          }
                        />
                      </FormGroup>
                    </Row>

                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="motoroil">
                          Óleo de motor (litros)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              motoroil: e.target.value,
                              fullEnvironment: {
                                motoroil: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.motoroil
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="kitchenoil">
                          Óleo de cozinha (litros)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              kitchenoil: e.target.value,
                              fullEnvironment: {
                                kitchenoil: e.target.kitchenoil,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.kitchenoil
                          }
                        />
                      </FormGroup>
                    </Row>

                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="ete">Lodo ETE (kg)</LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              ete: e.target.value,
                              fullEnvironment: {
                                ete: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.ete
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="effluent">
                          Efluentes (m³)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              effluent: e.target.value,
                              fullEnvironment: {
                                effluent: e.target.effluent,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.effluent
                          }
                        />
                      </FormGroup>
                    </Row>

                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="wood">Madeira (m³)</LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              wood: e.target.value,
                              fullEnvironment: {
                                wood: e.target.value,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.wood
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="paper">
                          Papel / Papelão (kg)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              paper: e.target.value,
                              fullEnvironment: {
                                paper: e.target.paper,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null ? 0 : fullEnvironment.paper
                          }
                        />
                      </FormGroup>
                    </Row>

                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="diesel">
                          Diesel (litros)
                        </LabelInput>
                        <InputNumber
                          onChange={e =>
                            this.setState({
                              diesel: e.target.value,
                              fullEnvironment: {
                                diesel: e.target.diesel,
                              },
                            })
                          }
                          value={
                            fullEnvironment === null
                              ? 0
                              : fullEnvironment.diesel
                          }
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
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
