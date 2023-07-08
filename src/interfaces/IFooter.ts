interface IFooter extends Document {
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
    mjText: {
      align: string;
      mjClass: string;
      containerBackgroundColor: string;
      color: string;
      padding: string;
      content: string;
    };
  };
}

export default IFooter;