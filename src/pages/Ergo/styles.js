import styled from 'styled-components';

export const PageTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Heebo:800|Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  margin-left: 30px;
`;

export const PageSubTitle = styled.text`
  @import url('https://fonts.googleapis.com/css?family=Lato:300&display=swap');
  font-family: 'Lato', sans-serif;
  font-size: 17px;
  margin-left: 30px;
  margin-top: 10px;
  flex-direction: row;
`;

export const IPContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => (props.primary ? '#2b9720' : '#c41d3c')};
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  margin-top: 25px;

  .h2 {
    font-size: 24px;
    color: ${props => (props.primary ? '#333' : '#fff')};
  }
`;

export const ItemContainer = styled.div`
  margin-top: 20px;
  display: flex;
  width: 400px;
  flex-direction: column;
  width: 100%;
  margin-bottom: -15px;
`;

export const StrongSubTitle = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Lato:300&display=swap');
  font-family: 'Lato', sans-serif;
  font-size: 17px;
  font-weight: bold;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ErrorTitle = styled.h1`
  font-size: 26px;
  color: #333;
  font-weight: bold;
  margin: 5px;
`;

export const ErrorSubTitle = styled.h1`
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin: 5px;
`;

export const SelectInput = styled.select`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 40px;
  width: 300px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
`;

export const SelectInputFourth = styled.select`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 40px;
  width: 220px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
`;

export const SelectInputTriple = styled.select`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 40px;
  width: 290px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
`;

export const ReportTitle = styled.h1`
  font-size: 20px;
  color: #333;
`;

export const IPTitle = styled.h1`
  font-size: 16px;
  color: #333;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  justify-content: space-between;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputNumber = styled.input.attrs({
  type: 'number',
})`
  margin-top: 10px;
  height: 40px;
  width: 430px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
`;

export const InputText = styled.input.attrs({
  type: 'text',
})`
  margin-top: 5px;
  height: 40px;
  width: 960px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
`;

export const InputTextTriple = styled.input.attrs({
  type: 'text',
})`
  margin-top: 10px;
  height: 40px;
  width: 290px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
`;

export const InputTextFourth = styled.input.attrs({
  type: 'text',
})`
  margin-top: 10px;
  height: 40px;
  width: 210px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
`;

export const InputNumberTriple = styled.input.attrs({
  type: 'number',
})`
  margin-top: 10px;
  height: 40px;
  width: 290px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
`;

export const InputNumberFourth = styled.input.attrs({
  type: 'number',
})`
  margin-top: 10px;
  height: 40px;
  width: 220px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
`;

export const InputDate = styled.input.attrs({
  type: 'date',
})`
  margin-top: 10px;
  height: 40px;
  width: 290px;
  border: 1px solid #ccc;
  color: #333;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
`;

export const Option = styled.option`
  color: #333;
  padding: 5px 15px;
  font-size: 15px;
`;

export const LabelInput = styled.label`
  margin-top: 15px;
  font-size: 16px;
  color: #333;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  margin: 30px;
`;

export const HeaderImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 150px;
  width: 7%;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  height: 150px;
  width: 80%;
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  margin-top: 20px;
`;

export const Divider = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
  margin-left: 5%;
  width: 90%;
  height: 1px;
  border-bottom: 1px solid #ccc;
  height: 1px;
`;

export const GoButton = styled.button`
  margin-top: 25px;
  height: 40px;
  width: 200px;
  background: #d60c3d;
  border: 0px;
  border-radius: 5px;
  justify-items: center;
  align-items: center;
  color: #fff;

  :hover {
    background: #d3112b;
  }
`;

export const BackButton = styled.button`
  margin-top: 25px;
  height: 40px;
  width: 120px;
  background: #d60c3d;
  border: 0px;
  border-radius: 5px;
  justify-items: center;
  align-items: center;
  color: #fff;

  :hover {
    background: #b00b33;
  }
`;

export const FowardButton = styled.button.attrs({
  type: 'submit',
})`
  margin-top: 25px;
  height: 40px;
  width: 120px;
  background: #2b9720;
  border: 0px;
  border-radius: 5px;
  justify-items: center;
  align-items: center;
  color: #fff;

  :hover {
    background: #6cc551;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
