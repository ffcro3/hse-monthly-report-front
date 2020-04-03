import React, { Component } from 'react';

import api from '../../services/api';
import { monthData } from '../../services/monthActual';

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
import {
  SelectInputFourth,
  InputText,
  InputTextTriple,
  InputNumberFourth,
  InputTextFourth,
} from '../Ergo/styles';
import { InputDateFourth } from '../Restrictions/styles';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    reportData: [],
    fullCAT: [],
    page: 9,
    had: '',
    number: '',
    emission1: '',
    justify1: '',
    date1: '',
    dateemission1: '',
    type1: '',
    catnumber1: '',
    type3emission2: '',
    justify2: '',
    date2: '',
    dateemission2: '',
    type2: '',
    catnumber2: '',
    emission3: '',
    justify3: '',
    date3: '',
    dateemission3: '',
    type3: '',
    catnumber3: '',
    emission4: '',
    justify4: '',
    date4: '',
    dateemission4: '',
    type4: '',
    catnumber4: '',
    emission5: '',
    justify5: '',
    date5: '',
    dateemission5: '',
    type5: '',
    catnumber5: '',
    emission6: '',
    justify6: '',
    date6: '',
    dateemission6: '',
    type6: '',
    catnumber6: '',
    emission7: '',
    justify7: '',
    date7: '',
    dateemission7: '',
    type7: '',
    catnumber7: '',
    justifyExceed: '',
    catNumberJustify: '',
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
      fullCAT: JSON.parse(JSON.stringify(response.data[9])),
    });

    console.log(this.state.reportData);

    window.beforeunload = e => {
      console.log('Stop this');
      e.preventDefault();
      e.returnValue = '';
    };

    await this.setState({
      had: this.state.fullCAT === null ? '' : this.state.fullCAT.had,
      number: this.state.fullCAT === null ? '' : this.state.fullCAT.number,
      emission1:
        this.state.fullCAT === null ? '' : this.state.fullCAT.emission1,
      justify1: this.state.fullCAT === null ? '' : this.state.fullCAT.justify1,
      date1: this.state.fullCAT === null ? '' : this.state.fullCAT.date1,
      dateemission1:
        this.state.fullCAT === null ? '' : this.state.fullCAT.dateemission1,
      type1: this.state.fullCAT === null ? '' : this.state.fullCAT.type1,
      catnumber1:
        this.state.fullCAT === null ? '' : this.state.fullCAT.catnumber1,
      emission2:
        this.state.fullCAT === null ? '' : this.state.fullCAT.emission2,
      justify2: this.state.fullCAT === null ? '' : this.state.fullCAT.justify2,
      date2: this.state.fullCAT === null ? '' : this.state.fullCAT.date2,
      dateemission2:
        this.state.fullCAT === null ? '' : this.state.fullCAT.dateemission2,
      type2: this.state.fullCAT === null ? '' : this.state.fullCAT.type2,
      cattype22:
        this.state.fullCAT === null ? '' : this.state.fullCAT.catnumber2,
      emission3:
        this.state.fullCAT === null ? '' : this.state.fullCAT.emission3,
      justify3: this.state.fullCAT === null ? '' : this.state.fullCAT.justify3,
      date3: this.state.fullCAT === null ? '' : this.state.fullCAT.date3,
      dateemission3:
        this.state.fullCAT === null ? '' : this.state.fullCAT.dateemission3,
      type3: this.state.fullCAT === null ? '' : this.state.fullCAT.type3,
      cattype33:
        this.state.fullCAT === null ? '' : this.state.fullCAT.catnumber3,
      emission4:
        this.state.fullCAT === null ? '' : this.state.fullCAT.emission4,
      justify4: this.state.fullCAT === null ? '' : this.state.fullCAT.justify4,
      date4: this.state.fullCAT === null ? '' : this.state.fullCAT.date4,
      dateemission4:
        this.state.fullCAT === null ? '' : this.state.fullCAT.dateemission4,
      type4: this.state.fullCAT === null ? '' : this.state.fullCAT.type4,
      cattype44:
        this.state.fullCAT === null ? '' : this.state.fullCAT.catnumber4,
      emission5:
        this.state.fullCAT === null ? '' : this.state.fullCAT.emission5,
      justify5: this.state.fullCAT === null ? '' : this.state.fullCAT.justify5,
      date5: this.state.fullCAT === null ? '' : this.state.fullCAT.date5,
      dateemission5:
        this.state.fullCAT === null ? '' : this.state.fullCAT.dateemission5,
      type5: this.state.fullCAT === null ? '' : this.state.fullCAT.type5,
      cattype55:
        this.state.fullCAT === null ? '' : this.state.fullCAT.catnumber5,
      emission6:
        this.state.fullCAT === null ? '' : this.state.fullCAT.emission6,
      justify6: this.state.fullCAT === null ? '' : this.state.fullCAT.justify6,
      date6: this.state.fullCAT === null ? '' : this.state.fullCAT.date6,
      dateemission6:
        this.state.fullCAT === null ? '' : this.state.fullCAT.dateemission6,
      type6: this.state.fullCAT === null ? '' : this.state.fullCAT.type6,
      cattype66:
        this.state.fullCAT === null ? '' : this.state.fullCAT.catnumber6,
      emission7:
        this.state.fullCAT === null ? '' : this.state.fullCAT.emission7,
      justify7: this.state.fullCAT === null ? '' : this.state.fullCAT.justify7,
      date7: this.state.fullCAT === null ? '' : this.state.fullCAT.date7,
      dateemission7:
        this.state.fullCAT === null ? '' : this.state.fullCAT.dateemission7,
      type7: this.state.fullCAT === null ? '' : this.state.fullCAT.type7,
      cattype77:
        this.state.fullCAT === null ? '' : this.state.fullCAT.catnumber7,
    });

    console.log(this.state.fullCAT);
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
      fullRestrictions: {
        number: 7,
      },
    });
  }

  async Justify() {
    const sendMail = await api.post('/justify/cat', {
      user: this.state.reportData.responsible,
      site: this.state.reportData.siteName,
      responsible: this.state.reportData.responsible,
      cat: this.state.catNumberJustify,
      justify: this.state.justifyExceed,
    });

    console.log(sendMail);

    await this.setState({
      error: '',
      number: 0,
      had: 'Excedido',
      fullCAT: {
        number: this.state.catNumberJustify,
      },
    });
  }

  async handleForm() {
    const insertCAT = await api.post('/cat', {
      reportid: this.state.actualReport,
      had: this.state.had,
      number: this.state.number,
      emission1: this.state.emission1,
      justify1: this.state.justify1,
      date1: this.state.date1,
      dateemission1: this.state.dateemission1,
      type1: this.state.type1,
      catnumber1: this.state.catnumber1,
      emission2: this.state.emission2,
      justify2: this.state.justify2,
      date2: this.state.date2,
      dateemission2: this.state.dateemission2,
      type2: this.state.type2,
      catnumber2: this.state.catnumber2,
      emission3: this.state.emission3,
      justify3: this.state.justify3,
      date3: this.state.date3,
      dateemission3: this.state.dateemission3,
      type3: this.state.type3,
      catnumber3: this.state.catnumber3,
      emission4: this.state.emission4,
      justify4: this.state.justify4,
      date4: this.state.date4,
      dateemission4: this.state.dateemission4,
      type4: this.state.type4,
      catnumber4: this.state.catnumber4,
      emission5: this.state.emission5,
      justify5: this.state.justify5,
      date5: this.state.date5,
      dateemission5: this.state.dateemission5,
      type5: this.state.type5,
      catnumber5: this.state.catnumber5,
      emission6: this.state.emission6,
      justify6: this.state.justify6,
      date6: this.state.date6,
      dateemission6: this.state.dateemission6,
      type6: this.state.type6,
      catnumber6: this.state.catnumber6,
      emission7: this.state.emission7,
      justify7: this.state.justify7,
      date7: this.state.date7,
      dateemission7: this.state.dateemission7,
      type7: this.state.type7,
      catnumber7: this.state.catnumber7,
    });

    const loginpath = `/report-mensal/gogreen/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/restrictions/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const { error, reportData, fullCAT, page, had, number } = this.state;
    const date = monthData.monthAll;
    if (error === 'Você deixou campos em branco.') {
      return (
        <>
          <Error>
            <ErrorTitle>Existem campos em branco. </ErrorTitle>
            <ErrorSubTitle>Por favor, corrija.</ErrorSubTitle>
            <BackButton onClick={() => this.fixError()}>Corrigir</BackButton>
            <FowardButton onClick={() => this.fixError()}>
              Cancelar
            </FowardButton>
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
            <BackButton onClick={() => this.fixError()}>Cancelar</BackButton>
          </Error>
        </>
      );
    }

    if (error === 'Existem mais de 7  de 7 CAT abertas.') {
      return (
        <>
          <Error>
            <ErrorContainer>
              <ErrorTitle>Existem mais de 7 CAT abertas. </ErrorTitle>
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
    if (page === 9) {
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
                  <PageSubTitle>Data Final: {monthData.finalDate}</PageSubTitle>
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
                <ReportTitle>CAT</ReportTitle>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="had">
                      O site possui acidente com lesão ou doença ocupacional?
                    </LabelInput>
                    <SelectInput
                      onChange={e =>
                        this.setState({
                          had: e.target.value,
                          fullCAT: {
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
                        Número de acidentes com lesão
                      </LabelInput>
                      <InputNumber
                        onChange={e =>
                          this.setState({
                            number: e.target.value,
                            catNumberJustify: e.target.value,
                            fullCAT: {
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

                {had === 'Sim' && number >= 1 ? (
                  <>
                    <ItemContainer style={{ marginBottom: '10px' }}>
                      <IPTitle>CAT 1</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>CAT Emitida?</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              emission1: e.target.value,
                              fullCAT: {
                                emission1: e.target.value,
                              },
                            })
                          }
                          value={this.state.emission1}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Sim">Sim</Option>
                          <Option value="Não">Não</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Justitificativa</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              justify1: e.target.value,
                              fullCAT: {
                                justify1: e.target.value,
                              },
                            })
                          }
                          value={this.state.justify1}
                          style={{ width: '720px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-15px' }}>
                      <FormGroup>
                        <LabelInput>Data do acidente</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              date1: e.target.value,
                              fullCAT: {
                                date1: e.target.value,
                              },
                            })
                          }
                          value={this.state.date1}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Data de emissão da CAT</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              dateemission1: e.target.value,
                              fullCAT: {
                                dateemission1: e.target.value,
                              },
                            })
                          }
                          value={this.state.dateemission1}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Tipo do acidente</LabelInput>
                        <SelectInput
                          onChange={e =>
                            this.setState({
                              type1: e.target.value,
                              fullCAT: {
                                type1: e.target.value,
                              },
                            })
                          }
                          value={this.state.type1}
                          style={{ width: '200px' }}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Acidente de Trajeto">
                            Acidente de Trajeto
                          </Option>
                          <Option value="Acidente de Trabalho">
                            Acidente de Trabalho
                          </Option>
                          <Option value="Doença Ocupacional">
                            Doença Ocupacional
                          </Option>
                        </SelectInput>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Número da CAT</LabelInput>
                        <InputTextFourth
                          onChange={e =>
                            this.setState({
                              catnumber1: e.target.value,
                              fullCAT: {
                                catnumber1: e.target.value,
                              },
                            })
                          }
                          value={this.state.catnumber1}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {had === 'Sim' && number >= 2 ? (
                  <>
                    <ItemContainer style={{ marginBottom: '10px' }}>
                      <IPTitle>CAT 2</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>CAT Emitida?</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              emission2: e.target.value,
                              fullCAT: {
                                emission2: e.target.value,
                              },
                            })
                          }
                          value={this.state.emission2}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Sim">Sim</Option>
                          <Option value="Não">Não</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Justitificativa</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              justify2: e.target.value,
                              fullCAT: {
                                justify2: e.target.value,
                              },
                            })
                          }
                          value={this.state.justify2}
                          style={{ width: '720px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-15px' }}>
                      <FormGroup>
                        <LabelInput>Data do acidente</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              date2: e.target.value,
                              fullCAT: {
                                date2: e.target.value,
                              },
                            })
                          }
                          value={this.state.date2}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Data de emissão da CAT</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              dateemission2: e.target.value,
                              fullCAT: {
                                dateemission2: e.target.value,
                              },
                            })
                          }
                          value={this.state.emission2}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Tipo do acidente</LabelInput>
                        <SelectInput
                          onChange={e =>
                            this.setState({
                              dateemission2: e.target.value,
                              fullCAT: {
                                dateemission2: e.target.value,
                              },
                            })
                          }
                          value={this.state.dateemission2}
                          style={{ width: '200px' }}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Acidente de Trajeto">
                            Acidente de Trajeto
                          </Option>
                          <Option value="Acidente de Trabalho">
                            Acidente de Trabalho
                          </Option>
                          <Option value="Doença Ocupacional">
                            Doença Ocupacional
                          </Option>
                        </SelectInput>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Número da CAT</LabelInput>
                        <InputTextFourth
                          onChange={e =>
                            this.setState({
                              catnumber2: e.target.value,
                              fullCAT: {
                                catnumber2: e.target.value,
                              },
                            })
                          }
                          value={this.state.catnumber2}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {had === 'Sim' && number >= 3 ? (
                  <>
                    <ItemContainer style={{ marginBottom: '10px' }}>
                      <IPTitle>CAT 3</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>CAT Emitida?</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              emission3: e.target.value,
                              fullCAT: {
                                emission3: e.target.value,
                              },
                            })
                          }
                          value={this.state.emission3}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Sim">Sim</Option>
                          <Option value="Não">Não</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Justitificativa</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              justify3: e.target.value,
                              fullCAT: {
                                justify3: e.target.value,
                              },
                            })
                          }
                          value={this.state.justify3}
                          style={{ width: '720px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-15px' }}>
                      <FormGroup>
                        <LabelInput>Data do acidente</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              date3: e.target.value,
                              fullCAT: {
                                date3: e.target.value,
                              },
                            })
                          }
                          value={this.state.date3}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Data de emissão da CAT</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              dateemission3: e.target.value,
                              fullCAT: {
                                dateemission3: e.target.value,
                              },
                            })
                          }
                          value={this.state.dateemission3}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Tipo do acidente</LabelInput>
                        <SelectInput
                          onChange={e =>
                            this.setState({
                              type3: e.target.value,
                              fullCAT: {
                                type3: e.target.value,
                              },
                            })
                          }
                          value={this.state.type3}
                          style={{ width: '200px' }}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Acidente de Trajeto">
                            Acidente de Trajeto
                          </Option>
                          <Option value="Acidente de Trabalho">
                            Acidente de Trabalho
                          </Option>
                          <Option value="Doença Ocupacional">
                            Doença Ocupacional
                          </Option>
                        </SelectInput>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Número da CAT</LabelInput>
                        <InputTextFourth
                          onChange={e =>
                            this.setState({
                              catnumber3: e.target.value,
                              fullCAT: {
                                catnumber3: e.target.value,
                              },
                            })
                          }
                          value={this.state.catnumber3}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {had === 'Sim' && number >= 4 ? (
                  <>
                    <ItemContainer style={{ marginBottom: '10px' }}>
                      <IPTitle>CAT 4</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>CAT Emitida?</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              emission4: e.target.value,
                              fullCAT: {
                                emission4: e.target.value,
                              },
                            })
                          }
                          value={this.state.emission4}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Sim">Sim</Option>
                          <Option value="Não">Não</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Justitificativa</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              justify4: e.target.value,
                              fullCAT: {
                                justify4: e.target.value,
                              },
                            })
                          }
                          value={this.state.justify4}
                          style={{ width: '720px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-15px' }}>
                      <FormGroup>
                        <LabelInput>Data do acidente</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              date4: e.target.value,
                              fullCAT: {
                                date4: e.target.value,
                              },
                            })
                          }
                          value={this.state.date4}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Data de emissão da CAT</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              dateemission4: e.target.value,
                              fullCAT: {
                                dateemission4: e.target.value,
                              },
                            })
                          }
                          value={this.state.dateemission4}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Tipo do acidente</LabelInput>
                        <SelectInput
                          onChange={e =>
                            this.setState({
                              type4: e.target.value,
                              fullCAT: {
                                type4: e.target.value,
                              },
                            })
                          }
                          value={this.state.type4}
                          style={{ width: '200px' }}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Acidente de Trajeto">
                            Acidente de Trajeto
                          </Option>
                          <Option value="Acidente de Trabalho">
                            Acidente de Trabalho
                          </Option>
                          <Option value="Doença Ocupacional">
                            Doença Ocupacional
                          </Option>
                        </SelectInput>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Número da CAT</LabelInput>
                        <InputTextFourth
                          onChange={e =>
                            this.setState({
                              catnumber4: e.target.value,
                              fullCAT: {
                                catnumber4: e.target.value,
                              },
                            })
                          }
                          value={this.state.catnumber4}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {had === 'Sim' && number >= 5 ? (
                  <>
                    <ItemContainer style={{ marginBottom: '10px' }}>
                      <IPTitle>CAT 5</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>CAT Emitida?</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              emission5: e.target.value,
                              fullCAT: {
                                emission5: e.target.value,
                              },
                            })
                          }
                          value={this.state.emission5}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Sim">Sim</Option>
                          <Option value="Não">Não</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Justitificativa</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              justify5: e.target.value,
                              fullCAT: {
                                justify5: e.target.value,
                              },
                            })
                          }
                          value={this.state.justify5}
                          style={{ width: '720px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-15px' }}>
                      <FormGroup>
                        <LabelInput>Data do acidente</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              date5: e.target.value,
                              fullCAT: {
                                date5: e.target.value,
                              },
                            })
                          }
                          value={this.state.date5}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Data de emissão da CAT</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              dateemission5: e.target.value,
                              fullCAT: {
                                dateemission5: e.target.value,
                              },
                            })
                          }
                          value={this.state.dateemission5}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Tipo do acidente</LabelInput>
                        <SelectInput
                          onChange={e =>
                            this.setState({
                              type5: e.target.value,
                              fullCAT: {
                                type5: e.target.value,
                              },
                            })
                          }
                          value={this.state.type5}
                          style={{ width: '200px' }}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Acidente de Trajeto">
                            Acidente de Trajeto
                          </Option>
                          <Option value="Acidente de Trabalho">
                            Acidente de Trabalho
                          </Option>
                          <Option value="Doença Ocupacional">
                            Doença Ocupacional
                          </Option>
                        </SelectInput>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Número da CAT</LabelInput>
                        <InputTextFourth
                          onChange={e =>
                            this.setState({
                              catnumber5: e.target.value,
                              fullCAT: {
                                catnumber5: e.target.value,
                              },
                            })
                          }
                          value={this.state.catnumber5}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {had === 'Sim' && number >= 6 ? (
                  <>
                    <ItemContainer style={{ marginBottom: '10px' }}>
                      <IPTitle>CAT 6</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>CAT Emitida?</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              emission6: e.target.value,
                              fullCAT: {
                                emission6: e.target.value,
                              },
                            })
                          }
                          value={this.state.emission6}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Sim">Sim</Option>
                          <Option value="Não">Não</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Justitificativa</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              justify6: e.target.value,
                              fullCAT: {
                                justify6: e.target.value,
                              },
                            })
                          }
                          value={this.state.justify6}
                          style={{ width: '720px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-15px' }}>
                      <FormGroup>
                        <LabelInput>Data do acidente</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              date6: e.target.value,
                              fullCAT: {
                                date6: e.target.value,
                              },
                            })
                          }
                          value={this.state.date6}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Data de emissão da CAT</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              dateemission6: e.target.value,
                              fullCAT: {
                                dateemission6: e.target.value,
                              },
                            })
                          }
                          value={this.state.dateemission6}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Tipo do acidente</LabelInput>
                        <SelectInput
                          onChange={e =>
                            this.setState({
                              type6: e.target.value,
                              fullCAT: {
                                type6: e.target.value,
                              },
                            })
                          }
                          value={this.state.type6}
                          style={{ width: '200px' }}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Acidente de Trajeto">
                            Acidente de Trajeto
                          </Option>
                          <Option value="Acidente de Trabalho">
                            Acidente de Trabalho
                          </Option>
                          <Option value="Doença Ocupacional">
                            Doença Ocupacional
                          </Option>
                        </SelectInput>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Número da CAT</LabelInput>
                        <InputTextFourth
                          onChange={e =>
                            this.setState({
                              catnumber6: e.target.value,
                              fullCAT: {
                                catnumber6: e.target.value,
                              },
                            })
                          }
                          value={this.state.catnumber6}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {had === 'Sim' && number === 7 ? (
                  <>
                    <ItemContainer style={{ marginBottom: '10px' }}>
                      <IPTitle>CAT 7</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>CAT Emitida?</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              emission7: e.target.value,
                              fullCAT: {
                                emission7: e.target.value,
                              },
                            })
                          }
                          value={this.state.emission7}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Sim">Sim</Option>
                          <Option value="Não">Não</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Justitificativa</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              justify7: e.target.value,
                              fullCAT: {
                                justify7: e.target.value,
                              },
                            })
                          }
                          value={this.state.justify7}
                          style={{ width: '720px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-15px' }}>
                      <FormGroup>
                        <LabelInput>Data do acidente</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              date7: e.target.value,
                              fullCAT: {
                                date7: e.target.value,
                              },
                            })
                          }
                          value={this.state.date7}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Data de emissão da CAT</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              dateemission7: e.target.value,
                              fullCAT: {
                                dateemission7: e.target.value,
                              },
                            })
                          }
                          value={this.state.dateemission7}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Tipo do acidente</LabelInput>
                        <SelectInput
                          onChange={e =>
                            this.setState({
                              type7: e.target.value,
                              fullCAT: {
                                type7: e.target.value,
                              },
                            })
                          }
                          value={this.state.type7}
                          style={{ width: '200px' }}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Acidente de Trajeto">
                            Acidente de Trajeto
                          </Option>
                          <Option value="Acidente de Trabalho">
                            Acidente de Trabalho
                          </Option>
                          <Option value="Doença Ocupacional">
                            Doença Ocupacional
                          </Option>
                        </SelectInput>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Número da CAT</LabelInput>
                        <InputTextFourth
                          onChange={e =>
                            this.setState({
                              catnumber7: e.target.value,
                              fullCAT: {
                                catnumber7: e.target.value,
                              },
                            })
                          }
                          value={this.state.catnumber7}
                          style={{ width: '200px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {had === 'Sim' && number > 7
                  ? this.setState({
                      error: 'Existem mais de 7  de 7 CAT abertas.',
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
