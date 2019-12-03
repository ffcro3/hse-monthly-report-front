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
  InputDateFourth,
  SelectInputFourth,
  InputTextFourth,
  ErrorFooter,
  Justify,
} from './styles';

import logo from '../../assets/logo.png';
import safetyLogo from '../../assets/safety_logo.png';
import { InputNumberFourth, InputTextTriple } from '../Ergo/styles';

export default class Report extends Component {
  state = {
    reportmensal: null,
    actualReport: null,
    reportData: [],
    fullRestrictions: [],
    page: 8,
    had: '',
    number: '',
    type1: '',
    reason1: '',
    start1: '',
    end1: '',
    days1: '',
    register1: '',
    name1: '',
    form1: '',
    description1: '',
    type2: '',
    reason2: '',
    start2: '',
    end2: '',
    days2: '',
    register2: '',
    name2: '',
    form2: '',
    description2: '',
    type3: '',
    reason3: '',
    start3: '',
    end3: '',
    days3: '',
    register3: '',
    name3: '',
    form3: '',
    description3: '',
    type4: '',
    reason4: '',
    start4: '',
    end4: '',
    days4: '',
    register4: '',
    name4: '',
    form4: '',
    description4: '',
    type5: '',
    reason5: '',
    start5: '',
    end5: '',
    days5: '',
    register5: '',
    name5: '',
    form5: '',
    description5: '',
    type6: '',
    reason6: '',
    start6: '',
    end6: '',
    days6: '',
    register6: '',
    name6: '',
    form6: '',
    description6: '',
    type7: '',
    reason7: '',
    start7: '',
    end7: '',
    days7: '',
    register7: '',
    name7: '',
    form7: '',
    description7: '',
    justifyExceed: '',
    restrictionNumberJustify: '',
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
      fullRestrictions: JSON.parse(JSON.stringify(response.data[8])),
    });

    console.log(response);

    window.beforeunload = e => {
      console.log('Stop this');
      e.preventDefault();
      e.returnValue = '';
    };

    await this.setState({
      had:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.had,
      number:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.number,
      type1:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.type1,
      reason1:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.reason1,
      start1:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.start1,
      end1:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.end1,
      days1:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.days1,
      register1:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.register1,
      name1:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.name1,
      form1:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.form1,
      description1:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.description1,
      type2:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.type2,
      reason2:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.reason2,
      start2:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.start2,
      end2:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.end2,
      days2:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.days2,
      register2:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.register2,
      name2:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.name2,
      form2:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.form2,
      description2:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.description2,
      type3:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.type3,
      reason3:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.reason3,
      start3:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.start3,
      end3:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.end3,
      days3:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.days3,
      register3:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.register3,
      name3:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.name3,
      form3:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.form3,
      description3:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.description3,
      type4:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.type4,
      reason4:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.reason4,
      start4:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.start4,
      end4:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.end4,
      days4:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.days4,
      register4:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.register4,
      name4:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.name4,
      form4:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.form4,
      description4:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.description4,
      type5:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.type5,
      reason5:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.reason5,
      start5:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.start5,
      end5:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.end5,
      days5:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.days5,
      register5:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.register5,
      name5:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.name5,
      form5:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.form5,
      description5:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.description5,
      type6:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.type6,
      reason6:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.reason6,
      start6:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.start6,
      end6:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.end6,
      days6:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.days6,
      register6:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.register6,
      name6:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.name6,
      form6:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.form6,
      description6:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.description6,
      type7:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.type7,
      reason7:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.reason7,
      start7:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.start7,
      end7:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.end7,
      days7:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.days7,
      register7:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.register7,
      name7:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.name7,
      form7:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.form7,
      description7:
        this.state.fullRestrictions === null
          ? ''
          : this.state.fullRestrictions.description7,
    });

    console.log(this.state.fullRestrictions);
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
    const sendMail = await api.post('/justify/restriction', {
      user: this.state.reportData.responsible,
      site: this.state.reportData.siteName,
      responsible: this.state.reportData.responsible,
      restrictions: this.state.catNumberJustify,
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
    const insertASO = await api.post('/restriction', {
      reportid: this.state.actualReport,
      had: this.state.had,
      number: this.state.number,
      type1: this.state.type1,
      reason1: this.state.reason1,
      start1: this.state.start1,
      end1: this.state.end1,
      days1: this.state.days1,
      register1: this.state.register1,
      name1: this.state.name1,
      form1: this.state.form1,
      description1: this.state.description1,
      type2: this.state.type2,
      reason2: this.state.reason2,
      start2: this.state.start2,
      end2: this.state.end2,
      days2: this.state.days2,
      register2: this.state.register2,
      name2: this.state.name2,
      form2: this.state.form2,
      description2: this.state.description2,
      type3: this.state.type3,
      reason3: this.state.reason3,
      start3: this.state.start3,
      end3: this.state.end3,
      days3: this.state.days3,
      register3: this.state.register3,
      name3: this.state.name3,
      form3: this.state.form3,
      description3: this.state.description3,
      type4: this.state.type4,
      reason4: this.state.reason4,
      start4: this.state.start4,
      end4: this.state.end4,
      days4: this.state.days4,
      register4: this.state.register4,
      name4: this.state.name4,
      form4: this.state.form4,
      description4: this.state.description4,
      type5: this.state.type5,
      reason5: this.state.reason5,
      start5: this.state.start5,
      end5: this.state.end5,
      days5: this.state.days5,
      register5: this.state.register5,
      name5: this.state.name5,
      form5: this.state.form5,
      description5: this.state.description5,
      type6: this.state.type6,
      reason6: this.state.reason6,
      start6: this.state.start6,
      end6: this.state.end6,
      days6: this.state.days6,
      register6: this.state.register6,
      name6: this.state.name6,
      form6: this.state.form6,
      description6: this.state.description6,
      type7: this.state.type7,
      reason7: this.state.reason7,
      start7: this.state.start7,
      end7: this.state.end7,
      days7: this.state.days7,
      register7: this.state.register7,
      name7: this.state.name7,
      form7: this.state.form7,
      description7: this.state.description7,
    });

    const loginpath = `/report-mensal/cat/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  handleGoback() {
    const loginpath = `/report-mensal/archive/${this.state.actualReport}`;
    this.props.history.push(loginpath);
  }

  render() {
    const {
      error,
      reportData,
      fullRestrictions,
      page,
      had,
      number,
    } = this.state;
    const date = 'Dezembro 2019';
    if (error === 'Existem mais de 7 ações colaboradores em restrição.') {
      return (
        <>
          <Error>
            <ErrorContainer>
              <ErrorTitle>
                Existem mais de 7 colaboradores em restrição.{' '}
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
    if (page === 8) {
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
                <ReportTitle>Restrições</ReportTitle>
                <Row>
                  <FormGroup>
                    <LabelInput htmlFor="had">
                      O site possui colaborador em restrição laboral?
                    </LabelInput>
                    <SelectInput
                      onChange={e =>
                        this.setState({
                          had: e.target.value,
                          fullRestrictions: {
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
                      <Option value="Sim">Sim</Option>
                      <Option value="Excedido">Excedido</Option>
                    </SelectInput>
                  </FormGroup>
                  {had === 'Sim' ? (
                    <FormGroup>
                      <LabelInput htmlFor="number">
                        Número de colaboradores em restrição
                      </LabelInput>
                      <InputNumber
                        onChange={e =>
                          this.setState({
                            number: e.target.value,
                            restrictionNumberJustify: e.target.value,
                            fullRestrictions: {
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
                {had === 'Sim' && Number(number) >= 1 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Restrição 1</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>Tipo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              type1: e.target.value,
                              fullRestrictions: {
                                type1: e.target.value,
                              },
                            })
                          }
                          value={this.state.type1}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Acidente com lesão">
                            Acidente com lesão
                          </Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Motivo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              reason1: e.target.value,
                              fullRestrictions: {
                                reason1: e.target.value,
                              },
                            })
                          }
                          value={this.state.reason1}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Ocupacional">Ocupacional</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Início da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              start1: e.target.value,
                              fullRestrictions: {
                                start1: e.target.value,
                              },
                            })
                          }
                          value={this.state.start1}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Fim da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              end1: e.target.value,
                              fullRestrictions: {
                                end1: e.target.value,
                              },
                            })
                          }
                          value={this.state.end1}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-25px' }}>
                      <FormGroup>
                        <LabelInput>Prazo em dias</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              days1: e.target.value,
                              fullRestrictions: {
                                days1: e.target.value,
                              },
                            })
                          }
                          value={this.state.days1}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Matricula</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              register1: e.target.value,
                              fullRestrictions: {
                                register1: e.target.value,
                              },
                            })
                          }
                          value={this.state.register1}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Nome</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              name1: e.target.value,
                              fullRestrictions: {
                                name1: e.target.value,
                              },
                            })
                          }
                          value={this.state.name1}
                          style={{ width: '450px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput>Preenchimento do Formulário</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              form1: e.target.value,
                              fullRestrictions: {
                                form1: e.target.value,
                              },
                            })
                          }
                          value={this.state.form1}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Finalizado">Finalizado</Option>
                          <Option value="Em Andamento">Em Andamento</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Ativadade Proposta</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              description1: e.target.value,
                              fullRestrictions: {
                                description1: e.target.value,
                              },
                            })
                          }
                          value={this.state.description1}
                          style={{ width: '650px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}{' '}
                {had === 'Sim' && Number(number) >= 2 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Restrição 2</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>Tipo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              type2: e.target.value,
                              fullRestrictions: {
                                type2: e.target.value,
                              },
                            })
                          }
                          value={this.state.type2}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Acidente com lesão">
                            Acidente com lesão
                          </Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Motivo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              reason2: e.target.value,
                              fullRestrictions: {
                                reason2: e.target.value,
                              },
                            })
                          }
                          value={this.state.reason2}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Ocupacional">Ocupacional</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Início da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              start2: e.target.value,
                              fullRestrictions: {
                                start2: e.target.value,
                              },
                            })
                          }
                          value={this.state.start2}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Fim da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              end2: e.target.value,
                              fullRestrictions: {
                                end2: e.target.value,
                              },
                            })
                          }
                          value={this.state.end2}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-25px' }}>
                      <FormGroup>
                        <LabelInput>Prazo em dias</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              days2: e.target.value,
                              fullRestrictions: {
                                days2: e.target.value,
                              },
                            })
                          }
                          value={this.state.days2}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Matricula</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              register2: e.target.value,
                              fullRestrictions: {
                                register2: e.target.value,
                              },
                            })
                          }
                          value={this.state.register2}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Nome</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              name2: e.target.value,
                              fullRestrictions: {
                                name2: e.target.value,
                              },
                            })
                          }
                          value={this.state.name2}
                          style={{ width: '450px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput>Preenchimento do Formulário</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              form2: e.target.value,
                              fullRestrictions: {
                                form2: e.target.value,
                              },
                            })
                          }
                          value={this.state.form2}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Finalizado">Finalizado</Option>
                          <Option value="Em Andamento">Em Andamento</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Ativadade Proposta</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              description2: e.target.value,
                              fullRestrictions: {
                                description2: e.target.value,
                              },
                            })
                          }
                          value={this.state.description2}
                          style={{ width: '650px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}{' '}
                {had === 'Sim' && Number(number) >= 3 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Restrição 3</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>Tipo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              type3: e.target.value,
                              fullRestrictions: {
                                type3: e.target.value,
                              },
                            })
                          }
                          value={this.state.type3}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Acidente com lesão">
                            Acidente com lesão
                          </Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Motivo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              reason3: e.target.value,
                              fullRestrictions: {
                                reason3: e.target.value,
                              },
                            })
                          }
                          value={this.state.reason3}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Ocupacional">Ocupacional</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Início da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              start3: e.target.value,
                              fullRestrictions: {
                                start3: e.target.value,
                              },
                            })
                          }
                          value={this.state.start3}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Fim da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              end3: e.target.value,
                              fullRestrictions: {
                                end3: e.target.value,
                              },
                            })
                          }
                          value={this.state.end3}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-35px' }}>
                      <FormGroup>
                        <LabelInput>Prazo em dias</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              days3: e.target.value,
                              fullRestrictions: {
                                days3: e.target.value,
                              },
                            })
                          }
                          value={this.state.days3}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Matricula</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              register3: e.target.value,
                              fullRestrictions: {
                                register3: e.target.value,
                              },
                            })
                          }
                          value={this.state.register3}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Nome</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              name3: e.target.value,
                              fullRestrictions: {
                                name3: e.target.value,
                              },
                            })
                          }
                          value={this.state.name3}
                          style={{ width: '450px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput>Preenchimento do Formulário</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              form3: e.target.value,
                              fullRestrictions: {
                                form3: e.target.value,
                              },
                            })
                          }
                          value={this.state.form3}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Finalizado">Finalizado</Option>
                          <Option value="Em Andamento">Em Andamento</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Ativadade Proposta</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              description3: e.target.value,
                              fullRestrictions: {
                                description3: e.target.value,
                              },
                            })
                          }
                          value={this.state.description3}
                          style={{ width: '650px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}{' '}
                {had === 'Sim' && Number(number) >= 4 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Restrição 4</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>Tipo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              type4: e.target.value,
                              fullRestrictions: {
                                type4: e.target.value,
                              },
                            })
                          }
                          value={this.state.type4}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Acidente com lesão">
                            Acidente com lesão
                          </Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Motivo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              reason4: e.target.value,
                              fullRestrictions: {
                                reason4: e.target.value,
                              },
                            })
                          }
                          value={this.state.reason4}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Ocupacional">Ocupacional</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Início da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              start4: e.target.value,
                              fullRestrictions: {
                                start4: e.target.value,
                              },
                            })
                          }
                          value={this.state.start4}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Fim da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              end4: e.target.value,
                              fullRestrictions: {
                                end4: e.target.value,
                              },
                            })
                          }
                          value={this.state.end4}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-45px' }}>
                      <FormGroup>
                        <LabelInput>Prazo em dias</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              days4: e.target.value,
                              fullRestrictions: {
                                days4: e.target.value,
                              },
                            })
                          }
                          value={this.state.days4}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Matricula</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              register4: e.target.value,
                              fullRestrictions: {
                                register4: e.target.value,
                              },
                            })
                          }
                          value={this.state.register4}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Nome</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              name4: e.target.value,
                              fullRestrictions: {
                                name4: e.target.value,
                              },
                            })
                          }
                          value={this.state.name4}
                          style={{ width: '450px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput>Preenchimento do Formulário</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              form4: e.target.value,
                              fullRestrictions: {
                                form4: e.target.value,
                              },
                            })
                          }
                          value={this.state.form4}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Finalizado">Finalizado</Option>
                          <Option value="Em Andamento">Em Andamento</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Ativadade Proposta</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              description4: e.target.value,
                              fullRestrictions: {
                                description4: e.target.value,
                              },
                            })
                          }
                          value={this.state.description4}
                          style={{ width: '650px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}{' '}
                {had === 'Sim' && Number(number) >= 5 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Restrição 5</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>Tipo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              type5: e.target.value,
                              fullRestrictions: {
                                type5: e.target.value,
                              },
                            })
                          }
                          value={this.state.type5}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Acidente com lesão">
                            Acidente com lesão
                          </Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Motivo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              reason5: e.target.value,
                              fullRestrictions: {
                                reason5: e.target.value,
                              },
                            })
                          }
                          value={this.state.reason5}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Ocupacional">Ocupacional</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Início da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              start5: e.target.value,
                              fullRestrictions: {
                                start5: e.target.value,
                              },
                            })
                          }
                          value={this.state.start5}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Fim da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              end5: e.target.value,
                              fullRestrictions: {
                                end5: e.target.value,
                              },
                            })
                          }
                          value={this.state.end5}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-45px' }}>
                      <FormGroup>
                        <LabelInput>Prazo em dias</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              days5: e.target.value,
                              fullRestrictions: {
                                days5: e.target.value,
                              },
                            })
                          }
                          value={this.state.days5}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Matricula</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              register5: e.target.value,
                              fullRestrictions: {
                                register5: e.target.value,
                              },
                            })
                          }
                          value={this.state.register5}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Nome</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              name5: e.target.value,
                              fullRestrictions: {
                                name5: e.target.value,
                              },
                            })
                          }
                          value={this.state.name5}
                          style={{ width: '550px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput>Preenchimento do Formulário</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              form5: e.target.value,
                              fullRestrictions: {
                                form5: e.target.value,
                              },
                            })
                          }
                          value={this.state.form5}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Finalizado">Finalizado</Option>
                          <Option value="Em Andamento">Em Andamento</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Ativadade Proposta</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              description5: e.target.value,
                              fullRestrictions: {
                                description5: e.target.value,
                              },
                            })
                          }
                          value={this.state.description5}
                          style={{ width: '650px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}{' '}
                {had === 'Sim' && Number(number) >= 6 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Restrição 6</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>Tipo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              type6: e.target.value,
                              fullRestrictions: {
                                type6: e.target.value,
                              },
                            })
                          }
                          value={this.state.type6}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Acidente com lesão">
                            Acidente com lesão
                          </Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Motivo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              reason6: e.target.value,
                              fullRestrictions: {
                                reason6: e.target.value,
                              },
                            })
                          }
                          value={this.state.reason6}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Ocupacional">Ocupacional</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Início da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              start6: e.target.value,
                              fullRestrictions: {
                                start6: e.target.value,
                              },
                            })
                          }
                          value={this.state.start6}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Fim da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              end6: e.target.value,
                              fullRestrictions: {
                                end6: e.target.value,
                              },
                            })
                          }
                          value={this.state.end6}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-45px' }}>
                      <FormGroup>
                        <LabelInput>Prazo em dias</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              days6: e.target.value,
                              fullRestrictions: {
                                days6: e.target.value,
                              },
                            })
                          }
                          value={this.state.days6}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Matricula</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              register6: e.target.value,
                              fullRestrictions: {
                                register6: e.target.value,
                              },
                            })
                          }
                          value={this.state.register6}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Nome</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              name6: e.target.value,
                              fullRestrictions: {
                                name6: e.target.value,
                              },
                            })
                          }
                          value={this.state.name6}
                          style={{ width: '650px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput>Preenchimento do Formulário</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              form6: e.target.value,
                              fullRestrictions: {
                                form6: e.target.value,
                              },
                            })
                          }
                          value={this.state.form6}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Finalizado">Finalizado</Option>
                          <Option value="Em Andamento">Em Andamento</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Ativadade Proposta</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              description6: e.target.value,
                              fullRestrictions: {
                                description6: e.target.value,
                              },
                            })
                          }
                          value={this.state.description6}
                          style={{ width: '650px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}{' '}
                {had === 'Sim' && Number(number) === 7 ? (
                  <>
                    <ItemContainer>
                      <IPTitle>Restrição 7</IPTitle>
                    </ItemContainer>
                    <Row>
                      <FormGroup>
                        <LabelInput>Tipo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              type7: e.target.value,
                              fullRestrictions: {
                                type7: e.target.value,
                              },
                            })
                          }
                          value={this.state.type7}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Acidente com lesão">
                            Acidente com lesão
                          </Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Motivo da Restrição</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              reason7: e.target.value,
                              fullRestrictions: {
                                reason7: e.target.value,
                              },
                            })
                          }
                          value={this.state.reason7}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Assistencial">Assistencial</Option>
                          <Option value="Ocupacional">Ocupacional</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Início da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              start7: e.target.value,
                              fullRestrictions: {
                                start7: e.target.value,
                              },
                            })
                          }
                          value={this.state.start7}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Fim da Restrição</LabelInput>
                        <InputDateFourth
                          onChange={e =>
                            this.setState({
                              end7: e.target.value,
                              fullRestrictions: {
                                end7: e.target.value,
                              },
                            })
                          }
                          value={this.state.end7}
                        />
                      </FormGroup>
                    </Row>
                    <Row style={{ marginTop: '-45px' }}>
                      <FormGroup>
                        <LabelInput>Prazo em dias</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              days7: e.target.value,
                              fullRestrictions: {
                                days7: e.target.value,
                              },
                            })
                          }
                          value={this.state.days7}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Matricula</LabelInput>
                        <InputNumberFourth
                          onChange={e =>
                            this.setState({
                              register7: e.target.value,
                              fullRestrictions: {
                                register7: e.target.value,
                              },
                            })
                          }
                          value={this.state.register7}
                        />
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Nome</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              name7: e.target.value,
                              fullRestrictions: {
                                name7: e.target.value,
                              },
                            })
                          }
                          value={this.state.name7}
                          style={{ width: '650px' }}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <LabelInput>Preenchimento do Formulário</LabelInput>
                        <SelectInputFourth
                          onChange={e =>
                            this.setState({
                              form7: e.target.value,
                              fullRestrictions: {
                                form7: e.target.value,
                              },
                            })
                          }
                          value={this.state.form7}
                        >
                          <Option value="Selecione" selected readonly>
                            Selecione
                          </Option>
                          <Option value="Finalizado">Finalizado</Option>
                          <Option value="Em Andamento">Em Andamento</Option>
                        </SelectInputFourth>
                      </FormGroup>
                      <FormGroup>
                        <LabelInput>Ativadade Proposta</LabelInput>
                        <InputTextTriple
                          onChange={e =>
                            this.setState({
                              description7: e.target.value,
                              fullRestrictions: {
                                description7: e.target.value,
                              },
                            })
                          }
                          value={this.state.description7}
                          style={{ width: '650px' }}
                        />
                      </FormGroup>
                    </Row>
                  </>
                ) : (
                  ''
                )}{' '}
                {had === 'Sim' && Number(number) > 7
                  ? this.setState({
                      error:
                        'Existem mais de 7 ações colaboradores em restrição.',
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
