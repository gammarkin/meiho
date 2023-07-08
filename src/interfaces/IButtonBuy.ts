import { Document } from 'mongoose';

interface IButtonBuy extends Document {
  backgroundRepeat: string;
  backgroundSize: string;
  backgroundPosition: string;
  border: string;
  direction: string;
  textAlign: string;
  padding: string;
  mjColumn: {
    border: string;
    verticalAlign: string;
    padding: string;
    mjButton: {
      align: string;
      backgroundColor: string;
      color: string;
      fontWeight: string;
      borderRadius: string;
      lineHeight: string;
      target: string;
      verticalAlign: string;
      border: string;
      textAlign: string;
      href: string;
      fontFamily: string;
      fontSize: string;
      width: string;
      padding: string;
      innerPadding: string;
      content: string;
    };
  };
}

export default IButtonBuy;