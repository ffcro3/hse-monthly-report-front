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
  InputNumberFourth,
  SelectInputFourth,
  SelectInputTriple,
  InputText,
  InputTextFourth,
  InputTextTriple,
  ErrorFooter,
  Justify,
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';
import { ErrorContainer } from '../Away/styles';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    reportData: [],
    fullErgo: [],
    page: 6,
    result: '',
    actions: '',
    implemented: '',
    notimplemented: '',
    code1: '',
    implementation1: '',
    phase1: '',
    action1: '',
    code2: '',
    implementation2: '',
    phase2: '',
    action2: '',
    code3: '',
    implementation3: '',
    phase3: '',
    action3: '',
    code4: '',
    implementation4: '',
    phase4: '',
    action4: '',
    code5: '',
    implementation5: '',
    phase5: '',
    action5: '',
    code6: '',
    implementation6: '',
    phase6: '',
    action6: '',
    code7: '',
    implementation7: '',
    phase7: '',
    action7: '',
    justifyExceed: '',
    ergoNumberJustify: '',
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
      fullErgo: JSON.parse(JSON.stringify(response.data[6])),
    });

    console.log(response);

    window.beforeunload = e => {
      console.log('Stop this');
      e.preventDefault();
      e.returnValue = '';
    };

    await this.setState({
      result: this.state.fullErgo === null ? '' : this.state.fullErgo.result,
      actions: this.state.fullErgo === null ? '' : this.state.fullErgo.actions,
      implemented:
        this.state.fullErgo === null ? '' : this.state.fullErgo.implemented,
      notimplemented:
        this.state.fullErgo === null ? '' : this.state.fullErgo.notimplemented,
      code1: this.state.fullErgo === null ? '' : this.state.fullErgo.code1,
      implementation1:
        this.state.fullErgo === null ? '' : this.state.fullErgo.implementation1,
      phase1: this.state.fullErgo === null ? '' : this.state.fullErgo.phase1,
      action1: this.state.fullErgo === null ? '' : this.state.fullErgo.action1,
      code2: this.state.fullErgo === null ? '' : this.state.fullErgo.code2,
      implementation2:
        this.state.fullErgo === null ? '' : this.state.fullErgo.implementation2,
      phase2: this.state.fullErgo === null ? '' : this.state.fullErgo.phase2,
      action2: this.state.fullErgo === null ? '' : this.state.fullErgo.acion2,
      code3: this.state.fullErgo === null ? '' : this.state.fullErgo.code3,
      implementation3:
        this.state.fullErgo === null ? '' : this.state.fullErgo.implementation3,
      phase3: this.state.fullErgo === null ? '' : this.state.fullErgo.phase3,
      action3: this.state.fullErgo === null ? '' : this.state.fullErgo.action3,
      code4: this.state.fullErgo === null ? '' : this.state.fullErgo.code4,
      implementation4:
        this.state.fullErgo === null ? '' : this.state.fullErgo.implementation4,
      phase4: this.state.fullErgo === null ? '' : this.state.fullErgo.phase4,
      action4: this.state.fullErgo === null ? '' : this.state.fullErgo.action4,
      code5: this.state.fullErgo === null ? '' : this.state.fullErgo.code5,
      implementation5:
        this.state.fullErgo === null ? '' : this.state.fullErgo.implementation5,
      phase5: this.state.fullErgo === null ? '' : this.state.fullErgo.phase5,
      action5: this.state.fullErgo === null ? '' : this.state.fullErgo.action5,
      code6: this.state.fullErgo === null ? '' : this.state.fullErgo.code6,
      implementation6:
        this.state.fullErgo === null ? '' : this.state.fullErgo.implementation6,
      phase6: this.state.fullErgo === null ? '' : this.state.fullErgo.phase6,
      action6: this.state.fullErgo === null ? '' : this.state.fullErgo.action6,
      code7: this.state.fullErgo === null ? '' : this.state.fullErgo.code7,
      implementation7:
        this.state.fullErgo === null ? '' : this.state.fullErgo.implementation7,
      phase7: this.state.fullErgo === null ? '' : this.state.fullErgo.phase7,
      action7: this.state.fullErgo === null ? '' : this.state.fullErgo.action7,
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

  async fixError() {
    await this.setState({
      notimplemented: 7,
      error: '',
      fullErgo: {
        notimplemented: 7,
      },
    });
  }

  async Justify() {
    const sendMail = await api.post('/justify/ergo', {
      user: this.state.reportData.responsible,
      site: this.state.reportData.siteName,
      responsible: this.state.reportData.responsible,
      ergo: this.state.ergoNumberJustify,
      justify: this.state.justifyExceed,
    });

    console.log(sendMail);

    await this.setState({
      error: '',
      notimplemented: 0,
      implemented: 'Excedido',
      fullErgo: {
        notimplemented: this.state.ergoNumberJustify,
      },
    });
  }

  async handleForm() {
    const insertErgo = await api.post('/ergo17', {
      reportid: this.state.actualReport,
      result: this.state.result,
      actions: this.state.actions,
      implemented: this.state.implemented,
      notimplemented: this.state.notimplemented,
      code1: this.state.code1,
      implementation1: this.state.implementation1,
      phase1: this.state.phase1,
      action1: this.state.action1,
      code2: this.state.code2,
      implementation2: this.state.implementation2,
      phase2: this.state.phase2,
      action2: this.state.action2,
      code3: this.state.code3,
      implementation3: this.state.resimplementation3ult,
      phase3: this.state.phase3,
      action3: this.state.action3,
      code4: this.state.recode4sult,
      implementation4: this.state.implementation4,
      phase4: this.state.phase4,
      action4: this.state.action4,
      code5: this.state.code5,
      implementation5: this.state.implementation5,
      phase5: this.state.phase5,
      action5: this.state.action5,
      code6: this.state.code6,
      implementation6: this.state.implementation6,
      phase6: this.state.phase6,
      action6: this.state.action6,
      code7: this.state.code7,
      implementation7: this.state.implementation7,
      phase7: this.state.phase7,
      action7: this.state.action7,
    });

    const loginpath = `/report-mensal/archive/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/away/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const {
      error,
      reportData,
      fullErgo,
      notimplemented,
      page,
      implemented,
    } = this.state;
    const date = 'Janeiro 2020';
    if (error === 'Existem mais de 7 ações não implementadas.') {
      return (
        <>
          <Error>
            <ErrorContainer>
              <ErrorTitle>
                Existem mais de 7 ações não implementadas.{' '}
              </ErrorTitle>
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
    if (page === 6) {
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
                  <PageSubTitle>Data Final: 06/01/2020</PageSubTitle>
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
                <ReportTitle>Ergo 17</ReportTitle>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="result">
                      Resultado do último relátório %
                    </LabelInput>
                    <InputNumberFourth
                      onChange={e => {
                        this.setState({
                          result: e.target.value,
                          fullErgo: {
                            result: e.target.result,
                          },
                        });
                        if (this.state.result > 100) {
                          this.state.result = 100;
                        }
                      }}
                      value={this.state.result}
                      min="0"
                      max="100"
                      maxLength="3"
                    />
                  </FormGroup>

                  <FormGroup>
                    <LabelInput htmlFor="had">
                      Número de ações propostas
                    </LabelInput>
                    <InputNumberFourth
                      onChange={e =>
                        this.setState({
                          actions: e.target.value,
                          fullErgo: {
                            actions: e.target.actions,
                          },
                        })
                      }
                      value={this.state.actions}
                    />
                  </FormGroup>

                  <FormGroup>
                    <LabelInput htmlFor="implemented">
                      Foram Implementadas?
                    </LabelInput>
                    <SelectInputFourth
                      onChange={e =>
                        this.setState({
                          implemented: e.target.value,
                          notimplemented: null,
                          fullErgo: {
                            implemented: e.target.implemented,
                          },
                        })
                      }
                      value={this.state.implemented}
                    >
                      <Option value="Selecione" selected readonly>
                        Selecione
                      </Option>
                      <Option value="Sim">Sim</Option>
                      <Option value="Não">Não</Option>
                      <Option value="Excedido">Excedido</Option>
                    </SelectInputFourth>
                  </FormGroup>
                  {implemented === 'Não' ? (
                    <FormGroup>
                      <LabelInput htmlFor="had">
                        Ações não implementadas
                      </LabelInput>
                      <InputNumberFourth
                        onChange={e => {
                          this.setState({
                            notimplemented: e.target.value,
                            ergoNumberJustify: e.target.value,
                            fullErgo: {
                              notimplemented: e.target.notimplemented,
                            },
                          });
                        }}
                        value={this.state.notimplemented}
                      />
                    </FormGroup>
                  ) : (
                    ''
                  )}
                </Row>

                {implemented === 'Não' && Number(notimplemented) >= 1 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Ação 1</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="code1">Código</LabelInput>
                        <InputNumberTriple
                          onChange={e =>
                            this.setState({
                              code1: e.target.value,
                              fullErgo: {
                                code1: e.target.code1,
                              },
                            })
                          }
                          value={this.state.code1}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="implementation1">
                          Implementação
                        </LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              implementation1: e.target.value,
                              fullErgo: {
                                implementation1: e.target.implementation1,
                              },
                            })
                          }
                          value={this.state.implementation1}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Em análise">Em análise</Option>
                          <Option value="Inviável">Inviável</Option>
                        </SelectInputTriple>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="phase1">Fase</LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              phase1: e.target.value,
                              fullErgo: {
                                phase1: e.target.phase1,
                              },
                            })
                          }
                          value={this.state.phase1}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="1º FASE">1º FASE</Option>
                          <Option value="2º FASE">2º FASE</Option>
                          <Option value="3º FASE">3º FASE</Option>
                          <Option value="4º FASE">4º FASE</Option>
                          <Option value="5º FASE">5º FASE</Option>
                          <Option value="6º FASE">6º FASE</Option>
                          <Option value="7º FASE">7º FASE</Option>
                          <Option value="8º FASE">8º FASE</Option>
                          <Option value="9º FASE">9º FASE</Option>
                          <Option value="10º FASE">10º FASE</Option>
                        </SelectInputTriple>
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-25px' }}>
                      <FormGroup>
                        <LabelInput htmlFor="action1">Ação</LabelInput>
                        <InputText
                          onChange={e =>
                            this.setState({
                              action1: e.target.value,
                              fullErgo: {
                                action1: e.target.action1,
                              },
                            })
                          }
                          value={this.state.action1}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {implemented === 'Não' && Number(notimplemented) >= 2 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Ação 2</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="code2">Código</LabelInput>
                        <InputNumberTriple
                          onChange={e =>
                            this.setState({
                              code2: e.target.value,
                              fullErgo: {
                                code2: e.target.code2,
                              },
                            })
                          }
                          value={this.state.code2}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="implementation2">
                          Implementação
                        </LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              implementation2: e.target.value,
                              fullErgo: {
                                implementation2: e.target.implementation2,
                              },
                            })
                          }
                          value={this.state.implementation2}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Em análise">Em análise</Option>
                          <Option value="Inviável">Inviável</Option>
                        </SelectInputTriple>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="phase2">Fase</LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              phase2: e.target.value,
                              fullErgo: {
                                phase2: e.target.phase2,
                              },
                            })
                          }
                          value={this.state.phase2}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="1º FASE">1º FASE</Option>
                          <Option value="2º FASE">2º FASE</Option>
                          <Option value="3º FASE">3º FASE</Option>
                          <Option value="4º FASE">4º FASE</Option>
                          <Option value="5º FASE">5º FASE</Option>
                          <Option value="6º FASE">6º FASE</Option>
                          <Option value="7º FASE">7º FASE</Option>
                          <Option value="8º FASE">8º FASE</Option>
                          <Option value="9º FASE">9º FASE</Option>
                          <Option value="10º FASE">10º FASE</Option>
                        </SelectInputTriple>
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-25px' }}>
                      <FormGroup>
                        <LabelInput htmlFor="action2">Ação</LabelInput>
                        <InputText
                          onChange={e =>
                            this.setState({
                              action2: e.target.value,
                              fullErgo: {
                                action2: e.target.action2,
                              },
                            })
                          }
                          value={this.state.action2}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}

                {implemented === 'Não' && Number(notimplemented) >= 3 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Ação 3</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="code3">Código</LabelInput>
                        <InputNumberTriple
                          onChange={e =>
                            this.setState({
                              code3: e.target.value,
                              fullErgo: {
                                code3: e.target.code3,
                              },
                            })
                          }
                          value={this.state.code3}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="implementation3">
                          Implementação
                        </LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              implementation3: e.target.value,
                              fullErgo: {
                                implementation3: e.target.implementation3,
                              },
                            })
                          }
                          value={this.state.implementation3}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Em análise">Em análise</Option>
                          <Option value="Inviável">Inviável</Option>
                        </SelectInputTriple>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="phase3">Fase</LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              phase3: e.target.value,
                              fullErgo: {
                                phase3: e.target.phase3,
                              },
                            })
                          }
                          value={this.state.phase3}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="1º FASE">1º FASE</Option>
                          <Option value="2º FASE">2º FASE</Option>
                          <Option value="3º FASE">3º FASE</Option>
                          <Option value="4º FASE">4º FASE</Option>
                          <Option value="5º FASE">5º FASE</Option>
                          <Option value="6º FASE">6º FASE</Option>
                          <Option value="7º FASE">7º FASE</Option>
                          <Option value="8º FASE">8º FASE</Option>
                          <Option value="9º FASE">9º FASE</Option>
                          <Option value="10º FASE">10º FASE</Option>
                        </SelectInputTriple>
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-25px' }}>
                      <FormGroup>
                        <LabelInput htmlFor="action3">Ação</LabelInput>
                        <InputText
                          onChange={e =>
                            this.setState({
                              action3: e.target.value,
                              fullErgo: {
                                action3: e.target.action3,
                              },
                            })
                          }
                          value={this.state.action3}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}

                {implemented === 'Não' && Number(notimplemented) >= 4 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Ação 4</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="code4">Código</LabelInput>
                        <InputNumberTriple
                          onChange={e =>
                            this.setState({
                              code4: e.target.value,
                              fullErgo: {
                                code4: e.target.code4,
                              },
                            })
                          }
                          value={this.state.code4}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="implementation4">
                          Implementação
                        </LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              implementation4: e.target.value,
                              fullErgo: {
                                implementation4: e.target.implementation4,
                              },
                            })
                          }
                          value={this.state.implementation4}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Em análise">Em análise</Option>
                          <Option value="Inviável">Inviável</Option>
                        </SelectInputTriple>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="phase4">Fase</LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              phase4: e.target.value,
                              fullErgo: {
                                phase4: e.target.phase4,
                              },
                            })
                          }
                          value={this.state.phase4}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="1º FASE">1º FASE</Option>
                          <Option value="2º FASE">2º FASE</Option>
                          <Option value="3º FASE">3º FASE</Option>
                          <Option value="4º FASE">4º FASE</Option>
                          <Option value="5º FASE">5º FASE</Option>
                          <Option value="6º FASE">6º FASE</Option>
                          <Option value="7º FASE">7º FASE</Option>
                          <Option value="8º FASE">8º FASE</Option>
                          <Option value="9º FASE">9º FASE</Option>
                          <Option value="10º FASE">10º FASE</Option>
                        </SelectInputTriple>
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-25px' }}>
                      <FormGroup>
                        <LabelInput htmlFor="action4">Ação</LabelInput>
                        <InputText
                          onChange={e =>
                            this.setState({
                              action4: e.target.value,
                              fullErgo: {
                                action4: e.target.action4,
                              },
                            })
                          }
                          value={this.state.action4}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}

                {implemented === 'Não' && Number(notimplemented) >= 5 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Ação 5</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="code5">Código</LabelInput>
                        <InputNumberTriple
                          onChange={e =>
                            this.setState({
                              code5: e.target.value,
                              fullErgo: {
                                code5: e.target.code5,
                              },
                            })
                          }
                          value={this.state.code5}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="implementation5">
                          Implementação
                        </LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              implementation5: e.target.value,
                              fullErgo: {
                                implementation5: e.target.implementation5,
                              },
                            })
                          }
                          value={this.state.implementation5}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Em análise">Em análise</Option>
                          <Option value="Inviável">Inviável</Option>
                        </SelectInputTriple>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="phase5">Fase</LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              phase5: e.target.value,
                              fullErgo: {
                                phase5: e.target.phase5,
                              },
                            })
                          }
                          value={this.state.phase5}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="1º FASE">1º FASE</Option>
                          <Option value="2º FASE">2º FASE</Option>
                          <Option value="3º FASE">3º FASE</Option>
                          <Option value="4º FASE">4º FASE</Option>
                          <Option value="5º FASE">5º FASE</Option>
                          <Option value="6º FASE">6º FASE</Option>
                          <Option value="7º FASE">7º FASE</Option>
                          <Option value="8º FASE">8º FASE</Option>
                          <Option value="9º FASE">9º FASE</Option>
                          <Option value="10º FASE">10º FASE</Option>
                        </SelectInputTriple>
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-25px' }}>
                      <FormGroup>
                        <LabelInput htmlFor="action5">Ação</LabelInput>
                        <InputText
                          onChange={e =>
                            this.setState({
                              action5: e.target.value,
                              fullErgo: {
                                action5: e.target.action5,
                              },
                            })
                          }
                          value={this.state.action5}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {implemented === 'Não' && Number(notimplemented) >= 6 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Ação 6</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="code6">Código</LabelInput>
                        <InputNumberTriple
                          onChange={e =>
                            this.setState({
                              code6: e.target.value,
                              fullErgo: {
                                code6: e.target.code6,
                              },
                            })
                          }
                          value={this.state.code6}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="implementation6">
                          Implementação
                        </LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              implementation6: e.target.value,
                              fullErgo: {
                                implementation6: e.target.implementation6,
                              },
                            })
                          }
                          value={this.state.implementation6}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Em análise">Em análise</Option>
                          <Option value="Inviável">Inviável</Option>
                        </SelectInputTriple>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="phase6">Fase</LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              phase6: e.target.value,
                              fullErgo: {
                                phase6: e.target.phase6,
                              },
                            })
                          }
                          value={this.state.phase6}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="1º FASE">1º FASE</Option>
                          <Option value="2º FASE">2º FASE</Option>
                          <Option value="3º FASE">3º FASE</Option>
                          <Option value="4º FASE">4º FASE</Option>
                          <Option value="5º FASE">5º FASE</Option>
                          <Option value="6º FASE">6º FASE</Option>
                          <Option value="7º FASE">7º FASE</Option>
                          <Option value="8º FASE">8º FASE</Option>
                          <Option value="9º FASE">9º FASE</Option>
                          <Option value="10º FASE">10º FASE</Option>
                        </SelectInputTriple>
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-25px' }}>
                      <FormGroup>
                        <LabelInput htmlFor="action6">Ação</LabelInput>
                        <InputText
                          onChange={e =>
                            this.setState({
                              action6: e.target.value,
                              fullErgo: {
                                action6: e.target.action6,
                              },
                            })
                          }
                          value={this.state.action6}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}
                {implemented === 'Não' && Number(notimplemented) === 7 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Ação 7</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput htmlFor="code7">Código</LabelInput>
                        <InputNumberTriple
                          onChange={e =>
                            this.setState({
                              code7: e.target.value,
                              fullErgo: {
                                code7: e.target.code7,
                              },
                            })
                          }
                          value={this.state.code7}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="implementation7">
                          Implementação
                        </LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              implementation7: e.target.value,
                              fullErgo: {
                                implementation7: e.target.implementation7,
                              },
                            })
                          }
                          value={this.state.implementation7}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Em análise">Em análise</Option>
                          <Option value="Inviável">Inviável</Option>
                        </SelectInputTriple>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput htmlFor="phase7">Fase</LabelInput>
                        <SelectInputTriple
                          onChange={e =>
                            this.setState({
                              phase7: e.target.value,
                              fullErgo: {
                                phase7: e.target.phase7,
                              },
                            })
                          }
                          value={this.state.phase7}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="1º FASE">1º FASE</Option>
                          <Option value="2º FASE">2º FASE</Option>
                          <Option value="3º FASE">3º FASE</Option>
                          <Option value="4º FASE">4º FASE</Option>
                          <Option value="5º FASE">5º FASE</Option>
                          <Option value="6º FASE">6º FASE</Option>
                          <Option value="7º FASE">7º FASE</Option>
                          <Option value="8º FASE">8º FASE</Option>
                          <Option value="9º FASE">9º FASE</Option>
                          <Option value="10º FASE">10º FASE</Option>
                        </SelectInputTriple>
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-25px' }}>
                      <FormGroup>
                        <LabelInput htmlFor="action7">Ação</LabelInput>
                        <InputText
                          onChange={e =>
                            this.setState({
                              action7: e.target.value,
                              fullErgo: {
                                action7: e.target.action7,
                              },
                            })
                          }
                          value={this.state.action7}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}

                {implemented === 'Não' && Number(notimplemented) > 7
                  ? this.setState({
                      error: 'Existem mais de 7 ações não implementadas.',
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
